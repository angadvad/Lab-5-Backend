const express = require("express");
const routes = require("./routers/router");
const app = express();
const port = 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerSetup = require('./swagger.json');


app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSetup)
); //swagger app @ http://localhost:3000/api-docs/


routes(app); //register the route


app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log("Error occurred", error);
  }
});