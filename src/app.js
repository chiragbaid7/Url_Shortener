const express = require("express");
const app = express();
const mongoose = require("mongoose");
const url = require("./api/public/url");
const urlP = require("./api/private/url");
const user = require("./api/public/user");
const verifytoken = require("./auth/auth");
const { limiter } = require("./helpers/rate-limit");
const { ApiErrorHandeler, Api400Error } = require("./core/APIErrorHandeler");
const { MONGO_URL, PORT } = require("./config/index");

mongoose.connect(MONGO_URL);
app.use(express.json());
app.use(limiter);
app.use(user);
app.use(url);
app.use("/api", verifytoken, urlP);
app.use(Api400Error); //Error for Invalid URL
app.use(ApiErrorHandeler); //Error Handeler

app.listen(PORT);
