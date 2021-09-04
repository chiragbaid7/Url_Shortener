const router = require("express").Router();
const { create, get } = require("../service/url");

router.post("/", async (req, res, next) => {
  try {
    const { longurl, alias } = req.body;
    const result = await create(longurl, alias);
    res.status(201).json({ message: result });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  //redirect to long url
  try {
    const shorturl = "http://localhost:8080/" + req.params.id;
    const response = await get(shorturl);
    res.redirect(response.longurl);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {});

module.exports = router;
