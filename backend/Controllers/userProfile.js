const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

 const userProfile = async (req, res) => {
  const { id } = req.body;
  try {
    const getUserProfile = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    res.json(getUserProfile);
  } catch (err) {
    res.status(400).json({ message: "failed to fetch user", err });
  }
};
module.exports = {
  userProfile,
};
