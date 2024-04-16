const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

const getUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(400).json({ message: "Invalid email or password" });
      return;
    }

    const updateUser = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        isloggedIn: true,
      },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
module.exports = {
  getUser,
};
