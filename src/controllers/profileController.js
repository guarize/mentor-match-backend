const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getProfiles = async (req, res) => {
  try {
    const profiles = await prisma.profile.findMany({
      include: {
        user: true,
      },
    });

    res.status(200).json({ profiles });
  } catch (error) {
    console.error('Error fetching profiles:', error);
    res.status(500).json({ error: 'Erro ao buscar perfis' });
  }
};
