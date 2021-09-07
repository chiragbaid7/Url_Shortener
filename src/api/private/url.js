const router = require("express").Router();
const { create, append, Userurls, Delete, find } = require("../../service/url");

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
    res.status(201).json({ message: "success", data: result });
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const result = await find(req.params.id);
    await Delete(req.params.id);
    res.status(201).json({ message: "success", data: result });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
