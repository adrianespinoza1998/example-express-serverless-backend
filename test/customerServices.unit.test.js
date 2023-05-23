const CustomerServices = require("../src/services/customerServices");

describe("CustomerServices", () => {
  beforeAll(async () => {
    this.customerServices = new CustomerServices();
  });

  it("should create a customer", async () => {
    const name = "test";
    const email = "TEST@TEST";

    const isCreated = await this.customerServices.createCustomer(name, email);

    expect(isCreated).toBe(true);
  });

  it("should get all customers", async () => {
    const customers = await this.customerServices.getCustomers();

    expect(customers).toBeDefined();
    expect(customers.Items.length).toBeGreaterThan(0);
    expect(customers.Items[0].primary_key).toBeDefined();
    expect(typeof customers.Items[0].primary_key).toBe("string");
    expect(customers.Items[0].email).toBeDefined();
    expect(typeof customers.Items[0].email).toBe("string");
  });
});
