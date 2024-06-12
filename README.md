# Mentor Match Backend

Este é o backend para a aplicação Mentor Match, uma plataforma estilo Tinder que conecta alunos e mentores.

## Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- JWT para autenticação
- bcrypt para hashing de senhas

## Pré-requisitos

- Node.js (v14 ou superior)
- npm (v6 ou superior)
- PostgreSQL

## Configuração do Banco de Dados

1. **Criar um Novo Usuário e Banco de Dados**

   ```bash
   sudo -iu postgres
   psql
   ```

**No prompt do PostgreSQL:**

   ```bash
    CREATE USER new_user WITH ENCRYPTED PASSWORD 'new_password';
    ALTER USER new_user CREATEDB;
    CREATE DATABASE new_database OWNER new_user;
    \q
   ```

2. **Atualizar o Arquivo .env**

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

   ```bash
    DATABASE_URL="postgresql://new_user:new_password@localhost:5432/new_database?schema=public"
    JWT_SECRET="jtw_secret"
   ```

## Executando o Projeto

1. **Instalar as Dependências**

No diretório do projeto, execute:

```bash
npm install
```

2. **Instalar as Dependências**

Rode o script de semente:

```bash
npm run seed
```

3. **Iniciar o Servidor**

Inicie o servidor com o comando:

```bash
npm start
```

O servidor estará rodando em http://localhost:3000.