# Frontend com Vue

## Objetivo 

Nesta segunda parte do tutorial vamos criar nosso frontend e conectar ao backend que fizemos na [primeira parte](https://github.com/ArielKollross/ProgrammingArticles/blob/master/NodeVueToturial/tutorial/BackendPart1.md).

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

### Estrutura básica do Vue.

<h1 align="center">
<img src="NodeVueTuTorial/tutorial/assets/vue.png width="250px" />
</h1>


