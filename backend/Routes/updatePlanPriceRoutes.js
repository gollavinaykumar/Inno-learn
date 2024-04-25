const Router = require("express");

const {
  createPayment,
  updatePricePlan,
} = require("../Controllers/updatePricePlan");

const router = Router();

router.patch("/", updatePricePlan);
router.post("/", createPayment);

module.exports = router;
