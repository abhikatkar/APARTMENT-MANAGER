const app = require("./index");
const connect = require("./Backend/src/Configs/db");

app.listen(process.env.PORT || 4455, async function () {
  try {
    await connect();
    console.log("listening on port 4455");
  } catch (err) {
    console.log(err.message);
  }
});
