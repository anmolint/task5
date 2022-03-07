const express = require("express");
const app = express();
const router = require("./routes/routScraper");
app.use(express.json());
app.use("/", router) 
  app.listen(5000, () => {
    console.log("server started at 5000");
  });