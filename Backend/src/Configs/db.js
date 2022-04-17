const mongoose = require("mongoose");


module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://abhi:Abhigayatri@cluster0.x2tbb.mongodb.net/data?retryWrites=true&w=majority"
  );
};
