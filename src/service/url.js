const {
  createShortUrl,
  getShortUrl,
  getLongUrl,
  getUrls,
  delete_url,
  findUrl,
} = require("../data-access/url");
const { DOMAIN, BASE_62 } = require("../config/index");
//nanoid is a library for generating random ids
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet(BASE_62, 7);
const { validateUrl, validateAlias } = require("../helpers/validator");

const createURL = async (longurl, alias, user_id) => {
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
  const result = await createShortUrl(shorturl, longurl, user_id);
  return result;
};
const get = async (shorturl) => {
  const a = await getLongUrl(shorturl);
  return a;
};

const userURLs = async (user_id) => {
  const urls = await getUrls(user_id);
  return urls;
};
const deleteURL = async (id) => {
  await delete_url(id);
};

const findURL = async (id) => {
  const result = await findUrl(id);
  return result;
};
module.exports = {
  createURL,
  get,
  userURLs,
  deleteURL,
  findURL,
};
