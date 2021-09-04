const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Mongo_Url, Port } = require("./config/index");
const url = require("./api/url");

mongoose.connect(Mongo_Url);
app.use(express.json());
app.use(url);

app.listen(Port);
