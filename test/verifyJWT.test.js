const chai = require("chai");
const sinon = require("sinon");
const jwt = require("jsonwebtoken");
const verifyJWT = require("../middleware/verifyJWT");

const { expect } = chai;

describe("verifyJWT Middleware", () => {
  it("should call next() if a valid token is provided", () => {
    const req = {
      headers: { authorization: "Bearer validToken" },
    };
    const res = {};
    const next = sinon.spy();

    sinon.stub(jwt, "verify").callsFake((token, secret, callback) => {
      callback(null, { UserInfo: { username: "testUser", roles: ["user"] } });
    });

    verifyJWT(req, res, next);

    expect(next.calledOnce).to.be.true;

    jwt.verify.restore();
  });

  it("should return 401 if no token is provided", () => {
    const req = { headers: {} };
    const res = { sendStatus: sinon.spy() };
    const next = sinon.spy();

    verifyJWT(req, res, next);

    expect(res.sendStatus.calledOnceWith(401)).to.be.true;
    expect(next.notCalled).to.be.true;
  });

  it("should return 401 if the token format is invalid", () => {
    const req = { headers: { authorization: "InvalidToken" } };
    const res = { sendStatus: sinon.spy() };
    const next = sinon.spy();

    verifyJWT(req, res, next);

    expect(res.sendStatus.calledOnceWith(401)).to.be.true;
    expect(next.notCalled).to.be.true;
  });

  it("should return 403 if the token is invalid", () => {
    const req = { headers: { authorization: "Bearer invalidToken" } };
    const res = { sendStatus: sinon.spy() };
    const next = sinon.spy();

    sinon.stub(jwt, "verify").callsFake((token, secret, callback) => {
      callback(new Error("Invalid token"));
    });

    verifyJWT(req, res, next);

    expect(res.sendStatus.calledOnceWith(403)).to.be.true;
    expect(next.notCalled).to.be.true;

    jwt.verify.restore();
  });
});
