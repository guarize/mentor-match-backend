const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getMatches = async (req, res) => {
  const userId = parseInt(req.query.userId, 10);

  if (!userId) {
    return res.status(400).json({ error: 'ID de usuário inválido' });
  }

  try {
    const matches = await prisma.match.findMany({
      where: {
        OR: [{ userId1: userId }, { userId2: userId }],
      },
      include: {
        user1: true,
        user2: true
      },
    });
    res.json({ matches });
  } catch (error) {
    console.error('Erro ao buscar matches:', error);
    res.status(400).json({ error: 'Ocorreu um erro ao buscar os matches' });
  }
};

exports.createMatch = async (req, res) => {
  const { userId1, userId2, status } = req.body;

  if (!userId1 || !userId2 || !['PENDING', 'ACCEPTED', 'REJECTED'].includes(status)) {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  try {
    const match = await prisma.match.create({
      data: { userId1, userId2, status },
    });
    res.status(201).json({ match });
  } catch (error) {
    console.error('Erro ao criar match:', error);
    res.status(400).json({ error: 'Ocorreu um erro ao criar o match' });
  }
};
