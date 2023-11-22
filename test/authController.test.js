const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const expect = chai.expect;

chai.use(chaiHttp);

describe("Auth Controller", () => {
  describe("handleLogin", () => {
    it("should handle POST /auth with valid credentials", (done) => {
      chai
        .request(app)
        .post("/auth")
        .send({
          user: "Jake",
          pwd: "Abc123@@@",
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.roles).to.be.an("array").that.includes(2001);
          done();
        });
    });

    it("should handle POST /auth with invalid credentials", (done) => {
      chai
        .request(app)
        .post("/login")
        .send({
          user: "invalidUser",
          pwd: "invalidPassword",
        })
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    });
  });
});
