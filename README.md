# 🍽️ API Restaurant

API RESTful desenvolvida em **Node.js + TypeScript** com o objetivo de gerenciar funcionalidades essenciais de um sistema de restaurante.  
Este projeto serve como base de estudo e prática para desenvolvimento backend, seguindo boas práticas de organização, tipagem e estrutura de API.

---

## 🚀 Tecnologias utilizadas

- **Node.js**
- **TypeScript**
- **Knex.js** (Query Builder)
- **SQLite / PostgreSQL** (dependendo da configuração)
- **Insomnia** (coleção de requisições incluída)

---

## 🎯 Objetivo do projeto

- Este projeto foi desenvolvido com foco em:

- Aprendizado de backend com TypeScript

- Criação de APIs REST

- Uso do Knex.js com migrations

- Base para projetos fullstack (React, React Native, Next.js, etc.)

## 📌 Funcionalidades

- Estrutura de API REST
- Gerenciamento de dados relacionados a restaurante
- Organização de código em camadas
- Uso de migrations para controle do banco de dados
- Endpoints testáveis via Insomnia ou Postman

---

## 📂 Estrutura do projeto
```text
api-restaurant/
├── src/
│ ├── database/
│ ├── routes/
│ ├── controllers/
│ └── server.ts
├── requests_insomnia.json
├── knexfile.ts
├── tsconfig.json
└── package.json
```


---

## ▶️ Como executar o projeto

### 1️⃣ Clonar o repositório
```bash
git clone git@github.com:dev-gabriel-henrique/api-restaurant.git
```

### 2️⃣ Acessar a pasta do projeto
```bash
cd api-restaurant
```

### 3️⃣ Instalar as dependências
```bash
npm install
```

### 4️⃣ Executar as migrations
```bash
npx knex migrate:latest
```

### 5️⃣ Iniciar o servidor
```bash
npm run dev
```


O servidor será iniciado em ambiente de desenvolvimento.
