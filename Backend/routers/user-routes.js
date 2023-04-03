const express = require("express");
const userContoller = require("../controllers/user-controller");
const PasswordReset = require("../controllers/user-controller");
const router = express.Router();

router.post("/signup", userContoller.signup);
router.post("/login", userContoller.login);
router.get("/user", userContoller.getUser);
router.post("/logout", userContoller.logout);
router.get("/refreshtoken", userContoller.refreshToken);
router.post("/sendpasswordlink", userContoller.PasswordReset);

module.exports = router;
