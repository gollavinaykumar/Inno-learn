const express = require("express");
const SignupRoutes = require("./Routes/SignupRoutes");
const LoginRoutes = require("./Routes/LoginRoutes");
const updateProfileRoutes = require("./Routes/updateProfileRoutes");
const userProfileRoutes = require("./Routes/userProfileRoutes");
const updatePlanPriceRoutes = require("./Routes/updatePlanPriceRoutes");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/signup", SignupRoutes);
app.use("/login", LoginRoutes);
app.use("/profile", updateProfileRoutes);
app.use("/Home/user", userProfileRoutes);
app.use("/Home/pricing", updatePlanPriceRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
