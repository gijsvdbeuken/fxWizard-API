const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const expect = chai.expect;

chai.use(chaiHttp);

describe("RefreshToken Controller", () => {
  describe("handleRefreshToken", () => {
    it("should handle missing refresh token cookie", (done) => {
      chai
        .request(app)
        .get("/refresh")
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    });

    it("should handle invalid refresh token (user not found)", (done) => {
      // Assume you have an invalid refresh token in your database
      const invalidRefreshToken = "invalidRefreshToken";

      chai
        .request(app)
        .get("/refresh")
        .set("Cookie", `jwt=${invalidRefreshToken}`)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });
  });
});
