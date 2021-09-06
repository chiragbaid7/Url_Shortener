const router = require("express").Router();
const { create, find } = require("../../service/user");
router.post("/signup", async (req, res, next) => {
  try {
    const token = await create(req.body);
    //jwt ka dhamakaon
    res.setHeader("Authorization", `Bearer ${token}`);
    res.json({ message: "Signup done" });
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const token = await find(req.body);
    //jwt ka dhamaka
    res.setHeader("Authorization", `Bearer ${token}`);
    res.json({ message: "Login done" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
