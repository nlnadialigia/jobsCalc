<h1 align="center">
  <img alt="JobsCalc" title="JobsCalc" src="https://i.imgur.com/Veqm7Gh.png" width="50%" /><br>
  Aula 01
</h1>

<h1 align="center">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/nlnadialigia/jobscalc?color=ef8d32">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/nlnadialigia/jobscalc?color=ef8d32">
  <a href=".github/LICENSE.md">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=ef8d32"/>
  </a>
</h1>

<p align="center">
  <a href="#-information_source-sobre-a-aula">Sobre</a> •
  <a href="#-open_file_folder-conteúdo">Conteúdo</a> • 
  <a href="#-rocket-tecnologias">Tecnologias</a> • 
  <a href="#-woman_office_worker-autora">Autora</a> • 
  <a href="#-pencil-licença">Licença</a>
</p>
<br>

# ℹ️ Sobre a aula

Nesta aula foi realizada a configuranção do ambiente, apresentação do projeto HTML e CSS e as primeiras configurações do servidor e das rotas.

# 📂 Conteúdo

## 📚 Tópicos

* Iniciação do projeto
  * `npm` ou `yarn`

* Instalação das dependências 
  * `express`

* Criação do servidor
  * Iniciação do servidor (`listen`)
  * Primeira rota
      * `.get("/", () ⇒ console.log('cheguei na rota'))`
      * `request` e `response`

* Instalação das dependência de desenvolvimento
  * `nodemon`
  * Configuração de `script` no `package.json` para reload automático do servidor

* Configuração dos diretórios para recebimento das páginas estáticas
  * `views` directory 
  * `public` directory

* Criação do arquivo de rotas
  * `routes.js`
  * Transferência da rota `get` criada anteriormente para o arquivo de rotas
  * Refatoração da rota para que volte a funcionar

* Refatoração das páginas html para corrigir bugs nos links causados pela conexão com o servidor
  * `file paths`
  * `href`

* Instalação e configuração da template engine que será utilizada no projeto
  * `esj`
  * Transformação dos arquivos `.html` em `.ejs`

* Reutilização de componentes (header)
    * `<%- include('parts/page-header', { title: 'Meu Perfil'}) %>`

* Programação no HTML
    * Criação do objeto do perfil de usuário
    * Refatoração do arquivo profile.ejs para recebimento do objeto do perfil do usuário

## 📚 Apresentação

<p align="center">
  <img alt="dev.finances" src=".github/jobscalc.gif" width="70%">
</p>

## 📚 Mission: Assistir aos cursos

* [NodeJS](https://app.rocketseat.com.br/node/node-js-o-motor-da-nave)
* [NodeJS com EJS]()


<br>

# 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [NodeJS](https://nodejs.org/en/)
- [EJS](https://ejs.co)
- [Express](https://expressjs.com/)


<br>

# 👩‍💼 Autora
<img style="border-radius: 50%" src=".github/picture.jpg" width="100px;" alt="Picture"/>
<p><b>Nádia Ligia, back-end developer.</b></p>
<a href="https://www.linkedin.com/in/nlnadialigia/">
  <img alt="Linkedin" src="https://img.shields.io/badge/-Linkedin-ef8d32?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nlnadialigia/" />
</a>&nbsp;
<a href="mailto:nlnadialigia@gmail.com">
  <img alt="Email" src="https://img.shields.io/badge/-Email-ef8d32?style=flat&logo=Gmail&logoColor=white&link=mailto:nlnadialigia@gmail.com" />
</a>&nbsp;
<a href="https://www.nlnadialigia.com">
  <img alt="Homepage" src="https://img.shields.io/badge/-Homepage-ef8d32" />
</a>

<br>

# 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](.github/LICENSE.md) para mais detalhes.

