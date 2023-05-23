const AWS = require("aws-sdk");
const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocument } = require("@aws-sdk/lib-dynamodb");
const { DocumentClient } = require("aws-sdk/clients/dynamodb");
// const { DynamoDB } = require("@aws-sdk/client-dynamodb");

class CustomerServices {
  // isTest = '';

  constructor() {
    this.isTest = process.env.JEST_WORKER_ID;
    // this.bbdd = DynamoDBDocument.from(
    //   new DynamoDB({
    //     ...(this.isTest && {
    //       endpoint: "localhost:8000",
    //       sslEnabled: false,
    //       region: "local-env",
    //       credentials: {
    //         accessKeyId: "fakeMyKeyId",
    //         secretAccessKey: "fakeSecretAccessKey",
    //       },
    //     }),
    //   })
    // );

    this.bbdd = new DocumentClient({
      convertEmptyValues: true,
      ...(this.isTest && {
        endpoint: "localhost:8000",
        sslEnabled: false,
        region: "local-env",
      }),
    });
  }

  async createCustomer(name, email) {
    try {
      const putParams = {
        TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
        Item: {
          primary_key: name,
          email: email,
        },
      };

      await this.bbdd.put(putParams).promise();

      return true;
    } catch (err) {
      console.log(err);

      return false;
    }
  }

  async getCustomers() {
    const scanParams = {
      TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
    };

    // const dinamoDb = new AWS.DynamoDB.DocumentClient();
    const customers = await this.bbdd.scan(scanParams).promise();

    return customers;
  }
}

module.exports = CustomerServices;
