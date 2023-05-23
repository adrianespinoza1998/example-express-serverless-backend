const request = require("supertest");
const { app } = require("../src/index");

describe("CustomerController", () => {
  it("should create a customer", async () => {
    const name = "test";
    const email = "TEST@TEST";

    const response = await request(app)
      .post("/customers")
      .send({ name, email });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ name, email });
  });
});
