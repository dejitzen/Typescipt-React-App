import express from "express";
const app = express();
const path = require('path');
import mongoose from "mongoose";
import shortId from "shortid";
const ShortURL = require('./models/url')
import bodyParser from "body-parser";
import { Data } from "./models/data";
var cors = require('cors')
app.use(cors())
app.use(express.static(path.join(__dirname, './views/url-short/dist')));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '/views/url-short/dist/index.html'));
});
app.post("/short", async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const record = new ShortURL({
    full: req.body.url,
    short: "https://pbid.io/" + shortId.generate(),
  });
  await record.save();
   res.redirect('/');
});
app.get("/fetch", async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  var data:Data = await ShortURL.find({});
  res.json({results:data});
});
mongoose.connect(
  "mongodb+srv://erlind:erlind@cluster0.eihuv.mongodb.net/Cluster0?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.on("open", () => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("Server started");
  });
});

