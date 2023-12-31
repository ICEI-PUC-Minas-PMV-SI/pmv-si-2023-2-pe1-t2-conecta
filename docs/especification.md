# Especificações do Projeto

Pensando em como os profissionais e estudantes da área de tecnologia podem contribuir com suas habilidades e conhecimentos em prol da comunidade, está sendo criada esta aplicação com o principal foco em conectar estes profissionais com ONGs de todo Brasil.

No processo de planejamento do projeto foram utilizados os seguintes passos: definição das personas mais coerentes para aplicação, mapeamento das necessidades e dores dos usuários e a criação dos requisitos que norteiam e definem o desenvolvimento do projeto.

Com os dados abaixo levantados será possível a elaboração da aplicação, cujo intuito é atender as demandas das ONGs aplicando os conhecimentos na área de tecnologia.

## Personas

![Persona Ana Silva](./img/personas/persona-ana-silva.jpg)

![Persona Ana Lúcia](./img/personas/persona-ana-lucia.jpg)

![Persona Elisa Andrade](./img/personas/persona-elisa-andrade.jpg)

![Persona Gustavo Silva](./img/personas/persona-gustavo-silva.jpg)

![Persona Heitor Santos](./img/personas/persona-heitor-santos.jpg)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Ana Silva  | Desejo uma forma eficiente de unir pessoas que queiram se voluntariar, com as ONGs com demandas em que posso contribuir. | Para causar impacto positivo na sociedade. |
|Ana Silva   | Entender os desafios das ONGs.  | Para aprimorar suas habilidades profissionais. |
|Ana Lucia  | Preciso encontrar pessoas que possam se voluntariar em minha ONG de forma remota ou de forma presencial, para que eu consiga resolver os problemas com mais eficiência.  | Para ajudar com as necessidades tecnológicas da ONG.|
|Elisa Andrade  | Quero me cadastrar para ser voluntária em ONGs. | Aplicar os conhecimentos que estou adquirindo como estudante de Sistemas de Informação. |
|Elisa Andrade      | Quero encontrar ONGs de acordo com meu interesse e minha disponibilidade.                | Para me voluntariar em áreas do meu interesse com flexibilidade de horário.|
|Gustavo Silva  | Saber as necessidades das ONGs para que eu possa atender de forma remota. | Poder ser voluntário aplicando meus conhecimentos como engenheiro de software.   Permitindo também que eu possa ser voluntário da minha casa ou dos locais onde eu estiver viajando a trabalho. |
|Gustavo Silva       | Saber os detalhes da posição antes de me cadastrar.                 | Para que eu me candidate somente às posições que são de meu interesse e que correspondem às minhas habilidades. |
|Heitor Santos       | Conhecer as ONGs no Brasil e as necessidades delas, para que eu possa me mobilizar para ajudar.        | Para que eu possa conciliar com as minhas viagens e projetos.|              |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Tipo |
|------|-----------------------------------------|----| ----|
|RF-001| A aplicação deve permitir que as ONGs se cadastrem. | ALTA | Dinâmico |
|RF-002| A aplicação deve fornecer um sistema de autenticação seguro, permitindo que as ONGs acessem suas contas por meio de um processo de login. | ALTA | Dinâmico |
|RF-003| A aplicação deve oferecer um processo de recuperação de senha, permitindo que usuários redefinam suas senhas em caso de esquecimento ou perda. | ALTA | Dinâmico |
|RF-004| A aplicação deve apresentar uma página exclusiva para cada ONG, contendo informações sobre a organização, depoimentos dos voluntários e últimas demandas. | ALTA | Dinâmico |
|RF-005| A aplicação deve permitir que as ONGs gerenciem suas informações de perfil (alterar, excluir e consultar os dados) a qualquer momento. | ALTA | Dinâmico |
|RF-006| A aplicação deve possibilitar que as ONGs divulguem solicitações de ajuda técnica, descrevendo os projetos ou desafios específicos que precisam ser abordados. | ALTA | Dinâmico |
|RF-007| A aplicação deve permitir que as ONG vejam e administrem suas demandas, podendo filtrar por status (aberta, finalizada), cadastrar ou excluir. | ALTA | Dinâmico |
|RF-008| As ONGs devem poder editar suas demandas (alterar, excluir e editar os dados) a qualquer momento. | ALTA | Dinâmico |
|RF-009| Os voluntários devem poder se voluntariar por meio de formulário de contato para trabalhar em projetos específicos das ONGs, indicando seu interesse e disponibilidade. | ALTA | Dinâmico |
|RF-010| A aplicação deve permitir que as ONGs marquem as solicitações como concluídas ou encerradas. | ALTA | Dinâmico |
|RF-011| A aplicação deve apresentar página contendo as últimas demandas criadas pelas ONGs. | ALTA | Dinâmico |
|RF-012| A aplicação deve apresentar a página “Como Começar” que orienta os visitantes sobre os passos necessários para se tornarem voluntários registrados na aplicação. | ALTA | Estático |
|RF-013| Deve existir uma página inicial (*landing page*) informativa que apresenta o propósito da plataforma e incentiva tanto as ONGs quanto os voluntários a utilizar a aplicação. | ALTA | Estático |
|RF-014| A aplicação deve conter a página “Perguntas Frequentes” que aborda as dúvidas mais comuns dos visitantes em relação ao voluntariado e ao uso da plataforma. | ALTA | Estático |
|RF-015| A aplicação deve apresentar a página “Sobre o Voluntariado”  que fornece informações detalhadas sobre o conceito de trabalho voluntário, destacando seu impacto positivo na sociedade e nas comunidades. | ALTA | Estático |
|RF-016| A aplicação deve apresentar a página “Por Que Ser Voluntário?” que apresenta os benefícios pessoais que podem ser obtidos ao se envolver em ações voluntárias. | ALTA | Estático |
|RF-017| A aplicação deve apresentar a página “Histórias de Sucesso” que destaca projetos anteriores realizados por meio da plataforma, com resultados, depoimentos de voluntários e o impacto positivo alcançado. | ALTA | Estático |
|RF-018| A aplicação deve fornecer um mecanismo de filtro para que os usuários possam encontrar demandas com base em critérios como: remoto, presencial e estado do Brasil. | MÉDIA | Dinâmico |
|RF-019| Os voluntários devem receber um e-mail quando uma ONG expressa interesse em seu perfil. | MÉDIA | Dinâmico |
|RF-020| A página da demanda cadastrada pela ONG deve exibir uma lista de todos os voluntários que tiveram a candidatura aceita. | BAIXA | Dinâmico |
|RF-021| Na página da demanda cadastrada pela ONG, deve ter um botão com a finalidade de enviar um link via e-mail aos voluntários solicitando a eles que deixem um comentário sobre sua experiência. | BAIXA | Dinâmico |
|RF-022| A aplicação deve apresentar uma página para depoimento da solicitação que o voluntário participou, que só poderá ser acessada através do link recebido via e-mail, com um formulário para preenchimento. | BAIXA | Dinâmico |
|RF-023| Os depoimentos dos voluntários devem ser disponibilizados no perfil da ONG que fez a solicitação. | BAIXA | Dinâmico |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve oferecer uma interface com design responsivo que se adapte aos dispositivos móveis e desktops. | ALTA |
|RNF-002| A aplicação deve apresentar um layout simples e de fácil utilização. |  ALTA |
|RNF-003| As senhas dos usuários devem ser criptografadas antes de serem armazenadas. |  ALTA |
|RNF-004| A aplicação deve fornecer feedback visual claro para ações do usuário, como confirmações de envio e mensagens de erro. |  ALTA |
|RNF-005| O sistema deve ser capaz de ser executado nas versões mais recentes dos principais navegadores do mercado, como: Chrome, Firefox, Edge e Safari. |  ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                                                                                |
|--|--------------------------------------------------------------------------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre.                                                                   |
|02| Não pode ser desenvolvido um módulo de backend.                                                                          |
|03| Não será possível efetuar pagamentos pelo site.                                                                          |
|04| Cada ONG poderá cadastrar no máximo 1 conta por CNPJ.                                                                    |                                                                   |
|05| Cada voluntário poderá se candidatar a apenas 2 demandas por vez.                                                        |
|06| A ONG deve aceitar ou recusar a candidatura do voluntário em até 3 dias, caso contrário será recusada automaticamente.   |
|07| A comunicação entre voluntários e ONGs ocorrerá de forma externa à aplicação (e-mail, telefone, mensagens de texto). |  ALTA |