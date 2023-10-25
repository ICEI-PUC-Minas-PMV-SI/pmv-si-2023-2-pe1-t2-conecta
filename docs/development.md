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

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve exibir as notícias mais populares. | ALTA | index.html |
|RF-002| Usuários autenticados podem registrar novas notícias. | ALTA | cadastro-noticia.html |

## Descrição das estruturas:

## ONG
| **Nome** | **Tipo**         | **Descrição**                             | **Exemplo**                                     |
|:--------:|------------------|-------------------------------------------|-------------------------------------------------|
|    Id    | Número (Inteiro) | Identificador único da ONG                | 1                                               |
|   CNPJ   | Texto            | Número de CNPJ da ONG                     | 51.948.129/0001-67                              |
|  Email   | Texto            | Endereço de e-mail da ONG                 | ong@email.com                                   |
| Telefone | Texto            | Número de telefone da ONG                 | 3132700120                                      |
|  Senha   | Texto            | Senha de acesso à conta da ONG            | senha123                                        |
|   CEP    | Texto            | Código de Endereçamento Postal (CEP)      | 30170-131                                       |
|   Rua    | Texto            | Nome da rua onde está localizada a ONG    | Rua dos Tupis                                   |
|  Número  | Texto            | Número do endereço da ONG                 | 646                                             |
|  Cidade  | Texto            | Cidade onde está localizada a ONG         | Belo Horizonte                                  |
|  Estado  | Texto            | Nome do estado onde está localizada a ONG | Minas Gerais                                    |
|   Nome   | Texto            | Nome da ONG                               | Organização 4 patinhas                          |
|  Sobre   | Texto            | Descrição sobre a ONG                     | Ajudamos animais abandonados a encontrar um lar |
|  Imagem  | URL (Texto)      | URL da imagem representando a ONG         | docs/img/personas/persona-ana-lucia.jpg         |

## Demanda
|     **Nome**      | **Tipo**          | **Descrição**                                                             | **Exemplo**                                                                         |
|:-----------------:|-------------------|---------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
|        Id         | Número (Inteiro)  | Identificador único da demanda                                            | 1                                                                                   |
|     Id da ONG     | Número (Inteiro)  | Identificador da ONG relacionada                                          | 1                                                                                   |
|       Nome        | Texto             | Nome da demanda                                                           | Criar um site                                                                       |
|     Descrição     | Texto             | Descrição da demanda                                                      | Precisamos de um site que recolha doações e cadastre locais de coleta               |
|     Criado em     | Data (YYYY-MM-DD) | Data de criação da demanda                                                | 2022-03-01                                                                          |
|      Status       | Texto             | Status da demanda (aberto, fechado)                                       | Aberto                                                                              |
|       Tipo        | Texto             | Tipo da demanda (local, remoto, híbrido)                                  | Remoto                                                                              |
| Dados de Pesquisa | Texto             | Dados utilizados para pesquisa (nome e descrição da demanda concatenados) | Criar um site Precisamos de um site que recolha doações e cadastre locais de coleta |
|    Voluntários    | Lista de Objetos  | Lista de voluntários associados à demanda                                 | `[{ "email": "voluntario1@email.com" }, { "email": "voluntario2@email.com" }]`      |
