# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

| ID     | Descrição do Requisito                                                                                                                                           | Prioridade | Artefato Criado       |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|-----------------------|
| RF-001 | O sistema deve exibir as notícias mais populares.                                                                                                                | ALTA       | index.html            |
| RF-002 | Usuários autenticados podem registrar novas notícias.                                                                                                            | ALTA       | cadastro-noticia.html |
| RF-008 | A aplicação deve apresentar a página “Como Começar” que orienta os visitantes sobre os passos necessários para se tornarem voluntários registrados na aplicação. | ALTA       | como-comecar.html     |
| RF-021 | Os depoimentos dos voluntários devem ser disponibilizados no perfil da ONG que fez a solicitação.                                                                | BAIXA      | pagina-da-ong.html    |

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
