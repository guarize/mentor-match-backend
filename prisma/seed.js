const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.match.deleteMany({});
  await prisma.profile.deleteMany({});
  await prisma.user.deleteMany({});
  
  const users = [
    // Mentores
    {
      email: 'mentor1@example.com',
      password: 'hashedpassword',
      name: 'Mentor 1',
      role: 'MENTOR',
      profile: {
        create: {
          bio: 'Desenvolvedor web com paixão por ensinar.',
          interests: 'Desenvolvimento Web, Ensino',
          experience: '5 anos',
        },
      },
    },
    {
      email: 'mentor2@example.com',
      password: 'hashedpassword',
      name: 'Mentor 2',
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
      email: 'mentor3@example.com',
      password: 'hashedpassword',
      name: 'Mentor 3',
      role: 'MENTOR',
      profile: {
        create: {
          bio: 'Engenheiro de software com expertise em desenvolvimento backend.',
          interests: 'Desenvolvimento Backend, APIs',
          experience: '4 anos',
        },
      },
    },
    {
      email: 'mentor4@example.com',
      password: 'hashedpassword',
      name: 'Mentor 4',
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
      email: 'mentor5@example.com',
      password: 'hashedpassword',
      name: 'Mentor 5',
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
      email: 'mentor6@example.com',
      password: 'hashedpassword',
      name: 'Mentor 6',
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
      email: 'mentor7@example.com',
      password: 'hashedpassword',
      name: 'Mentor 7',
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
      email: 'mentor8@example.com',
      password: 'hashedpassword',
      name: 'Mentor 8',
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
      email: 'mentor9@example.com',
      password: 'hashedpassword',
      name: 'Mentor 9',
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
      email: 'mentor10@example.com',
      password: 'hashedpassword',
      name: 'Mentor 10',
      role: 'MENTOR',
      profile: {
        create: {
          bio: 'Engenheiro de dados com experiência em big data.',
          interests: 'Engenharia de Dados, Big Data',
          experience: '6 anos',
        },
      },
    },
    // Alunos
    {
      email: 'aluno1@example.com',
      password: 'hashedpassword',
      name: 'Aluno 1',
      role: 'STUDENT',
      profile: {
        create: {
          bio: 'Estudante de desenvolvimento web.',
          interests: 'Desenvolvimento Web, Programação',
          experience: '1 ano',
        },
      },
    },
    {
      email: 'aluno2@example.com',
      password: 'hashedpassword',
      name: 'Aluno 2',
      role: 'STUDENT',
      profile: {
        create: {
          bio: 'Estudante de ciência de dados.',
          interests: 'Ciência de Dados, Estatística',
          experience: '1 ano',
        },
      },
    },
    {
      email: 'aluno3@example.com',
      password: 'hashedpassword',
      name: 'Aluno 3',
      role: 'STUDENT',
      profile: {
        create: {
          bio: 'Estudante de engenharia de software.',
          interests: 'Engenharia de Software, Desenvolvimento Backend',
          experience: '1 ano',
        },
      },
    },
    {
      email: 'aluno4@example.com',
      password: 'hashedpassword',
      name: 'Aluno 4',
      role: 'STUDENT',
      profile: {
        create: {
          bio: 'Estudante de front-end.',
          interests: 'Desenvolvimento Frontend, React',
          experience: '1 ano',
        },
      },
    },
    {
      email: 'aluno5@example.com',
      password: 'hashedpassword',
      name: 'Aluno 5',
      role: 'STUDENT',
      profile: {
        create: {
          bio: 'Estudante de UX/UI.',
          interests: 'UX/UI, Design',
          experience: '1 ano',
        },
      },
    },
    {
      email: 'aluno6@example.com',
      password: 'hashedpassword',
      name: 'Aluno 6',
      role: 'STUDENT',
      profile: {
        create: {
          bio: 'Estudante de arquitetura de soluções.',
          interests: 'Arquitetura de Soluções, Nuvem',
          experience: '1 ano',
        },
      },
    },
    {
      email: 'aluno7@example.com',
      password: 'hashedpassword',
      name: 'Aluno 7',
      role: 'STUDENT',
      profile: {
        create: {
          bio: 'Estudante de segurança da informação.',
          interests: 'Segurança da Informação, Cibersegurança',
          experience: '1 ano',
        },
      },
    },
    {
      email: 'aluno8@example.com',
      password: 'hashedpassword',
      name: 'Aluno 8',
      role: 'STUDENT',
      profile: {
        create: {
          bio: 'Estudante de banco de dados.',
          interests: 'Banco de Dados, SQL',
          experience: '1 ano',
        },
      },
    },
    {
      email: 'aluno9@example.com',
      password: 'hashedpassword',
      name: 'Aluno 9',
      role: 'STUDENT',
      profile: {
        create: {
          bio: 'Estudante de inteligência artificial.',
          interests: 'Inteligência Artificial, Machine Learning',
          experience: '1 ano',
        },
      },
    },
    {
      email: 'aluno10@example.com',
      password: 'hashedpassword',
      name: 'Aluno 10',
      role: 'STUDENT',
      profile: {
        create: {
          bio: 'Estudante de engenharia de dados.',
          interests: 'Engenharia de Dados, Big Data',
          experience: '1 ano',
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
