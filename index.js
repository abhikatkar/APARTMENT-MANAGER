const express = require("express");

const dataController = require("./Backend/src/Controller/data.Controller");

const app = express();

app.use(express.json());

app.use("/item", dataController);

module.exports = app;
