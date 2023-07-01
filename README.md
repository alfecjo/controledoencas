## controle-doencas-app

### Este projeto tem como objetivo implementar requisitos impostos pela disciplína Frameworks a título de avaliação. Trata-se de uma aplicação web que possibilita rastrear comunidades afetadas por doenças infectocontagiosas. (ex: cadastro, alteração, deleção, listagem), sendo o diferencial, a facilidade de uso e operação pelo cliente;

### O frontend da aplicação foi desenvolvido com Angular e o backend foi simulado pela implementação de uma API Fake, usando o JSON Server;

### Endereço de Deploy - GitHub Pages
(https://alfecjo.github.io/controle-doencas-app/cadastro)

### Protótipo
(<https://www.figma.com/file/Ic3EmqlxEY73UzVz18HHWG/controleDoencas?type=design&node-id=7%3A14&t=CIo2pmdvdcptwzRV-1>)

### Vídeo de Apresentação do Projeto
(<https://www.figma.com/file/Ic3EmqlxEY73UzVz18HHWG/controleDoencas?type=design&node-id=7%3A14&t=CIo2pmdvdcptwzRV-1>)

### Checklist

- [x]Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [x]Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [x]Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [x]Construir páginas web com o conceito de componentes.
- [x]Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [x]Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [x]Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [x]Mapear componentes à rotas no módulo de rotas.
- [x]Criar navegação entre páginas por meio de rotas.
- [x]Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
- [x]Validar campos do formulário com REGEX e apresentar os erros.
- [x]Desabilitar o botão de submit enquanto o formulário está inválido.
- [x]Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- [x]Cadastrar uma entidade no JSON Server.
- [x]Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [x]Usar a diretiva ngIf
- [x]Formatar a apresentação de dados com Pipes.
- [x]Build e deploy da aplicação.

### Manual de execução

- Clonar o repositório com git clone;
- Fazer checkout no branch develop que contém as modificações mais recentes;
- Abrir o projeto no editor Visual Studio Code (VS Code);
- Através do terminal cmd-VSCode ou do seu Sistema Operacional apontando para o diretório raiz do projeto;
- Instalar as dependências contidas no package.json
  Comando: npm i;
- (Opcional) Instalar o JSON Server globalmente disponível em https://www.npmjs.com/package/json-server
  Comando: npm i -g json-server
  É opcional porque a dependência já vêm cadastrada no arquivo package.json;
- Executar a API Fake (JSON Server) com o seguinte comando:
  Via Execução explícita: json-server --watch db.json
  O comando para execução do JSON Server deve ser aplicado no diretório /dados, ou seja, que contém o arquivo db.json
  Por padrão, a aplicação JSON Server executa no endereço localhost:3000;
- Abrir um novo terminal cmd-VSCode e então executar o projeto Angular
  Comando: ng s -o;
