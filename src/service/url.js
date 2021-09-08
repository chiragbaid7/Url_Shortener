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
/*
  this function is to generate short urls by converting COUNTER to 
  base 62 which can rule out collision probability  
  let COUNTER = Number(100000000000);
  function generate() {
    let number = COUNTER;
    var string = "";
    while (number) {
      string = BASE_62[Math.floor(number % 62)] + string;
      number = Math.floor(number / 62);
    }
    return string;
}
*/
const createURL = async (longurl, alias, user_id) => {
  await validateUrl(longurl);
  let shorturl;
  if (alias !== undefined) {
    await validateAlias(alias);
    shorturl = DOMAIN + alias;
  } else {
    //if id size is reduced that can substantially increase collison probabIlity
    shorturl = DOMAIN + nanoid();
  }

  //shorturl=DOMAIN+generate();
  //COUNTER += 1;
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
