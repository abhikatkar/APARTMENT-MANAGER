const express = require("express");
const { required } = require("nodemon/lib/config");

const connect = require("./Backend/src/Configs/db");

const dataController = require("./Backend/src/Controller/data.Controller");

const app = express();

app.use(express.json());

app.use("/data", dataController);

app.listen(process.env.PORT || 4455, async () => {
  try {
    await connect();
    console.log("listening on port 4455");
  } catch (err) {
    console.log(err.message);
  }
});


