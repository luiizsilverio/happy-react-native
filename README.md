# ![](https://github.com/luiizsilverio/happy-react-native/blob/main/src/images/marker.svg)<br />Happy
## Conteúdo
* [Sobre o Projeto](#sobre-o-projeto)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Screenshots](#camera_flash-screenshots)
* [Iniciando o Projeto](#car-Iniciando-o-projeto)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre o projeto
Aplicação desenvolvida em React Native e Typescript para cadastrar e acessar os dados de orfanatos.<br />
Permite visualizar um mapa interativo, com a posição dos orfanatos cadastrados.<br />
Ao cadastrar um orfanato, permite selecionar uma ou mais imagens.<br />
Para funcionar, é preciso que a aplicação [happy-back](https://github.com/luiizsilverio/happy-back), desenvolvida em Node, esteja rodando na porta 3333.<br />
Acrescentei um spinner na tela de carregamento dos dados do orfanato.<br />

## :hammer_and_wrench: Tecnologias
* <ins>React Native</ins>
* <ins>Typescript</ins>
* <ins>Expo</ins>: componentes de fonte, image-picker, status-bar etc.
* Mapa interativo com <ins>React-native-maps</ins>
* Acesso à API através do <ins>Axios</ins>
* Animação com <ins>Lottie-react-native</ins>
* Rotas com <ins>React-navigation/native</ins>

## :camera_flash: Screenshots
![](https://github.com/luiizsilverio/happy-react-native/blob/main/assets/happy.gif)

## :car: Iniciando o projeto
* Antes de iniciar a aplicação, inicie a API [happy-back](https://github.com/luiizsilverio/happy-back)
* Baixe e instale o <ins>ExpoGo</ins> no dispositivo (celular ou emulador)
* Baixe o repositório com ``` git clone ``` e entre na pasta do projeto.
* Informe o IP do computador no arquivo ``` src/services/api.js ```, em ``` api_host ```.
* Digite ``` yarn ``` no terminal, para inicializar o projeto.
* Digite ``` yarn start ``` no terminal, para executar o projeto.

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)
