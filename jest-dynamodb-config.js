module.exports = {
  tables: [
    {
      AttributeDefinitions: [
        {
          AttributeName: "primary_key",
          AttributeType: "S",
        },
      ],
      KeySchema: [
        {
          AttributeName: "primary_key",
          KeyType: "HASH",
        },
      ],
      TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
      BillingMode: "PAY_PER_REQUEST",
    },
  ],
};
