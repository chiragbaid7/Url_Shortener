const router = require("express").Router();
const { create, append, Userurls } = require("../../service/url");

router.get("/myurls", async (req, res, next) => {
  //get all urls
  try {
    const urls = await Userurls(req.id);
    res.status(200).json(urls);
  } catch (err) {
    next(err);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const { longurl, alias } = req.body;
    const result = await create(longurl, alias);
    //append object id in the user document
    await append(req.id, result._id);
    res.status(201).json({ message: result });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
