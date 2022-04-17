const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    block: { type: String, required: true },
    flat_no: { type: Number, required: true },
    pic: { type: String, required: true },
    no_res: { type: Number, required: true },

    res1name: { type: String, required: true },
    res1gender: { type: String, required: true },
    res1age: { type: Number, required: true },

    res2name: { type: String, required: false },
    res2gender: { type: String, required: false },
    res2age: { type: Number, required: false },

    res3name: { type: String, required: false },
    res3gender: { type: String, required: false },
    res3age: { type: Number, required: false },

    res4name: { type: String, required: false },
    res4gender: { type: String, required: false },
    res4age: { type: Number, required: false },

    res5name: { type: String, required: false },
    res5gender: { type: String, required: false },
    res5age: { type: Number, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("data", dataSchema);
