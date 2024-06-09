const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getProfiles = async (req, res) => {
  const { role } = req.user;
  const profiles = await prisma.profile.findMany({
    where: { user: { role: role === 'STUDENT' ? 'MENTOR' : 'STUDENT' } },
    include: { user: true }
  });
  res.json({ profiles });
};
