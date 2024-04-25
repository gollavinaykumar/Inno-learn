const Router = require("express");
const  { updateProfile, updateProfilePic } = require("../Controllers/updateProfile");

const router = Router();
router.post("/", updateProfile);
router.patch("/", updateProfilePic);
module.exports = router;
