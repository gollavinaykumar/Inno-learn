const Router = require("express");
const { userProfile } = require("../Controllers/userProfile");

const router = Router();
router.patch("/", userProfile);
module.exports = router;
