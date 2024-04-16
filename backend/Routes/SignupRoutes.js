const Router = require("express");
const express = require("express");

const { createUser, getAllUsers } = require("../Controllers/Signup");

const router = express.Router();
router.get("/", getAllUsers);
router.post("/", createUser);

module.exports = router;

