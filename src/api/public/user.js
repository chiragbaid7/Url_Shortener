const router = require("express").Router();
const { create, find } = require("../../service/user");
router.post("/signup", async (req, res, next) => {
  try {
    const { token, user } = await create(req.body);
    //jwt ka dhamakaon
    res.setHeader("Authorization", `Bearer ${token}`);
    res.status(201).json({ message: "Signup done", data: user, token: token });
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { token, user } = await find(req.body);
    //jwt ka dhamaka
    res.setHeader("Authorization", `Bearer ${token}`);
    res.status(200).json({ message: "Login done", data: user, token: token });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
