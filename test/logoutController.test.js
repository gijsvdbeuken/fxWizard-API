const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const expect = chai.expect;

chai.use(chaiHttp);

describe("Logout Controller", () => {
  describe("handleLogout", () => {
    it("should clear cookie and return 204 for valid user", (done) => {
      const username = "Jake";
      const password = "Abc123@@@";

      chai
        .request(app)
        .post("/auth")
        .send({ user: username, pwd: password })
        .end((authErr, authRes) => {
          const validRefreshToken = authRes.body.refreshToken;

          chai
            .request(app)
            .get("/logout")
            .set("Cookie", `jwt=${validRefreshToken}`)
            .end((err, res) => {
              expect(res).to.have.status(204);
              expect(res.header["set-cookie"][0]).to.include("jwt=;");
              done();
            });
        });
    });

    it("should return 204 for user with missing refresh token cookie", (done) => {
      chai
        .request(app)
        .get("/logout")
        .end((err, res) => {
          expect(res).to.have.status(204);
          done();
        });
    });

    it("should return 204 and clear cookie for user with missing user in database", (done) => {
      const invalidRefreshToken = "invalidRefreshToken";

      chai
        .request(app)
        .get("/logout")
        .set("Cookie", `jwt=${invalidRefreshToken}`)
        .end((err, res) => {
          expect(res).to.have.status(204);
          expect(res.header["set-cookie"][0]).to.include("jwt=;");
          done();
        });
    });
  });
});
