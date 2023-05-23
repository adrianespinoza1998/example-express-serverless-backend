const { Router } = require("express");
const { check } = require("express-validator");

const {
  createCustomer,
  getCustomers,
} = require("../controllers/customerController");

const router = Router();

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("name", "Name can be a string").isString(),
    check("email", "Email is required").isEmail(),
    check("email", "Email can be a string").isString(),
    check("email", "Email can be a valid email").isEmail(),
  ],
  createCustomer
);

router.get("/", getCustomers);

module.exports = router;
