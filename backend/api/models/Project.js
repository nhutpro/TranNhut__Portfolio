const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Project = new Schema(
  {
    role: String,
    technology: String,
    time: Date,
    title: String,
    video: String,
    Website: String,
    image: String,
    language: String,
  },
  { collection: "project" }
);

module.exports = mongoose.model("Project", Project);
