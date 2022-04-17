const express = require("express");

const Data = require("../Model/data.Model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const data = await Data.create(req.body);
    return res.send(data);
  } catch (err) {
    return res.send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    if (req.query.type) {
      const data = await Data.find({ type: { $eq: req.query.type } })
        .lean()
        .exec();
      return res.send(data);
    } else if (req.query.asc) {
      const data = await Data.find().sort({ flat_no: 1 }).lean().exec();
      return res.send(data);
    } else if (req.query.desc) {
      const data = await Data.find().sort({ flat_no: -1 }).lean().exec();
      return res.send(data);
    } else if (req.query.block) {
      const data = await Data.find({ block: { $eq: req.query.block } })
        .lean()
        .exec();
      return res.send(data);
    }

    const data = await Data.find().lean().exec();
    return res.send(data);
  } catch (err) {
    return res.send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Data.findById(req.params.id).lean().exec();
    return res.send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});



router.delete("/:id", async (req, res) => {
    try {
      const data = await Data.findByIdAndDelete(req.params.id)
        .lean()
        .exec();
      return res.send(data);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });





  module.exports = router;d