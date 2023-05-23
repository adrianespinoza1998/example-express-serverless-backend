const {
  createCustomer,
  getCustomers,
} = require("./controllers/customerController");
const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.use(express.json());

app.post("/customers", createCustomer);
app.get("/customers", getCustomers);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

// if (process.env.IS_OFFLINE) {
//   app.listen(3000, () => {
//     console.log("Server running on port 3000");
//   });
// }

module.exports.handler = serverless(app);
module.exports.app = app;
