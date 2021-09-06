const {
  createShortUrl,
  getShortUrl,
  getLongUrl,
  appendUrl,
  getUrls,
} = require("../data-access/url");

//nanoid is a library for generating random ids
const { nanoid } = require("nanoid");

const { validateUrl, validateAlias } = require("../helpers/validator");

const create = async (longurl, alias) => {
  await validateUrl(longurl);
  let shorturl;
  if (alias !== undefined) {
    await validateAlias(alias);
    shorturl = "http://localhost:8080/" + alias;
  } else {
    //if reduce the id size to increase collison probabIlity
    shorturl = "http://localhost:8080/" + nanoid(7);
  }
  //check if short url is already present in the database
  await getShortUrl(shorturl);
  const result = await createShortUrl(shorturl, longurl);
  //containes the document

  return result;
};
const get = async (shorturl) => {
  const a = await getLongUrl(shorturl);
  return a;
};
const append = async (user_id, url_id) => {
  await appendUrl(user_id, url_id);
};
const Userurls = async (user_id) => {
  const urls = await getUrls(user_id);
  return urls;
};

module.exports = {
  create,
  get,
  append,
  Userurls,
};
