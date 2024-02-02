const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// const session = require("express-session");

const credentials = require("./credentials.js");
const app = express();
require("dotenv").config();

const dbUrl = "";
// "mongodb://" +
// credentials.username +
// ":" +
// credentials.password +
// "@" +
// credentials.host +
// ":" +
// credentials.port +
// "/" +
// credentials.database;

mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(session({ secret: "mysecret" }));

const routes = require("./routes/index");
app.use(cors({ origin: "*" }));
app.use("/api", routes);
app.use((req, res) => {
  res.status(404);
  res.send("404");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
