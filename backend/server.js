const express = require("express");
const cors = require("cors");
const route = require("./routes");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
var path = require("path");
app.use(morgan("combined"));
require("dotenv").config();
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Nhutpro:Trannhut1@cluster0.pc6gvu6.mongodb.net/portfolio?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.log("connect database failse!!");
  }
};
connectdb();
route(app);
app.listen(process.env.PORT, () => {
  console.log(`App listening at ${process.env.PORT}`);
});
