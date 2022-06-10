const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Contact = new Schema(
  {
    name: String,
    email: String,
    subject: String,
    message: String,
  },
  { collection: "contact", timestamps: true }
);
module.exports = mongoose.model("Contact", Contact);
