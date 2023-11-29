const chai = require("chai");
const sinon = require("sinon");
const verifyRoles = require("../middleware/verifyRoles");

const { expect } = chai;

describe("verifyRoles Middleware", () => {
  it("should call next() if user has an allowed role", () => {
    const req = { roles: ["admin"] };
    const res = {};
    const next = sinon.spy();

    verifyRoles("admin")(req, res, next);

    expect(next.calledOnce).to.be.true;
  });

  it("should return 401 if user has no roles", () => {
    const req = {};
    const res = { sendStatus: sinon.spy() };
    const next = sinon.spy();

    verifyRoles("admin")(req, res, next);

    expect(res.sendStatus.calledOnceWith(401)).to.be.true;
    expect(next.notCalled).to.be.true;
  });

  it("should return 401 if user does not have an allowed role", () => {
    const req = { roles: ["user"] };
    const res = { sendStatus: sinon.spy() };
    const next = sinon.spy();

    verifyRoles("admin")(req, res, next);

    expect(res.sendStatus.calledOnceWith(401)).to.be.true;
    expect(next.notCalled).to.be.true;
  });

  it("should handle multiple allowed roles", () => {
    const req = { roles: ["editor"] };
    const res = {};
    const next = sinon.spy();

    verifyRoles("admin", "editor")(req, res, next);

    expect(next.calledOnce).to.be.true;
  });

  it("should return 401 if user does not have any allowed roles", () => {
    const req = { roles: ["user"] };
    const res = { sendStatus: sinon.spy() };
    const next = sinon.spy();

    verifyRoles("admin", "editor")(req, res, next);

    expect(res.sendStatus.calledOnceWith(401)).to.be.true;
    expect(next.notCalled).to.be.true;
  });
});
