const {
  createShortUrl,
  getShortUrl,
  getLongUrl,
} = require("../data-access/url");

//nanoid is a library for generating random ids
const { nanoid } = require("nanoid");

const { validateUrl, validateAlias } = require("../helpers/validator");

const create = async (longurl, alias) => {
  try {
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
  } catch (err) {
    throw err;
  }
};
const get = async (shorturl) => {
  try {
    const a = await getLongUrl(shorturl);
    return a;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  create,
  get,
};
