# Programação de Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

| ID     | Descrição do Requisito                                                                                                                                           | Prioridade | Artefato Criado                                                               |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|-------------------------------------------------------------------------------|
| RF-001 | A aplicação deve permitir que as ONGs se cadastrem.                                                                                                              | ALTA       | cadastrar-ong-1.html / cadastrar-ong-2.html                                   |
| RF-002 | A aplicação deve permitir que as ONGs gerenciem suas informações de perfil (alterar, excluir e consultar os dados) a qualquer momento.                           | ALTA       | cadastrar-ong-1.html / cadastrar-ong-2.html                                   |
| RF-003 | A aplicação deve possibilitar que as ONGs divulguem solicitações de ajuda técnica, descrevendo os projetos ou desafios específicos que precisam ser abordados.   | ALTA       | cadastrar-demanda.html                                                        |
| RF-004 | A aplicação deve permitir que os voluntários visualizem as solicitações de ajuda técnica feitas pelas ONGs.   | ALTA       | index.html / pagina-de-demandas.html                                           |
| RF-005 | Os voluntários devem poder se voluntariar por meio de formulário de contato para trabalhar em projetos específicos das ONGs, indicando seu interesse e disponibilidade.   | ALTA       | candidatar-a-demanda.html                                                     |
| RF-006 | A aplicação deve permitir que as ONGs marquem as solicitações como concluídas ou encerradas.   | ALTA       | candidatar-a-demanda.html                                                     |
| RF-007 | A aplicação deve apresentar página contendo as últimas demandas criadas pelas ONGs.   | ALTA       | pagina-de-demandas.html                                                     |
| RF-008 | A aplicação deve apresentar a página “Como Começar” que orienta os visitantes sobre os passos necessários para se tornarem voluntários registrados na aplicação. | ALTA       | como-comecar.html                                                             |
| RF-009 | Deve existir uma página inicial (landing page) informativa que apresenta o propósito da plataforma e incentiva tanto as ONGs quanto os voluntários a utilizar a aplicação. | ALTA       | index.html                                                             |
| RF-010 | A aplicação deve conter a página “Perguntas Frequentes” que aborda as dúvidas mais comuns dos visitantes em relação ao voluntariado e ao uso da plataforma. | ALTA       | perguntas-frequentes.html                                                             |
| RF-011 | A aplicação deve apresentar a página “Sobre o Voluntariado” que fornece informações detalhadas sobre o conceito de trabalho voluntário, destacando seu impacto positivo na sociedade e nas comunidades. | ALTA       | sobre-o-voluntariado.html                                                     |
| RF-012 | A aplicação deve apresentar a página “Por Que Ser Voluntário?” que apresenta os benefícios pessoais que podem ser obtidos ao se envolver em ações voluntárias. | ALTA       | por-que-ser-voluntario.html                                                     |
| RF-013 | A aplicação deve apresentar a página “Histórias de Sucesso” que destaca projetos anteriores realizados por meio da plataforma, com resultados, depoimentos de voluntários e o impacto positivo alcançado. | ALTA       | historias-de-sucesso.html                                                     |
| RF-014 | A aplicação deve fornecer um mecanismo de filtro para que os usuários possam encontrar demandas com base em critérios como: remoto, presencial, estado do Brasil e palavras-chave. | MÉDIA       | pagina-de-demandas / administrar-demandas.html                                                     |
| RF-015 | Os voluntários devem receber um e-mail quando uma ONG expressa interesse em seu perfil. | MÉDIA       | administrar-demanda-em-pogresso.html    / administrar-demanda-finalizada.html |
| RF-018 | A página da demanda cadastrada pela ONG deve exibir uma lista de todos os voluntários que tiveram a candidatura aceita. | BAIXA       | administrar-demanda-em-pogresso.html    / administrar-demanda-finalizada.html |
| RF-019 | Na página da demanda cadastrada pela ONG, deve ter um botão com a finalidade de enviar um link via e-mail aos voluntários solicitando a eles que deixem um comentário sobre sua experiência. | BAIXA       | administrar-demanda-finalizada.html |
| RF-020 | A aplicação deve apresentar uma página para depoimento da solicitação que o voluntário participou, que só poderá ser acessada através do link recebido via e-mail, com um formulário para preenchimento.| BAIXA       | cadastrar-depoimento.html |
| RF-021 | Os depoimentos dos voluntários devem ser disponibilizados no perfil da ONG que fez a solicitação.                                                                | BAIXA      | pagina-da-ong.html                                                            |

## Descrição das estruturas:

## ONG
| **Nome** | **Tipo**         | **Descrição**                                   | **Exemplo**                                                      |
|:--------:|------------------|-------------------------------------------------|------------------------------------------------------------------|
|    Id    | UUID             | Identificador único da ONG                      | 95ddad92-c441-4e92-a34d-fcf328c69b78                             |
|   CNPJ   | Texto            | Número de CNPJ da ONG                           | 51948129000167                                                   |
|  Email   | Texto            | Endereço de e-mail da ONG                       | ong@email.com                                                    |
| Telefone | Texto            | Número de telefone da ONG                       | 3132700120                                                       |
|  Senha   | Texto(SHA-256)   | Senha de acesso à conta da ONG                  | bdcebd4f01d7024696ba685eefc1c5dd446071b0c89f858aae7ef136c439e09e |
|   CEP    | Texto            | Código de Endereçamento Postal (CEP)            | 30170131                                                         |
|   Rua    | Texto            | Nome da rua onde está localizada a ONG          | Rua dos Tupis                                                    |
|  Número  | Texto            | Número do endereço da ONG                       | 646                                                              |
|  Cidade  | Texto            | Cidade onde está localizada a ONG               | Belo Horizonte                                                   |
|  Estado  | Texto            | Abreviação do estado onde está localizada a ONG | MG (ISO 3166-2: BR)                                              |
|   Nome   | Texto            | Nome da ONG                                     | Organização 4 patinhas                                           |
|  Sobre   | Texto            | Descrição sobre a ONG                           | Ajudamos animais abandonados a encontrar um lar                  |
|  Imagem  | binary           | URL da imagem representando a ONG               | `[/9j/4ASKUHINNCVDXL/OIJVNVSMDKM6846V86SD5V]`                    |

## Demanda
|     **Nome**      | **Tipo**                     | **Descrição**                                                             | **Exemplo**                                                                         |
|:-----------------:|------------------------------|---------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
|        Id         | UUID                         | Identificador único da demanda                                            | 95ddad92-c441-4e92-a34d-fcf328c69b78                                                |
|     Id da ONG     | UUID                         | Identificador da ONG relacionada                                          | 95ddad92-c441-4e92-a34d-fcf328c69b78                                                |
|       Nome        | Texto                        | Nome da demanda                                                           | Criar um site                                                                       |
|     Descrição     | Texto                        | Descrição da demanda                                                      | Precisamos de um site que recolha doações e cadastre locais de coleta               |
|     Criado em     | Timestamp                    | Data de criação da demanda                                                | 2023-10-28T22:41:38+00:00                                                           |
|      Status       | Texto                        | Status da demanda (aberto, fechado, finalizada) Enum                      | Aberta                                                                              |
|       Tipo        | Texto                        | Tipo da demanda (local, remoto, híbrido)                                  | Remota                                                                              |
| Dados de Pesquisa | Texto                        | Dados utilizados para pesquisa (nome e descrição da demanda concatenados) | Criar um site Precisamos de um site que recolha doações e cadastre locais de coleta |
|    Candidatos     | Lista de UUIDs de candidatos | Lista com identificador de candidatos associados à demanda                | `[95ddad92-c441-4e92-a34d-fcf328c69b78, 95ddad92-c441-4e92-a34d-fcf328c69b78]`      |

## Candidatos
|   **Nome**    | **Tipo**         | **Descrição**                              | **Exemplo**                                       |
|:-------------:|------------------|--------------------------------------------|---------------------------------------------------|
|      Id       | UUID             | Identificador único do candidato           | 95ddad92-c441-4e92-a34d-fcf328c69b78              |
| Id da demanda | UUID             | Identificador único da demanda relacionada | 95ddad92-c441-4e92-a34d-fcf328c69b78              |
|     Nome      | Texto            | Nome do candidato                          | João                                              |
|     Email     | Texto            | Endereço de e-mail do candidato            | joao@email.com                                    |
|    Active     | Boolean          | Status do candidato (aprovado, reprovado)  | `true ou false`                                    |
