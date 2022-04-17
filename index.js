const express = require("express");

const Connect = require("./Backend/src/Configs/db");

const dataController = require("./Backend/src/Controller/data.Controller");

const app = express();

app.use(express.json());

app.use("/item", dataController);

app.listen(process.env.PORT || 4455, async function () {
  try {
    await Connect();
    console.log("listening on port 4455");
  } catch (err) {
    console.log(err.message);
  }
});
