const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const expect = chai.expect;

chai.use(chaiHttp);

/*
describe("Users Controller", () => {
  describe("getAllUsers", () => {
    it("should get all users", (done) => {
      const username = "Emily";
      const password = "Abc123@@@";

      chai
        .request(app)
        .post("/auth")
        .send({ user: username, pwd: password })
        .end((authErr, authRes) => {
          const validRefreshToken = authRes.body.refreshToken;

          chai
            .request(app)
            .get("/users")
            .set("Authorization", `Bearer ${validRefreshToken}`)
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body).to.be.an("array");
              done();
            });
        });
    });
  });

  describe("deleteUser", () => {
    it("should delete a user by ID", (done) => {
      // Assuming you have a valid user ID in your database
      const userId = "validUserId";

      chai
        .request(app)
        .delete("/users") // Assuming your route for deleting a user is '/users'
        .send({ id: userId })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("ok").equal(1);
          done();
        });
    });
  });

  describe("getUser", () => {
    it("should get a user by ID", (done) => {
      // Assuming you have a valid user ID in your database
      const userId = "validUserId";

      chai
        .request(app)
        .get(`/users/${userId}`) // Assuming your route for getting a user by ID is '/users/:id'
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          done();
        });
    });
  });
});
*/
