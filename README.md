# AngularCrud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

#Documentação
#1 - Pasta angular/cache: É usada pelo Angular CLI para armazenar em cache os arquivos de construção (build) e outros artefatos temporários durante o desenvolvimento. Isso pode acelerar significativamente o processo de construção e reconstrução do projeto, pois permite que o Angular CLI reutilize partes da construção que não mudaram entre execuções.

#2 - Pasta .vscode: Pasta utilizada pelo Visual Studio Code para armazenar configurações do programa.

#3 - Pasta node modules: Serve para armazenar todas as dependências e pacotes necessários para o projeto. Estas dependências são gerenciadas por ferramentas como npm ou Yarn e estão especificadas no arquivo package.json. Quando são executados os comandos npm install ou yarn install, esses pacotes são baixados e colocados na pasta node_modules, permitindo que o projeto funcione corretamente e que possa ser usado em bibliotecas de terceiros.

#3 - Pasta src: Contém o código-fonte principal do aplicativo.

#3.1 - Pasta details: Possui tudo o que está por trás da página "detalhes", que apresenta as informações particulares de um determinado aluno. O corpo é definido através do arquivo details.component.html, estilizada pelo details.component.scss, especificada e testada unitariamente (integração, módulos, serviços e componentes) por meio de details.component.spec.ts e, por fim, compilada por meio do arquivo details.component.ts, que também define como serão feitas as ações e suas validações. Essa página não aparece especificamente no sistema, fazendo parte da página "lista" e sendo acessada a partir do momento que clica-se no ícone de informações do aluno.

#3.2 - Pasta footer: Tem tudo o que está por trás do rodapé dinâmico, que está presente em todas as demais páginas. O corpo é definido através do arquivo footer.component.html, estilizado pelo footer.component.scss, especificado e testado unitariamente (integração, módulos, serviços e componentes) por meio de footer.component.spec.ts e, por fim, compilado por meio do arquivo footer.component.ts.

#3.3 - Pasta header: Tem tudo o que está por trás do cabeçalho dinâmico, que está presente em todas as demais páginas. O corpo é definido através do arquivo header.component.html, estilizado pelo header.component.scss, especificado e testado unitariamente (integração, módulos, serviços e componentes) por meio de header.component.spec.ts e, por fim, compilado por meio do arquivo header.component.ts.

#3.4 - Pasta form: Possui tudo o que está por trás da página "formulário", que permite ao usuário informar um novo aluno, com o nome, idade, curso e e-mail. O corpo é definido através do arquivo form.component.html, estilizada pelo form.component.scss, especificada e testada unitariamente (integração, módulos, serviços e componentes) por meio de form.component.spec.ts e, por fim, compilada por meio do arquivo form.component.ts, que também define como serão feitas as ações e suas validações.

#3.5 - Pasta home: Possui tudo o que está por trás da página "home", que permite ao usuário informar visualizar o que é o sistema trabalhado e o que ele faz. O corpo é definido através do arquivo home.component.html, estilizada pelo home.component.scss, especificada e testada unitariamente (integração, módulos, serviços e componentes) por meio de home.component.spec.ts e, por fim, compilada por meio do arquivo home.component.ts.

#3.6 - Pasta list: Possui tudo o que está por trás da página "lista", que permite ao usuário visualizar todos os alunos disponíveis, editá-los, exclui-los e ver seus detalhes. O corpo é definido através do arquivo list.component.html, estilizada pelo list.component.scss, especificada e testada unitariamente (integração, módulos, serviços e componentes) por meio de list.component.spec.ts e, por fim, compilada por meio do arquivo list.component.ts.

#3.7 - Arquivo aluno.service.ts: Utilizado como arquivo de serviço. Controla todas as ações em todas as páginas que o usuário pode realizar, tais como listar, adicionar, editar, excluir e visualizar registros.

#3.8 - Arquivo app-routing-module.ts: Define as rotas que determinam como os componentes são carregados e exibidos com base nos URLs navegados pelo usuário.

#3.9 - Arquivo app.component.html: Template HTML principal para o componente raiz (AppComponent), determinando a estrutura inicial da interface do usuário e como os dados (form, header, home, list, etc.) são exibidos dinamicamente.

#3.10 - Arquivo app.component.scss: Arquivo de estilo do sistema como um todo, definido um layout padrão para cada página navegada, respeitando suas particularidades.

#3.11 - Arquivo app.component.spec.ts: Usado para escrever testes unitários para o componente principal (AppComponent). Ele contém especificações (specs) que validam o comportamento esperado do componente em diferentes cenários.

#3.12 - Arquivo app.component.ts: É responsável por definir a lógica e o comportamento do componente principal (AppComponent). Ele inclui a lógica de inicialização, gerenciamento de dados, manipulação de eventos e interação com serviços ou outras partes do aplicativo. Este arquivo é essencial para configurar como o componente raiz da aplicação funciona e interage com o restante do código.

#3.13 - Arquivo app.module.ts: Responsável por definir o módulo principal da aplicação. Ele agrupa os componentes, serviços, diretivas e outros recursos relacionados, fornecendo um contexto para que o Angular possa inicializar e executar o aplicativo.

#3.14 - Pasta assets: Armazena o arquivo .gitkeep, que é usado para manter uma pasta vazia dentro do controle de versão Git, assegurando que ela seja incluída no repositório mesmo sem outros arquivos.

#3.15 - Arquivo Favicon: Ícone do angular, usando ao lado do nome da página.

#3.16 - Arquivo index.html: Serve como ponto de partida da aplicação, funcionando como corpo primário do sistema.

#3.17 - Arquivo main.ts: Serve para inicializar todo o ambiente angular, realizando configurações também, se necessário.

#3.18 - Arquivo style.scss: Estilizador geral da aplicação.

#4 - Arquivo .editorconfig: Usado para definir e manter consistentes as configurações de formatação de código entre diferentes editores e IDEs (Integrated Development Environments). Especifica regras como indentação, quebras de linha, estilo de codificação e outros padrões de formatação de código.

#5 - Arquivo .gitignore: Usado para especificar quais arquivos e pastas o Git deve ignorar ao realizar operações, como git commit.

#6 - Arquivo angular.json: Define as configurações de construção, compilação e execução do aplicativo.

#7 - Arquivo db.json: Utilizado como "fake API". Tendo função de "armazenar" os registros conforme são manipulados pelo usuário, permitindo que sejam resgatados após a aplicação ser fechada.

#8 - Arquivo package-lock.json: Gerado automaticamente pelo npm (Node Package Manager) para garantir a consistência das versões das dependências.

#9 - Arquivo package.json: Contém metadados sobre o projeto e configurações relacionadas às dependências, scripts de build, versão do projeto, entre outros.

#10 - Arquivo tsconfig.app.json: Usado para configurar o compilador TypeScript (tsc) para o código-fonte específico da aplicação.

#11 - Arquivo tsconfig.json: Define as configurações globais que se aplicam a todo o projeto TypeScript, incluindo opções de compilação, módulos, caminhos de inclusão de arquivos, e outras configurações relacionadas ao ambiente de desenvolvimento.

#12 - Arquivo tsconfig.spec.json: Usado para configurar as opções do compilador TypeScript (tsc) especificamente para os testes unitários (specs).

#13 - Iniciando a aplicação: Em um novo terminal, navegue até o diretório "angular-crud" do projeto e digite "json-server --watch db.json
" para startar o fake db, que está definido para iniciar na porta 3000. Posteriormente, no mesmo diretório, insira "ng serve" para abrir a aplicação, que está definida para a porta 4200.

#14 - Telas:

#14.1 - Home: Apresenta o sistema ao usuário, sendo a tela inicial da aplicação.
#14.2 - Lista: Apresenta uma lista com todos os alunos, podendo visualizar seus detalhes, excluir e editar.
#14.3 - Formulário: Apresenta o formulário de preenchimento das informações dos alunos. Após preenchido, leva o usuário diretamente à página "Lista".
#14.4 - Ícone casa: Volta para a página home.
#14.5 - Ícone de lista: Leva o usuário à página "Lista".
#14.6 - Ícone "i": Volta para a página home.
#14.7 - Cabeçalho: Traz todas as páginas de acesso possíveis ao usuário.
#14.8 - Rodapé: Traz algumas informações sobre propriedade do sistema.
