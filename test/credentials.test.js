const chai = require("chai");
const sinon = require("sinon");
const credentialsMiddleware = require("../middleware/credentials");
const allowedOrigins = require("../config/allowedOrigins");

const { expect } = chai;

describe("Credentials Middleware", () => {
  it("should set Access-Control-Allow-Credentials header for allowed origin", () => {
    // Mock the request and response objects
    const req = { headers: { origin: allowedOrigins[0] } };
    const res = { header: sinon.spy() };
    const next = sinon.spy();

    // Call the middleware
    credentialsMiddleware(req, res, next);

    // Assertions
    expect(res.header.calledOnce).to.be.true;
    expect(res.header.calledWith("Access-Control-Allow-Credentials", true)).to
      .be.true;
    expect(next.calledOnce).to.be.true;
  });

  it("should not set Access-Control-Allow-Credentials header for disallowed origin", () => {
    // Mock the request and response objects
    const req = { headers: { origin: "http://example.com" } };
    const res = { header: sinon.spy() };
    const next = sinon.spy();

    // Call the middleware
    credentialsMiddleware(req, res, next);

    // Assertions
    expect(res.header.called).to.be.false;
    expect(next.calledOnce).to.be.true;
  });
});
