const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const updateProfile = async (req, res) => {
  const { id, name, email, number, role } = req.body;
  try {
    const updatedProfile = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        email: email,
        mobile: number,
        role: role,
      },
    });
    res.json(updatedProfile);
  } catch (err) {
    res.status(400).json({ message: "failed to update", err });
  }
};

const updateProfilePic = async (req, res) => {
  const { id, pic } = req.body;
  try {
    const updatedProfilePic = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        image: pic,
      },
    });
    res.json(updatedProfilePic);
  } catch (err) {
    res.status(400).json({ message: "failed to update pic", err });
  }
};
module.exports = {
  updateProfile,
  updateProfilePic,
};
