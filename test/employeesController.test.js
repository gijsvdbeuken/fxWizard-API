const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const expect = chai.expect;

chai.use(chaiHttp);

describe("Employees Controller", () => {
  let authToken;

  before((done) => {
    chai
      .request(app)
      .post("/auth")
      .send({ user: "Jake", pwd: "Abc123@@@" })
      .end((err, res) => {
        authToken = res.body.accessToken;
        done();
      });
  });

  describe("getAllEmployees", () => {
    it("should get all employees", (done) => {
      chai
        .request(app)
        .get("/employees")
        .set("Authorization", `Bearer ${authToken}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          done();
        });
    });
  });
});
