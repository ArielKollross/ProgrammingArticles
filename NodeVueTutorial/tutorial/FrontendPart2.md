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

Conforme for necessário, vou comentar sobre as funcionalidade de cada uma das pastas do Vue. No momento vamos utilizar apenas três delas.

Dentro da pasta **src**, temos a pasta de **Views** é nela que vamos criar as páginas da nossa aplicação e seguindo o parão do Vue, devemos sempre começar o nome do arquivo com letra maiúscula.

A proxima pasta é a de **components**, como o próprio nome sugere, é onde os componentes da nossa aplicação vão ficar. Podemos imaginar os componentes como areas especificas de uma página, ou partes que se repentem na nossa aplicação. É uma boa pratica fazer este tipo de separação, pois deixa o código muito mais manutenível.

Exemplo de componentes é uma barra de navegação, ou um rodapé, que se repete em várias partes do sistema, então, em vez de termos que repetir o código, simplementes importamos o componente.

Por fim, temos a pasta de **routes**, lá vamos definir todos os caminhos da nossa aplicação. Por mais que estejamos criando uma SPA ([Single Page Aplication](https://en.wikipedia.org/wiki/Single-page_application)), o vue nos possibilita criar as rotas como se fosse um site normal.

### 2.3 Criando as rotas e interface.

Primeiro, vamos configurar a rota da pagina home, com o Vue Router. Quando criamos o nosso projeto, já solicitamos ao vue que adiciona-se o roter. O Rauter tem duas principais tags, o  `<router-views>` e o `<router-link>`. A primeira nos permite a navegação e renderização de páginas, enquanto a segundo tem para links, função parecida com a tag `<a>` to HTML.

No arquivo App.vue, vamos adicionar a tag de views,
```html
<!-- src/App.vue -->
<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

...
```
e assim que salvar, no navegador deve aparecer o titulo "Home".

Insto ocorreu porque arquivo routes/index.js, já tinhamos deixado configurado a rota
```js
  const routes = [
  {
    path: '/',
    component: ()  => import('@/views/Home'),
  },
]
```
Nas vue router, passamos um array de objetos para cada uma das rotas, o principal é o caminho (**path**), ou seja, nossa "url" e o **component**,que é a pagina/view que rendenriza a rota.

Agora vamos dar inicio a construção da interface com Vuetify, vou utilizar bastante da [documentação](https://vuetifyjs.com/en/), que é muito boa e detalhada.

Antes de começar, vou recomendar duas extensões para trabalhar com Vue e Veutify, que são **Vuetur** e **Vuetify-vscode**.

Agora vou mudar o nome do arquivo **Home.vue** e o "import" do copoment na **routes/index.js**, para **UserRegister.vue** e vamos criar um formulário de registro.
```html
<!-- src/views/UserRegister.vue -->
<template>
  <v-container>
    <v-card>
      <v-card-title>User register</v-card-title>

      <v-form 
      @submit.prevent="handleRegisterNewUser" 
      id="user-register"
      >
        <v-row class="justify-center">
          <v-col cols="12" md="4">
            <v-text-field
              required 
              solo 
              flat 
              background-color="#efefef"
              type="input" 
              v-model="user.email"
              label="email"
            ></v-text-field>

            <v-text-field
              required
              solo
              flat
              background-color="#efefef"
              type="password" 
              v-model="user.password"
              label="password"
            ></v-text-field>

              <v-btn color="success"
                type="submit"
                class="mb-12"
                block
              >register</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      }
    }
  },
  methods: {
    async handleRegisterNewUser() {
    console.log(`email: ${this.user.email}, password: ${this.user.password}`)
  }
};
</script>
```

Algumas coisas são importantes de mencionar sobre o código acima.

A primeira, é que quando chamo o **v-form**, estou passando o seguinte comando `@submit.prevent="handleRegisterNewUser"`, aqui o vue esta esperando um evento de submit, que é acionado quando clicamos no botão. Este botão, tem que ter obrigatóriamente o propriedade `type="submit"`. O **prevente** faz com que o formulário ignore o comportamento padrão de envio e então chame o método **handleRegisterNewUser**, que no momento envia apenas uma console.log da senha e email preenchidos pelo usuário.

Outro ponto inportante é a ligação entre os campos do formulário com a função **data()**. Primeiramente, defini que o usuario é um objeto com duas propriedades, **email** e **password**, estas duas propriedades tem valores inciais nulos. Para fazer a ligação entre os campos e as propriedades, utilizamos a a diretiva **v-model**.

### 2.4 Requisição para api

Agora que já temos nosso primeiro formulário criado, vamos fazer a comunicação com o backend.

Primeiramente vamos instalar o axios.
```sh
npm i axios
```
Depois vamos criar uma nova pasta chamada **services** e entro dela uma arquivo, chamado **api.service.js**.

```js
import axios from 'axios';

const api =  axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
```

Agora onde temos nosso methods, no arquivo **UserRegister.vue**, vamos tirar o conso log e fazer a chamada a nossa api.

```js
import api from '@/services/api.service.js';

export default {
  // .....
  methods: {
    async handleRegisterNewUser() {
      try {
        await api.post('/users', {
          email: this.user.email,
          password: this.user.password,
      });

      window.alert('logado');
      } catch (error) {
        console.log(error);
      }
    }
  }
};
```

Com o servidor rodando, tente fazer o cadastro e verificar se o registro foi criado no banco de dados. Se tudo ocorrer bem, nosso front já esta faznedo se comunicando corretamente com a API.

### 2.5 Validação do formulário

Agora vamos instalar o pacote do [vuelidate](https://vuelidate.js.org/) e utilizar para fazer a validação no formulário.

```sh
npm i veulidate
```

Agora na pasta de **plugins**, vamos importar o **vuelidate**.
```js
// src/plugins
import Vue from 'vue';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);
```
Então precisamos fazer a importação no arquivo principal da nossa aplicação, o **main.js**,
```js
import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@/plugins/vuelidate';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

```

Agora vamos trabalhar no nosso arquivo de **UserRegister.vue**,
```js
<script>
export default {
  data() {
    ...
 }
  },
  validations: {
     user: {
      email: {
        email,
        required,
      },
      password: {
        minLength: minLength(6),
        required,
      }
    }
  },
  methods: {
   ...
};
</script>
```
