const express = require("express");
const app = express();
const mongoose = require("mongoose");
const urlpublic = require("./api/public/url");
const urlprivate = require("./api/private/url");
const user = require("./api/public/user");
const { verifytoken } = require("./auth/auth");
const { limiter } = require("./helpers/rate-limit");
const { ApiErrorHandeler, Api400Error } = require("./core/APIErrorHandeler");
const { MONGO_URL } = require("./config/index");

mongoose.connect(MONGO_URL);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);
app.use(user);
app.use(urlpublic);
app.use("/api", verifytoken, urlprivate);
app.use(Api400Error); //Error for Invalid URL
app.use(ApiErrorHandeler); //Error Handeler

module.exports = app;
