const Url = require("../database/models/UrlSchema");
const BaseError = require("../core/BaseError");
const createShortUrl = async (shorturl, longurl, user_id) => {
  const doc = new Url({
    shorturl: shorturl,
    longurl: longurl,
    createdby: user_id,
  });
  doc.clickcount += 1;
  const newurl = await doc.save();
  return newurl;
};
const findUrl = async (id) => {
  const url = await Url.findById(id);
  if (!url) {
    throw BaseError.Api404Error("Url id not found");
  }
  return url;
};
const getShortUrl = async (shorturl) => {
  const a = await Url.findOne({ shorturl: shorturl });
  if (a) {
    throw BaseError.Api422Error("Please try again");
  }
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

const getUrls = async (user_id) => {
  const urls = await Url.find({ createdby: user_id }, "-createdby");
  return urls;
};
const delete_url = async (id) => {
  await Url.deleteOne({ _id: id });
};
module.exports = {
  createShortUrl,
  getShortUrl,
  getLongUrl,
  getUrls,
  delete_url,
  findUrl,
};
