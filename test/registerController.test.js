process.env.NODE_ENV = "test";
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require("chai-http");
const app = require("../server");
chai.use(chaiHttp);

const generatedUsername = `testUser_${Date.now()}_${Math.floor(
  Math.random() * 100000
)}`;

console.log(`Generated username: ${generatedUsername}`);

describe("Register Controller", () => {
  describe("handleNewUser", () => {
    it("should handle new user creation", (done) => {
      chai
        .request(app)
        .post("/register")
        .send({
          user: generatedUsername,
          pwd: "Abc123@@@",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property(
            "success",
            `New user ${generatedUsername} created!`
          );
          done();
        });
    });

    it("should handle duplicate user", (done) => {
      chai
        .request(app)
        .post("/register")
        .send({
          user: generatedUsername,
          pwd: "Abc123@@@",
        })
        .end((err, res) => {
          expect(res).to.have.status(409);
          done();
        });
    });

    it("should handle missing username/password", (done) => {
      chai
        .request(app)
        .post("/register")
        .send({})
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property(
            "message",
            "Username and password are required."
          );
          done();
        });
    });
  });
});
