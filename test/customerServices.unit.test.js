const CustomerServices = require("../src/services/customerServices");

describe("CustomerServices", () => {
  beforeAll(async () => {
    this.customerServices = new CustomerServices();
  });
  it("should create a customer", async () => {
    const name = "test";
    const email = "TEST@TEST    ";

    const isCreated = await this.customerServices.createCustomer(name, email);

    expect(isCreated).toBe(true);
  });
  //   it("should get all customers", async () => {});
});
