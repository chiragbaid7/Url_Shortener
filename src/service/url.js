const {
  createShortUrl,
  getShortUrl,
  getLongUrl,
  appendUrl,
  getUrls,
  deleteUrl,
  findUrl,
} = require("../data-access/url");
const { DOMAIN, BASE_62 } = require("../config/index");
//nanoid is a library for generating random ids
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet(BASE_62, 7);
const { validateUrl, validateAlias } = require("../helpers/validator");

const create = async (longurl, alias) => {
  await validateUrl(longurl);
  let shorturl;
  if (alias !== undefined) {
    await validateAlias(alias);
    shorturl = DOMAIN + alias;
  } else {
    //if reduce the id size to increase collison probabIlity
    shorturl = DOMAIN + nanoid();
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
const Delete = async (id) => {
  await deleteUrl(id);
};

const find = async (id) => {
  const result = await findUrl(id);
  return result;
};
module.exports = {
  create,
  get,
  append,
  Userurls,
  Delete,
  find,
};
