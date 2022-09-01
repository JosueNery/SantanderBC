# Typescript na plataforma DIO

O objetivo desse repositório é mostrar exemplos e desafios de typescript produzidos no Módulo II do bootcamp, eles representam uma noção geral suficiente da ferramenta.
  
## O que é o Typescript
É um superset do typescript que trás tipagem estática para a linguagem, além de outras features, com o propósito de melhorar a qualidade do código escrito e a sua usabilidade. *Como é um superset o código compilado e usado em produção ainda é javascript*.

## Do que você vai precisar
Ferramentas necessárias:  
* Do Node instalado na sua máquina  
* Instalar o typescript usando o npm (npm install -g typescript)
    * É interessante que ele seja instalado de forma global, para que o usuário possa usar a biblioteca a qualquer momento e em qualquer projeto para fazer testes rápidos com o TS.
* De uma IDE como o visual studio code  

Requisitos técnicos:  
* Lógica de programação
* Mas é melhor ainda se tiver um conhecimento básico de javascript  

## Estrutura do repositório 
* *src* 
    * Contém arquivos com exemplos de uso de TS
* *desafios*
    * Contém as resoluções dos quatro desafios da unidade.
* *index.html*
    * É onde está a chamada para o arquivo app.js e pode ser manipulado a vontade para testarem seus scripts
* *tsconfig.json*
    * Adicionados outDir e rootDir.  
* *package.json*
        * start
            * Inicia o *lite-server*
        * watch  
            * Roda o *tsc --watch*

## Sobre como testar 
* Teste mão livre
    * Faça suas alterações em src/app.ts
    * Rode *tsc* ou *npm watch* para compilar elas para o arquivo dist/app.js
    * Caso queira fazer um teste interagindo com o DOM, altere o index.html
    * Rode o npm start e acesse o localhost:3000
* Testar algum dos arquivos da pasta de exemplos ou desafios
    * Copie e cole o conteúdo para o arquivo src/app.ts ou altere o caminho do atributo src da tag script no index.html  
        * ex : *src=dist/app.js* -> *src=dist/exemplos/any.js*
    * Rode *tsc* ou *npm watch* para compilar elas para o arquivo dist/app.js
    * Caso queira fazer um teste interagindo com o DOM, altere o index.html
    * Rode o npm start e acesse o localhost:3000 
Caso queira fazer testes usando html é só alterar o index.html.