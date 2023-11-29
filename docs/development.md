# Programação de Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

| ID     | Descrição do Requisito                                                                                                                                           | Prioridade | Artefato Criado                                                               |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|-------------------------------------------------------------------------------|
| RF-001 | A aplicação deve permitir que as ONGs se cadastrem.| ALTA       | cadastrar-ong-1.html / cadastrar-ong-2.html                                   |
|RF-002| A aplicação deve fornecer um sistema de autenticação seguro, permitindo que as ONGs acessem suas contas por meio de um processo de login. | ALTA | login.html |
|RF-003| A aplicação deve oferecer um processo de recuperação de senha, permitindo que usuários redefinam suas senhas em caso de esquecimento ou perda. | ALTA | recuperar-senha.html |
|RF-004| A aplicação deve apresentar uma página exclusiva para cada ONG, contendo informações sobre a organização, depoimentos dos voluntários e últimas demandas. | ALTA | pagina-da-ong.html |
| RF-005 | A aplicação deve permitir que as ONGs gerenciem suas informações de perfil (alterar, excluir e consultar os dados) a qualquer momento.                           | ALTA       | cadastrar-ong-1.html / cadastrar-ong-2.html                                   |
| RF-006 | A aplicação deve possibilitar que as ONGs divulguem solicitações de ajuda técnica, descrevendo os projetos ou desafios específicos que precisam ser abordados.   | ALTA       | cadastrar-demanda.html                                                        |
| RF-007 | A aplicação deve permitir que as ONG vejam e administrem suas demandas, podendo filtrar por status (aberta, finalizada), cadastrar ou excluir.   | ALTA       | administrar-demandas.html                                                        |
| RF-008 | As ONGs devem poder editar suas demandas (alterar, excluir e editar os dados) a qualquer momento.   | ALTA       | editar-demanda.html                                   |
| RF-009 | A aplicação deve permitir que os voluntários visualizem as solicitações de ajuda técnica feitas pelas ONGs.   | ALTA       | index.html / pagina-de-demandas.html                                           |
| RF-010 | Os voluntários devem poder se voluntariar por meio de formulário de contato para trabalhar em projetos específicos das ONGs, indicando seu interesse e disponibilidade.   | ALTA       | candidatar-a-demanda.html                                                     |
| RF-011 | A aplicação deve permitir que as ONGs marquem as solicitações como concluídas ou encerradas.   | ALTA       | administrar-demanda-em-progresso.html                                                     |
| RF-012 | A aplicação deve apresentar página contendo as últimas demandas criadas pelas ONGs.   | ALTA       | pagina-de-demandas.html                                                     |
| RF-013 | A aplicação deve apresentar a página “Como Começar” que orienta os visitantes sobre os passos necessários para se tornarem voluntários registrados na aplicação. | ALTA       | como-comecar.html                                                             |
| RF-014 | Deve existir uma página inicial (landing page) informativa que apresenta o propósito da plataforma e incentiva tanto as ONGs quanto os voluntários a utilizar a aplicação. | ALTA       | index.html                                                             |
| RF-015 | A aplicação deve conter a página “Perguntas Frequentes” que aborda as dúvidas mais comuns dos visitantes em relação ao voluntariado e ao uso da plataforma. | ALTA       | perguntas-frequentes.html                                                             |
| RF-016 | A aplicação deve apresentar a página “Sobre o Voluntariado” que fornece informações detalhadas sobre o conceito de trabalho voluntário, destacando seu impacto positivo na sociedade e nas comunidades. | ALTA       | sobre-o-voluntariado.html                                                     |
| RF-017 | A aplicação deve apresentar a página “Por Que Ser Voluntário?” que apresenta os benefícios pessoais que podem ser obtidos ao se envolver em ações voluntárias. | ALTA       | por-que-ser-voluntario.html                                                     |
| RF-018 | A aplicação deve apresentar a página “Histórias de Sucesso” que destaca projetos anteriores realizados por meio da plataforma, com resultados, depoimentos de voluntários e o impacto positivo alcançado. | ALTA       | historias-de-sucesso.html                                                     |
| RF-019 | A aplicação deve fornecer um mecanismo de filtro para que os usuários possam encontrar demandas com base em critérios como: remoto, presencial e estado do Brasil. | MÉDIA       | pagina-de-demandas / administrar-demandas.html                                                     |
| RF-020 | Os voluntários devem receber um e-mail quando uma ONG expressa interesse em seu perfil. | MÉDIA       | administrar-demanda-em-pogresso.html    / administrar-demanda-finalizada.html |
| RF-023 | A página da demanda cadastrada pela ONG deve exibir uma lista de todos os voluntários que tiveram a candidatura aceita. | BAIXA       | administrar-demanda-em-pogresso.html    / administrar-demanda-finalizada.html |
| RF-024 | Na página da demanda cadastrada pela ONG, deve ter um botão com a finalidade de enviar um link via e-mail aos voluntários solicitando a eles que deixem um comentário sobre sua experiência. | BAIXA       | administrar-demanda-finalizada.html |
| RF-025 | A aplicação deve apresentar uma página para depoimento da solicitação que o voluntário participou, que só poderá ser acessada através do link recebido via e-mail, com um formulário para preenchimento.| BAIXA       | cadastrar-depoimento.html |
| RF-026 | Os depoimentos dos voluntários devem ser disponibilizados no perfil da ONG que fez a solicitação.                                                                | BAIXA      | pagina-da-ong.html                                                            |


## Descrição das estruturas:

## ONG
| **Nome**  | **Tipo**       | **Descrição**                                            | **Exemplo**                                                      |
|:---------:|----------------|----------------------------------------------------------|------------------------------------------------------------------|
|    Id     | Number           | Identificador único da ONG                               | 1                           |
|   CNPJ    | Texto          | Número de CNPJ da ONG                                    | 51948129000167                                                   |
|   Email   | Texto          | Endereço de e-mail da ONG                                | ong@email.com                                                    |
| Telefone  | Texto          | Número de telefone da ONG                                | 3132700120                                                       |
|   Senha   | Texto(SHA-256) | Senha de acesso à conta da ONG                           | bdcebd4f01d7024696ba685eefc1c5dd446071b0c89f858aae7ef136c439e09e |
|    CEP    | Texto          | Código de Endereçamento Postal (CEP)                     | 30170131                                                         |
|    Rua    | Texto          | Nome da rua onde está localizada a ONG                   | Rua dos Tupis                                                    |
|  Número   | Texto          | Número do endereço da ONG                                | 646                                                              |
|  Cidade   | Texto          | Cidade onde está localizada a ONG                        | Belo Horizonte                                                   |
|  Estado   | Texto          | Abreviação do estado onde está localizada a ONG          | MG (ISO 3166-2: BR)                                              |
|   Nome    | Texto          | Nome da ONG                                              | Organização 4 patinhas                                           |
|   Sobre   | Texto          | Descrição sobre a ONG                                    | Ajudamos animais abandonados a encontrar um lar                  |
|  Imagem   | Texto          | Texto representando a imagem da ONG convertida em base64 | `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEFFAUUAAD/...`         |
| Facebook  | Texto          | URL da página da ONG no Facebook                         | `https://www.facebook.com/organizacao4patinhas`                  |
| Instagram | Texto          | URL da página da ONG no Instagram                        | `https://www.instagram.com/organizacao4patinhas`                 |
|  Twitter  | Texto          | URL da página da ONG no Twitter                          | `https://www.twitter.com/organizacao4patinhas`                   |

## Demanda
|     **Nome**      | **Tipo**                     | **Descrição**                                                             | **Exemplo**                                                                         |
|:-----------------:|------------------------------|---------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
|        Id         | Number                         | Identificador único da demanda                                            | 1                                                |
|     Id da ONG     | Number                         | Identificador da ONG relacionada                                          | 1                                                |
|       Nome        | Texto                        | Nome da demanda                                                           | Criar um site                                                                       |
|     Descrição     | Texto                        | Descrição da demanda                                                      | Precisamos de um site que recolha doações e cadastre locais de coleta               |
|     Criado em     | Timestamp                    | Data de criação da demanda                                                | 2023-10-28T22:41:38+00:00                                                           |
|      Status       | Texto                        | Status da demanda (aberto, fechado, finalizada) Enum                      | Aberta                                                                              |
|       Tipo        | Texto                        | Tipo da demanda (local, remoto)                                  | Remota                                                                              |
| Dados de Pesquisa | Texto                        | Dados utilizados para pesquisa (nome e descrição da demanda concatenados) | Criar um site Precisamos de um site que recolha doações e cadastre locais de coleta |
|    Candidatos     | Lista de IDs de candidatos | Lista com identificador de candidatos associados à demanda                | `[1,2,3]`      |

## Candidatos
|   **Nome**    | **Tipo**         | **Descrição**                              | **Exemplo**                                       |
|:-------------:|------------------|--------------------------------------------|---------------------------------------------------|
|      Id       | Number             | Identificador único do candidato           | 1              |
| Id da demanda | Number             | Identificador único da demanda relacionada | 1              |
|     Nome      | Texto            | Nome do candidato                          | João                                              |
|     Email     | Texto            | Endereço de e-mail do candidato            | joao@email.com                                    |
|     CPF     | Number            | Número do cadastro de pessoa física            | 123.456.78-90                                    |
|     Telefone     | Number            | Número de contato do candidato            | (47) 9 8765-4321                                    |
|     Descrição     | Texto            | Descrição de como ajudar.            | "Sou designer gráfico com 5 anos de experiência. Estou interessado em ajudar a criar um site impactante que transmita a mensagem da ONG de forma clara e eficaz."                                    |
|    Active     | Boolean          | Status do candidato (aprovado, reprovado)  | `true ou false`                                   |

## Depoimentos
|      **Nome**      | **Tipo**  | **Descrição**                                           | **Exemplo**                          |
|:------------------:|-----------|---------------------------------------------------------|--------------------------------------|
|         Id         | Number      | Identificador único do depoimento                       | 1 |
|   Id da demanda    | Number      | Identificador único da demanda relacionada              | 1 |
|  Id do voluntario  | Number      | Identificador único do voluntário relacionada           | 1 |
|     Depoimento     | Texto     | Depoimento escrito pelo candidato                       | Minha experiência sendo ....         |
|       token        | Texto     | Seguimento que faz parte do link e o torna seguro       | e10adc3949ba59abbe56e057f20f883e     |
|     expiração      | Timestamp | Data e hora limite em que o depoimento pode ser enviado | 2023-10-28T22:41:38+00:00            |

## Sessão
|     **Nome**     | **Tipo**  | **Descrição**                                       | **Exemplo**                          |
|:----------------:|-----------|-----------------------------------------------------|--------------------------------------|
|        Id        | Number      | Identificador único da sessão                       | 1 |
|    Id da ONG     | Number      | Identificador único da ONG                          | 1 |
|      token       | Texto     | Token que é verificado a cada request se esta ativo | e10adc3949ba59abbe56e057f20f883e     |
|    expiração     | Timestamp | Data e hora limite em que a sessão ficará ativa     | 2023-10-28T22:41:38+00:00            |
