const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Mongo_Url, Port } = require("./config/index");
const url = require("./api/url");
const { ApiErrorHandeler, Api400Error } = require("./core/APIErrorHandeler");
mongoose.connect(Mongo_Url);
app.use(express.json());
app.use(url);
//Error for Invalid URL
app.use(Api400Error);
//Error Handler function
app.use(ApiErrorHandeler);

app.listen(Port);
