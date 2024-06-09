const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const allowedStatuses = ['PENDING', 'ACCEPTED', 'REJECTED'];

exports.createMatch = async (req, res) => {
  const { userId2, status } = req.body;

  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  const userId1 = req.user.userId;

  try {
    const match = await prisma.match.create({
      data: { userId1, userId2, status }
    });
    res.status(201).json({ match });
  } catch (error) {
    res.status(400).json({ error: 'Match already exists' });
  }
};

exports.getMatches = async (req, res) => {
  const userId = req.user.userId;
  const matches = await prisma.match.findMany({
    where: { OR: [{ userId1: userId }, { userId2: userId }] },
    include: { user1: true, user2: true }
  });
  res.json({ matches });
};
