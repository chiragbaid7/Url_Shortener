const Url = require("../database/models/url");
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
  const a = await Url.findOne({ shorturl: shorturl }, "longurl");
  if (!a) {
    throw BaseError.Api404Error("Resouce Not Found");
  }
  return a;
};
module.exports = {
  createShortUrl,
  getShortUrl,
  getLongUrl,
};
