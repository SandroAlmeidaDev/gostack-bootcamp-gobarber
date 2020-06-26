![bootcamp-keep-coding](https://user-images.githubusercontent.com/58606794/80931247-e2503080-8d8e-11ea-81c7-67ca728fb2a1.png)


<h1 align="center">
  🚀️ API do GoBarber
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/SandroAlmeidaDev/gostack-bootcamp-gobarber">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/SandroAlmeidaDev/gostack-bootcamp-gobarber?logo=typescript">

  <img alt="GitHub repo size in bytes" src="https://img.shields.io/github/repo-size/SandroAlmeidaDev/gostack-bootcamp-gobarber?color=green">

  <br>
</p>


# Indice

- :rocket: [Sobre o Projeto](#rocket-sobre-o-projeto)
- 👨‍💻️ [Tecnogias utilizadas](#%EF%B8%8F-tecnogias-utilizadas)
- 📦️ [Como utilizar o projeto](#%EF%B8%8F-como-utilizar-o-projeto)
- 🤔️ [Como contribuir](#%EF%B8%8F-como-contribuir)

---

## :rocket: Sobre o Projeto
Esse projeto é uma API no padão RESTful que será responsável por toda regra de négócio da aplicação Web e Mobile do GoBarber. Uma aplicação feita para controle de agendamentos dos prestadores de serviço de uma barbearia, salão de beleza e outros do seguemento.
---

## 👨‍💻️ Tecnogias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)

### Dependências

  - [Express](https://expressjs.com/pt-br/)
  - [Cors](https://github.com/expressjs/cors)
  - [Bcrypjs](https://github.com/dcodeIO/bcrypt.js)
  - [JsonWebToken](https://github.com/auth0/node-jsonwebtoken)
  - [Multer](https://github.com/expressjs/multer)
  - [TsyRinge](https://github.com/Microsoft/tsyringe/)
  - [TypeOrm](https://github.com/typeorm/typeorm) 
  - [Cors](https://github.com/expressjs/cors)
  - [Date FNS](https://date-fns.org/)
  - [UUIDv4](https://github.com/thenativeweb/uuidv4#readme)
  - [Yup](https://github.com/jquense/yup)

### Padronização de código

  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - :mouse: [Editor Config](https://editorconfig.org/)

### IDE

  - [Visual Studio Code](https://code.visualstudio.com/)

---

## 📦️ Como utilizar o projeto

Para copiar o projeto, utilize os comandos:

```bash
  # Clonar o repositório
  ❯ git clone https://github.com/SandroAlmeidaDev/gostack-bootcamp-gobarber.git

  # Entrar no diretório
  ❯ cd gostack-bootcamp-gobarber
```

### Banco de Dados

[Docker](https://www.docker.com/)

Depois de instalado o Docker, instale uma instancia do postgres:
```bash
docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
docker start postgres
```

Para instalar as dependências e iniciar o projeto, você pode utilizar o Yarn ou NPM:

**Utilizando yarn**

```bash
  # Instalar as dependências
  ❯ yarn

  # Iniciar o projeto
  ❯ yarn dev:server
```

**Utilizando npm**

*PS: Caso utilize o NPM, apaque o arquivo `yarn.lock` para ter todas as dependências instaladas da melhor forma.*

```bash
  # Instalar as dependências
  ❯ npm install

  # Iniciar o projeto
  ❯ npm dev:server
```

---

## 🤔️ Como contribuir

1. Faça o `fork` deste repositório
2. Crie uma branch com sua feature:
   - `$ git checkout -b minha_feature`
3. Confirme sua branch:
   - `$ git commit -m "feature: Meu novo recurso"`
4. Envie sua branch:
   - `$ git push origin minha_feature`

---

<h4 align="center">
  Feito com carinho <a href="mailto:sandro.almeida.silva17@gmail.com">Entre em contato!</a>
</h4>
<p align="center">
  <a href="https://www.linkedin.com/in/sandro-almeida-09664513a/">
    <img alt="Sandro Almeida da Silva" src="https://img.shields.io/badge/sandro-almeida-09664513a?style=flat&logoColor=white&logo=linkedin">
  <a href="https://twitter.com/jerpbtu">
    <img alt="Sandro Almeida da Silva" src="https://img.shields.io/twitter/follow/sanndro?style=flat&logoColor=white&logo=Twitter">
  </a>
</p>
