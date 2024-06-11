const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      email: 'ana.silva@example.com',
      password: 'hashedpassword',
      name: 'Ana Silva',
      role: 'MENTOR',
      profile: {
        create: {
          bio: 'Desenvolvedora web com paixão por ensinar.',
          interests: 'Desenvolvimento Web, Ensino',
          experience: '5 anos',
        },
      },
    },
    {
      email: 'joao.souza@example.com',
      password: 'hashedpassword',
      name: 'João Souza',
      role: 'MENTOR',
      profile: {
        create: {
          bio: 'Cientista de dados que ama trabalhar em projetos de machine learning.',
          interests: 'Ciência de Dados, Machine Learning',
          experience: '3 anos',
        },
      },
    },
    {
      email: 'maria.oliveira@example.com',
      password: 'hashedpassword',
      name: 'Maria Oliveira',
      role: 'MENTOR',
      profile: {
        create: {
          bio: 'Engenheira de software com expertise em desenvolvimento backend.',
          interests: 'Desenvolvimento Backend, APIs',
          experience: '4 anos',
        },
      },
    },
    {
      email: 'pedro.martins@example.com',
      password: 'hashedpassword',
      name: 'Pedro Martins',
      role: 'MENTOR',
      profile: {
        create: {
          bio: 'Desenvolvedor front-end especializado em React.',
          interests: 'Desenvolvimento Frontend, React',
          experience: '6 anos',
        },
      },
    },
    {
      email: 'juliana.alves@example.com',
      password: 'hashedpassword',
      name: 'Juliana Alves',
      role: 'MENTOR',
      profile: {
        create: {
          bio: 'Especialista em UX/UI com foco em design centrado no usuário.',
          interests: 'UX/UI, Design Centrado no Usuário',
          experience: '5 anos',
        },
      },
    },
    {
      email: 'carlos.lima@example.com',
      password: 'hashedpassword',
      name: 'Carlos Lima',
      role: 'MENTOR',
      profile: {
        create: {
          bio: 'Arquiteto de soluções com vasta experiência em nuvem.',
          interests: 'Arquitetura de Soluções, Nuvem',
          experience: '8 anos',
        },
      },
    },
    {
      email: 'fernanda.santos@example.com',
      password: 'hashedpassword',
      name: 'Fernanda Santos',
      role: 'MENTOR',
      profile: {
        create: {
          bio: 'Analista de segurança da informação apaixonada por cibersegurança.',
          interests: 'Segurança da Informação, Cibersegurança',
          experience: '4 anos',
        },
      },
    },
    {
      email: 'ricardo.pereira@example.com',
      password: 'hashedpassword',
      name: 'Ricardo Pereira',
      role: 'MENTOR',
      profile: {
        create: {
          bio: 'Administrador de banco de dados com foco em performance.',
          interests: 'Banco de Dados, Performance',
          experience: '7 anos',
        },
      },
    },
    {
      email: 'elaine.costa@example.com',
      password: 'hashedpassword',
      name: 'Elaine Costa',
      role: 'MENTOR',
      profile: {
        create: {
          bio: 'Especialista em inteligência artificial e aprendizado de máquina.',
          interests: 'Inteligência Artificial, Aprendizado de Máquina',
          experience: '5 anos',
        },
      },
    },
    {
      email: 'marcos.ribeiro@example.com',
      password: 'hashedpassword',
      name: 'Marcos Ribeiro',
      role: 'MENTOR',
      profile: {
        create: {
          bio: 'Engenheiro de dados com experiência em big data.',
          interests: 'Engenharia de Dados, Big Data',
          experience: '6 anos',
        },
      },
    },
  ];

  for (const user of users) {
    await prisma.user.create({ data: user });
  }

  console.log('Dados de seed criados com sucesso');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
