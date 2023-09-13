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
|RF-001| Permitir que o usuário cadastre tarefas | ALTA |  |
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

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
