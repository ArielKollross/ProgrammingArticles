# Frontend com Vue

## Objetivo 

Nesta segunda parte do tutorial, vamos criar nosso frontend e conectar ao backend que fizemos na [primeira parte](https://github.com/ArielKollross/ProgrammingArticles/blob/master/NodeVueTutorial/tutorial/BackendPart1.md).

## 2 Criando Frontend da aplicação

### 2.1 Instalando e criando o projeto Vue

Antes de mais nada é necessário já ter o npm ou yarn instalado na sua máquina. Também recomendo instalar o [NVM](https://github.com/nvm-sh/nvm) que é um gerenciador de versões do NodeJs. 

Para instalar o vue, rodamos no terminal,
```sh
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```
Para verificar se o Vue foi instalado corretamente, rode no termial.
```sh
vue --version
```
Para criar o projeto, rodamos,
```sh
vue create web
```
O Vue irá perguntar se quer fazer uma instalação "default" ou "Manually", escolhemos a ultima opção, em seguida,
```sh
?Check the features needed for your project:
# vou selecionar,
[x] Babel
[x] Router
[x] Vuex
[x] Linter / Formatter

?Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)
 # selecione Y

? Pick a linter / formatter config: (Use arrow keys)
❯ ESLint with error prevention only

? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ Lint on save

? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
❯ In dedicated config files

? Save this as a preset for future projects? (y/N) N
```
Agora vamos adicionar o Vuetify que é um framework baseado no Bootstrap.
```sh
#entramos na pagina do projeto
cd web
#adicionamos o vuetify
vue add vuetify

#Pode aparecer esta mensassegem, esconha y para prossegir
WARN  There are uncommited changes in the current repository, it s recommended to commit or stash them first.
? Still proceed? Yes

? Choose a preset: (Use arrow keys)
❯ Default (recommended)
```
Com isso já estamos prontos para conhecer o vue.

### 2.2 Estrutura básica do Vue.

<h1 align="center">
<img src="https://github.com/ArielKollross/ProgrammingArticles/blob/master/NodeVueTutorial/tutorial/assets/vue.png width="250px" />
</h1>

Primeiramente, vou excluir alguns arquivos.

1. Na pastas components, excluir o HelloWorld.vue;

2. Na pastas assets, excluir todo conteúdo dentro dela;

3. Na pasta views, excluir o About.vue

Agora vou fazer algumas modificações dentro dos arquivos, para remover as importações dos arquivos excluidos.


1. No arquivo App.vue vou limpar todo conteúdo deixando apenas;
```html
<template>
  <v-app>
    <v-main>

    </v-main>
  </v-app>
</template>

<script>
export default {

};
</script>

```

2. No arquivo views/Home.vue,
```html
<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
}
</script>
```

3. No arquivo routes/index.js 
```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()  => import('@/views/Home'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
```

Feito isso o servidor deve esta pronto para rodar, então dentro da pasta do projeto vue, rode no terminal,
```sh
npm run serve
```
Se tudo der certo, deve aparecer uma menssagem de sucesso na compilação e então um endereço local, como ` - Local: http://localhost:8080/ `. Entre nele pelo navegador e deve te retornar uma página em branco.

Conforme for necessário, vou comentar sobre os a funcionalidade de cada uma das pastas do Vue. No momento vamos utilizar

Dentro da pasta **src**, temos a pasta de **Views** é nela que vamos deixar as páginas da nossa aplicação e seguindo o parão do Vue, devemos sempre começar o nome do arquivo com letra maiúscula.

A proxima pasta é a de **components**, como o próprio nome sugere, é onde os componentes da nossa aplicação vão ficar. Podemos imaginar os componentes como areas especificas de uma página, ou partes que se repentem na nossa aplicação. É uma boa pratica fazer este tipo de separação, pois deixa o código muito mais manutenível.

Exemplo de componentes é uma barra de navegação, ou um rodapé, que se repete em várias partes do sistema, então, em vez de termos que repetir o código, simplementes importamos o componente.

Por fim temos a pastas de **routes** lá vamos definir todos os caminhos da nossa aplicação. Por mais que estejamos criando uma SPA ( Single Page Aplication), o vue nos possibilita criar as rotas como se fosse um site normal.

### 2.3 Criando a interface