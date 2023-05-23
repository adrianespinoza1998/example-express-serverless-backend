const request = require("supertest");
const { app } = require("../src/index");

describe("CustomerController", () => {
  it("should create a customer", async () => {
    const name = "test";
    const email = "test@test.com";

    const response = await request(app)
      .post("/customers")
      .send({ name, email });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ name, email });
  });

  it("should get all customers", async () => {
    const response = await request(app).get("/customers");

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body.data.length).toBeGreaterThan(0);
    expect(response.body.data[0].name).toBeDefined();
    expect(typeof response.body.data[0].name).toBe("string");
    expect(response.body.data[0].email).toBeDefined();
    expect(typeof response.body.data[0].name).toBe("string");
  });
});
