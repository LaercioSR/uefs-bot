# UEFS TWITTER BOT

<div align="center">
  <img src="https://user-images.githubusercontent.com/32028338/146657744-c3a0f70b-90fd-499f-bedc-3b667cf2526a.png" height="200em"/>
</div>

<p align="center">
 <a href="#descrição-do-projeto">Descrição</a> •
 <a href="#como-executar">Como executar</a> •
 <a href="#tecnologias-e-ferramentas">Tecnologias</a>
</p>

#

## Descrição do Projeto

Bot para Twitter que retuíta e favorita todas menções a UEFS (Universidade Estadual de Feira de Santana). Projeto feito apenas com objetivo de aprendizado, sem possuir vínculos com a instituição.

Link para o Twitter: <https://twitter.com/UEFSbot>

## Como Executar

### Pré Requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

Também será necessário ter uma conta no Twitter Developers, para isso siga os seguintes passos:

* Caso não possua será necessário criar uma conta no [twitter](https://twitter.com/).
* Acesse <https://developer.twitter.com/> e crie uma conta de desenvolvedor.
* Acesse <https://developer.twitter.com/en/portal/petition/standard/basic-info> para colocar sua conta no nível Elevated.
* No site de desenvolvedor do twitter, crie um novo app (talvez seja necessário criar um novo project antes) e salve o API Key e o API Key Secret que foram gerados.
* Nas configurações do app siga os seguintes passos:
  * Acesse a página de "User authentication settings"
  * Ative o "OAuth 1.0a" configurando ele como "Read and write" ou "Read and write and Direct message".
  * Essa parte é apenas porque o twitter obriga. Adicione uma URL de callback e website, pode ser qualquer uma, como <https://uefs.br>.
  * Salve as alterações.
* Por fim, com o OAuth configurado, acesse a página de "Keys and tokens" e clique para gerar uma Access Token and Secret e salve as chaves geradas.

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### Rodando

```bash
# Clone este repositório
$ git clone https://github.com/LaercioSR/uefs-bot.git

# Acesse a pasta do projeto no terminal/cmd
$ cd uefs-bot

# Copie o .env
$ cp .env.example .env
# Depois disso é necessário preencher o .env com as chaves geradas pelo twitter.

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Se tudo estiver correto o bot começará a executar.
```

## Tecnologias e Ferramentas

* [Typescript](https://www.typescriptlang.org/)
* [NodeJs](https://nodejs.org/)
  * [Twit](https://github.com/ttezel/twit)
  * [Dotenv](https://github.com/motdotla/dotenv)
  * [Node Schedule](https://github.com/node-schedule/node-schedule)
* [Twitter Developer](https://developer.twitter.com/)
* [Github Actions](https://github.com/features/actions)
