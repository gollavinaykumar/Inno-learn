const Router = require("express");
const { getUser } = require("../Controllers/Login");

const router = Router();
router.post("/", getUser);

module.exports = router;

