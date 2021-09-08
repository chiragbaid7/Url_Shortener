const router = require("express").Router();
const {
  createURL,
  userURLs,
  deleteURL,
  findURL,
} = require("../../service/url");

router.get("/myurls", async (req, res, next) => {
  //get all urls
  try {
    const urls = await userURLs(req.id);
    res.status(200).json(urls);
  } catch (err) {
    next(err);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const { longurl, alias } = req.body;
    const result = await createURL(longurl, alias, req.id);
    //append object id in the user document
    res.status(201).json({ message: "success", data: result });
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const result = await findURL(req.params.id);
    await deleteURL(req.params.id);
    res.status(201).json({ message: "success", data: result });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
