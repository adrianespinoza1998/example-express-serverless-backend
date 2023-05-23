const CustomerServices = require("../services/customerServices");

const createCustomer = async (req, res) => {
  const { name, email } = req.body;

  const customerServices = new CustomerServices();
  const isCreated = await customerServices.createCustomer(name, email);

  if (isCreated) {
    res.status(201).json({
      name,
      email,
    });
  } else {
    res.status(500).json({
      message: "Error creating customer",
    });
  }
};

const getCustomers = async (req, res) => {
  const customerServices = new CustomerServices();
  const customers = await customerServices.getCustomers();

  if (customers.Count === 0) {
    return res.status(404).json({
      message: "No customers found",
    });
  }

  res.status(200).json({
    count: customers.Count,
    data: customers.Items.map((customer) => {
      return {
        name: customer.primary_key,
        email: customer.email,
      };
    }),
  });
};

module.exports = {
  createCustomer,
  getCustomers,
};
