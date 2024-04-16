const express = require("express");
const SignupRoutes = require("./Routes/SignupRoutes");
const LoginRoutes = require("./Routes/LoginRoutes");

const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/signup", SignupRoutes);
app.use("/login", LoginRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
