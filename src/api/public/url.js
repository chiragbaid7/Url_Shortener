const router = require("express").Router();
const { get } = require("../../service/url");

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

module.exports = router;
