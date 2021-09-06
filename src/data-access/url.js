const Url = require("../database/models/UrlSchema");
const User = require("../database/models/UserSchema");
const BaseError = require("../core/BaseError");

const createShortUrl = async (shorturl, longurl) => {
  const doc = new Url({
    shorturl: shorturl,
    longurl: longurl,
  });
  doc.clickcount += 1;
  const newurl = await doc.save();
  return newurl;
};

const getShortUrl = async (shorturl) => {
  const a = await Url.findOne({ shorturl: shorturl });
  if (a) {
    throw BaseError.Api422Error("This alias is already available");
  }
  //same url or alias not present then cool
  return a;
};

const getLongUrl = async (shorturl) => {
  const doc = await Url.findOne({ shorturl: shorturl }, "longurl clickcount");
  if (!doc) {
    throw BaseError.Api404Error("Resouce Not Found");
  }
  //increment clickcount
  await doc.updateOne({ clickcount: doc.clickcount + 1 });
  return doc;
};
const appendUrl = async (user_id, url_id) => {
  await User.updateOne({ _id: user_id }, { $push: { Links: [url_id] } });
};
const getUrls = async (user_id) => {
  const urls = await User.findOne({ _id: user_id }, "Links -_id").populate(
    "Links"
  );
  return urls;
};
module.exports = {
  createShortUrl,
  getShortUrl,
  getLongUrl,
  appendUrl,
  getUrls,
};
