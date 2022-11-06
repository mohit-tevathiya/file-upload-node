const app = require("./app");
const mongoose = require("mongoose");
const connection=require('./db/connection')


connection.connect()


const port = 3000;

app.listen(port, () => {
  console.log("Server is up listening on port:" + port);
});
