const { Schema, model } = require("mongoose");

//creating shorturl as secondary index
const UrlSchema = new Schema({
  shorturl: {
    type: String,
    required: true,
    unique: true,
  },
  longurl: {
    type: String,
    required: true,
  },
  clickcount: {
    type: Number,
    default: 0,
  },
});

const Url = model("Url", UrlSchema);

module.exports = Url;
