# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

![Persona Elisa Andrade](./img/personas/persona-elisa-andrade.jpg)

![Persona Gustavo Silva](./img/personas/persona-gustavo-silva.jpg)

![Persona Ana Lúcia](./img/personas/persona-ana-lucia.jpg)

![Persona Ana Silva](./img/personas/persona-ana-silva.jpg)

![Persona Heitor Santos](./img/personas/persona-heitor-santos.jpg)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Gustavo Silva  | Encontrar uma ONG.           | Poder ser voluntário aplicando meus conhecimentos como engenheiro de software.               |
|Gustavo Silva       | Poder me voluntariar de forma remota.                 | Permitir que eu possa ser voluntário da minha casa ou dos locais onde eu estiver viajando a trabalho. |
|Gustavo Silva       | Saber os detalhes da posição antes de me cadastrar.                 | Para que eu me candidate somente às posições que são de meu interesse e que correspondem às minhas habilidades. |
|Elisa Andrade       | Quero me cadastrar para ser voluntária em ONGs.           | Aplicar os conhecimentos que estou adquirindo como estudante de Sistemas de Informação.               |
|Elisa Andrade      | Quero encontrar ONGs de acordo com meu interesse e minha disponibilidade.                | Para me voluntariar em áreas do meu interesse com flexibilidade de horário.|
|Ana Lucia  | Preciso encontrar pessoas que possam se voluntariar.  | Para ajudar com as necessidades tecnológicas da ONG.  |
|Ana Lucia  | Quero poder encontrar voluntários remotamente.  | Para conseguir aumentar a quantidade de pessoas que se conectam à ONG.  |
|Ana Silva  | Se voluntariar para ONGs de todo o brasil  | Para causar impacto positivo nas comunidades e ONGs de todo o Brasil  |
|Ana Silva  | Saber dos desafios das ONGs  | Para aprimorar suas habilidades profissionais. |
|Heitor Santos       | Saber a localização da ONG.        | Para que eu possa conciliar com minhas viagens.|
|Heitor Santos       | Datas de disponibilidade da ONG.   | Para que eu possa alinhar com meus projetos.|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| A aplicação deve permitir que as ONGs se cadastrem | ALTA |  |
|RF-002| A aplicação deve permitir que as ONGs atualizem suas informações de perfil, como contato e missão, a qualquer momento. | ALTA |  |
|RF-003| A aplicação deve possibilitar que as ONGs postem solicitações de ajuda técnica, descrevendo os projetos ou desafios específicos que precisam ser abordados. | ALTA |  |
|RF-004| A aplicação deve permitir que os profissionais de TI visualizem as solicitações de ajuda técnica feitas pelas ONGs. | ALTA |  |
|RF-005| Os profissionais de TI devem poder se voluntariar por meio de formulário de contato para trabalhar em projetos específicos das ONGs, indicando seu interesse e disponibilidade. | ALTA |  |
|RF-006| A aplicação deve permitir que as ONGs marquem solicitações como concluídos ou encerrados. | ALTA |  |
|RF-007| A aplicação deve apresentar página com *feed* com as últimas demandas criadas pelas ONGs. | ALTA |  |
|RF-008| ONGs devem responder às condidaturas de usuários em até 3 dias | ALTA |  |
|RF-009| Funcionalidade de email para que as ONGs e os profissionais de TI possam se comunicar. | ALTA |  |
|RF-010| A aplicação deve ter um sistema de notificações (e-mail) para informar os possíveis voluntários sobre novas solicitações de ajuda técnica criadas. | ALTA |  |
|RF-011| Os profissionais de TI devem receber notificações quando uma ONG expressa interesse em seu perfil. | ALTA |  |
|RF-012| A aplicação deve fornecer um mecanismo de pesquisa para que os usuários possam encontrar ONGs com base em critérios como área de atuação, localização geográfica e necessidades específicas. | ALTA |  |
|RF-013| Os profissionais de TI devem poder avaliar as ONGs e projetos com os quais colaboraram, fornecendo feedback e classificações. | ALTA |  |
|RF-014| Deve existir uma página inicial (landing page) informativa que apresenta o propósito da plataforma e incentiva tanto as ONGs quanto os profissionais de TI a se cadastrarem. | ALTA |  |
|RF-015| A aplicação deve conter páginas "Perguntas Frequentes" que aborda as dúvidas mais comuns dos visitantes em relação ao voluntariado e ao uso da plataforma. | ALTA |  |
|RF-016| A aplicação deve permitir que as ONGs publiquem informações sobre suas conquistas e projetos bem-sucedidos, a fim de promover suas causas. | ALTA |  |
|RF-017| A aplicação deve apresentar página "Sobre o Voluntariado" que fornece informações detalhadas sobre o conceito de trabalho voluntário, destacando seu impacto positivo na sociedade e nas comunidades. | ALTA |  |
|RF-018| A aplicação deve apresentar Página "Por Que Ser Voluntário?" que apresenta histórias inspiradoras de voluntários e os benefícios pessoais que podem ser obtidos ao se envolver em ações voluntárias. | ALTA |  |
|RF-019| A aplicação deve apresentar página "Como Começar" que orienta os visitantes sobre os passos necessários para se tornarem voluntários registrados na aplicação. | ALTA |  |
|RF-020| A aplicação deve apresentar Página "Histórias de Sucesso" que destaca projetos anteriores realizados por meio da plataforma, com resultados, depoimento de voluntários e impacto positivo alcançados. | ALTA |  |
|RF-021| A aplicação deve apresentar página de recursos interativos, como quizzes ou testes de personalidade, que ajudam os visitantes a descobrir em que áreas podem ser mais eficazes. | ALTA |  |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve oferecer uma interface com design responsivo que se adapte aos dispositivos móveis e desktops. | ALTA |
|RNF-002| A aplicação deve apresentar um layout simples e de fácil utilização. |  ALTA |
|RNF-003| As senhas dos usuários devem ser criptografadas antes de serem armazenadas. |  ALTA |
|RNF-004| A aplicação deve fornecer feedback visual claro para ações do usuário, como confirmações de envio e mensagens de erro. |  ALTA |
|RNF-005| A aplicação deve responder às solicitações dos usuários com um tempo limite máximo de 3 segundos para carregar páginas ou processar ações. |  ALTA |
|RNF-006| O sistema deve ser capaz de estar disponível 99,9% do tempo, que se traduz em cerca de 8,76 horas de inatividade não planejada por ano. |  ALTA |
|RNF-007| O sistema deve ser capaz de ser executado nas versões mais recentes dos principais navegadores do mercado, como: Chrome, Firefox, Edge e Safari. |  ALTA |


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                                                                                |
|--|--------------------------------------------------------------------------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre.                                                                   |
|02| Não pode ser desenvolvido um módulo de backend.                                                                          |
|03| Não será possível efetuar pagamentos pelo site.                                                                          |
|04| Cada ONG poderá cadastrar no máximo 1 conta por CNPJ.                                                                    |
|05| Cada ONG poderá ter apenas 2 demandas ativas por vez.                                                                    |
|06| Cada voluntário poderá se candidatar a apenas 2 demandas por vez.                                                        |
|07| A ONG deve aceitar ou recusar a candidatura do voluntário em até 3 dias, caso contrário será recusada automaticamente.   |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
