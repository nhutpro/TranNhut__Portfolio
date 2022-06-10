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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
  } catch (error) {
    console.log("connect database failse!!");
  }
};
connectdb();
route(app);
app.use(express.static(path.join(__dirname, "public")));
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.listen(process.env.PORT, () => {
  console.log(`App listening at ${process.env.PORT}`);
});
