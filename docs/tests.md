# Testes

# Teste de Software

## Plano de Testes de Software

|     **Caso de Teste**     | **CT01 - Cadastrar ONG parte 1**                                                                                                                                                                                |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Acessar [página de cadastro](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/login/login.html) <br> 2) Inserir os dados nos campos apresentados <br> 3) Clicar no botão `Próximo` |
| **Requisitos associados** | RF-001                                                                                                                                                                                                          |
|  **Resultado esperado**   | Prosseguir para a parte 2 do cadastro.                                                                                                                                                                          |
|   **Dados de entrada**    | Inserção de dados válidos no formulário de cadastro.                                                                                                                                                            |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                        |

|     **Caso de Teste**     | **CT02 - Cadastrar ONG parte 2**                                                                                                                                                                                                                                                                                                                                                                                               |
|:-------------------------:|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Após inserir os dados solicitados na parte 2 <br> 2) Selecione uma imagem para ser utilizada como no perfil da ONG (opcional) <br> 3) Forneça um texto sobre sua ONG <br> 4) Informe o link do perfil da sua ONG nas redes sociais (opcional) <br> 5) Clique no botão `Cadastrar` <br> 6) Confirme um alerta com a mensagem `Cadastro realizado com sucesso!` na sua tela <br> 7) Seja redirecionado para a tela de login |
| **Requisitos associados** | RF-001                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  **Resultado esperado**   | Criação de cadastro                                                                                                                                                                                                                                                                                                                                                                                                            |
|   **Dados de entrada**    | Inserção de dados válidos no formulário de cadastro.                                                                                                                                                                                                                                                                                                                                                                           |
|   **Resultado obtido**    | Alerta na tela informando que o cadastro foi realizado com sucesso e redirecionamento para a [tela de login](http://localhost:63342/conecta/src/pages/login/login.html)                                                                                                                                                                                                                                                        |

**Caso de Teste** | **CT03 - Autenticação de ONG (login)**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página de [login](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/login/login.html) <br> 2) Digite o e-mail e a senha <br> 3) Clique no botão `Entrar`
**Requisitos associados** | RF-002
**Resultado esperado** | Estar autenticado na aplicação.
**Dados de entrada** | E-mail e senha
**Resultado obtido** | Sucesso.

|     **Caso de Teste**     | **CT04 - Recuperação de Senha**                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------:|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Acessar a [página de login](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/login/login.html)  <br> 2) Insira o email de uma ONG previamente cadastrada <br> 3) Clique no botão `Esqueceu a senha?` <br> 4) Acesse o link enviado por email (verifique a caixa de spam) <br> 5) Iinsira a nova senha a a confirmação <br> 6) Clique no botão `Redefinir` <br> 7) Realize o login utilizando o e-mail e a nova senha |
| **Requisitos associados** | RF-003                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  **Resultado esperado**   | Senha do usuário da ONG ser alterada                                                                                                                                                                                                                                                                                                                                                                                                             |
|   **Dados de entrada**    | Email, nova senha e confirmação da nova senha                                                                                                                                                                                                                                                                                                                                                                                                    |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                                                                                                                                                                                                                                                         |

|     **Caso de Teste**     | **CT05 - Página da ONG**                                                                                                                                                                                                                                                                                                       |
|:-------------------------:|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Acessar [página da ONG](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/pagina-da-ong/pagina-da-ong.html?id=1) <br> 2) Validar que os dados são carregados corretamente <br> 3) Alterar `id=1` para `id=2` ao final da URL <br> 4) Validar que os dados de outra ONG são carregados corretamente |
| **Requisitos associados** | RF-004                                                                                                                                                                                                                                                                                                                         |
|  **Resultado esperado**   | Página é carregada com os dados da ONG corretamente.                                                                                                                                                                                                                                                                           |
|   **Dados de entrada**    | Nenhum.                                                                                                                                                                                                                                                                                                                        |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                                                                                                                                       |

**Caso de Teste** | **CT06 - Gerenciamento de Perfil da ONG**
 :--------------: | ------------
**Procedimento**  | 1) Navegar ate a página de [perfil](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/cadastrar-ong/cadastrar-ong-1.html) <br> 2) Visualizar e digitar dados, clicar no botão `próximo` para aletrar foto do perfil e redes sociais  <br> 3) Quando finalizada as alterações clique em `salvar` 
**Requisitos associados** | RF-005
**Resultado esperado** | Cadastrar dados do perfil da ONG.
**Dados de entrada** | Dados pessoais referentes ao perfil.
**Resultado obtido** | Sucessp.

**Caso de Teste** | **CT07 - Solicitações de Ajuda pelas ONGs**
 :--------------: | ------------
**Procedimento**  | 1) Entre na página [administrar demandas](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/administrar-demandas/administrar-demandas.html) <br> 2) Clique no botão `cadastrar demanda`<br> 3) Coloque as informações sobre a demanda e clique em `cadastrar`
**Requisitos associados** | RF-006
**Resultado esperado** | Demanda cadastrada com sucesso.
**Dados de entrada** | Informações sobre a demanda
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT08 - Administrar Demandas**
 :--------------: | ------------
**Procedimento**  | 1) Faça [login](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/login/login.html) <br> 2) Acesse a página [Administrar Demanda](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/administrar-demandas/administrar-demandas.html) <br> 3) Gerencie sua demandas nessa página.
**Requisitos associados** | RF-007
**Resultado esperado** | Demandas específcas de cada ONG carregadas com todas informações. Função de filtro para filtrar as demandas, botões para excluir a demanda e para direcionar para página com os canditados.
**Dados de entrada** | E-mail, senha.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT09 - Edição de Demandas pelas ONGs**
 :--------------: | ------------
**Procedimento**  | 1) Faça [login](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/login/login.html) <br> 2) Acesse a página [Administrar Demandas](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/administrar-demandas/administrar-demandas.html)<br> 3) Clique no ícone de Gerenciar Demanda, edite a demanda e clica no botão `Editar` <br> 4) Confirme um alerta com a mensagem `Demanda editada com sucesso!` na sua tela
**Requisitos associados** | RF-008
**Resultado esperado** | Demanda com dados alterados salva.
**Dados de entrada** | E-mail, senha. Informações editadas na demanda.
**Resultado obtido** | Sucesso.

|     **Caso de Teste**     | **CT10 - Visualização de Solicitações por Voluntários**                                                                                                                                                                                                                                                                                                                |
|:-------------------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Navegar até a [página de demandas](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/pagina-de-demandas/pagina-de-demandas.html) <br> 2) Observe que as demandas carregam automaticamente <br> 3) Clique no ícone de filtro <br> 4) Selecione uma opção <br> 5) Perceba que as demandas são recarregadas de acordo com a opção selecionada |
| **Requisitos associados** | RF-009                                                                                                                                                                                                                                                                                                                                                                 |
|  **Resultado esperado**   | Demandas são listadas na tela de acordo com o valor do filtro                                                                                                                                                                                                                                                                                                          |
|   **Dados de entrada**    | Opção selecionada do filtro.                                                                                                                                                                                                                                                                                                                                            |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                                                                                                                                                                                |

**Caso de Teste** | **CT11 - Voluntariar-se em Projetos Específicos**
 :--------------: | ------------
**Procedimento**  | 1) Acessar a página [candidatar a demanda](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/candidatar-a-demanda/candidatar-a-demanda.html?id=2) <br> 2) Insere dados válidos <br> 3) Clique no botão `Enviar` <br>
**Requisitos associados** | RF-010
**Resultado esperado** | O usuário se candidata à demanda escolhida.
**Dados de entrada** | Inserção de dados válidos no formulário de candidatura.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT12 - Marcar Solicitações como Concluídas ou Encerradas**
 :--------------: | ------------
**Procedimento**  | 1) Faça [login](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/login/login.html) <br> 2) Acesse a página [Administrar Demandas](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/administrar-demandas/administrar-demandas.html)<br> 3) Clique no ícone de Gerenciar Demanda e clica no botão `Finalizar Demanda` <br> 4) Confirme um alerta com a mensagem `Demanda finalizada com sucesso!` na sua tela
**Requisitos associados** | RF-011
**Resultado esperado** | Demanda com status de finalizada
**Dados de entrada** | E-mail, senha.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT13 - Página "Como Começar"**
 :--------------: | ------------
**Procedimento**  |  1) Acessar [página Como Começar](https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/EcG84oXGA2VNnPTVaXHQHZkBZArrmZzW7t3rukBfIAykTA?e=bmM92g) <br> 2) Validar que as informações são carregadas corretamente <br> 
**Requisitos associados** | RF-012
**Resultado esperado** | Página carregada com imagens e textos.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT14 - Página Inicial (Landing Page)**
 :--------------: | ------------
**Procedimento**  | 1) O usuário deve acessar o site e visualizar a [landing page](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/) <br> 2) Navegar pela landing page <br>
**Requisitos associados** | RF-013
**Resultado esperado** | Páginal inicial da aplicação contendo diversas informações relevantes sobre o site.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

|     **Caso de Teste**     | **CT15 - Página "Perguntas Frequentes"**                                                                                                                                                                                                                                       |
|:-------------------------:|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Acessar a [página de perguntas frequentes](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/perguntas-frequentes/perguntas-frequentes.html) <br> 2) Clicar nas setas ao lado das perguntas <br> 3) Validar que a resposta das perguntas é exibida |
| **Requisitos associados** | RF-014                                                                                                                                                                                                                                                                         |
|  **Resultado esperado**   | Página carregada e texto exibido.                                                                                                                                                                                                                                               |
|   **Dados de entrada**    | Nenhum                                                                                                                                                                                                                                                                         |
|   **Resultado obtido**    | Sucesso                                                                                                                                                                                                                                                                        |

**Caso de Teste** | **CT16 - Página "Sobre o Voluntariado"**
 :--------------: | ------------
**Procedimento**  | 1)  Acessar a [página sobre o voluntariado](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/sobre-o-voluntariado/sobre-o-voluntariado.html)<br> 2) Verificar se texto e imagem são exibidos <br>
**Requisitos associados** | RF-015
**Resultado esperado** | Visualizar a página "Sobre o Voluntariado" com texto e imagem carregados.
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT17 - Página "Por Que Ser Voluntário?"**
 :--------------: | ------------
**Procedimento**  | 1) Acessar [página por que ser voluntário?](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/por-que-ser-voluntario/por-que-ser-voluntario.html) <br> 2) acessa as informações da página
**Requisitos associados** | RF-016
**Resultado esperado** | Acessa a página com texto e imagens carregados.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT18 - Página "Histórias de Sucesso"**
 :--------------: | ------------
**Procedimento**  | 1)  Acessar a [página histórias de sucesso](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/historias-sucesso/historias-sucesso.html) <br> 2) Verifica se texto e imagem são exibidos <br>
**Requisitos associados** | RF-017
**Resultado esperado** | Visualizar a página "Histórias de Sucesso" com texto e imagem carregados.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT19 - Filtro de Demandas por Critérios**
 :--------------: | ------------
**Procedimento**  | 1) Acessar a [página de demandas](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/pagina-de-demandas/pagina-de-demandas.html) <br> 2) Selecionar as opções de filtros desejadas <br>
**Requisitos associados** | RF-018
**Resultado esperado** | Página carregada de acordo com os filtros selecionados.
**Dados de entrada** | Selecionar filtro desejado.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT20 - E-mail de Notificação para Voluntários**
 :--------------: | ------------
**Procedimento**  | 1) Faça [login](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/login/login.html) <br> 2) Acesse a página [Administrar Demandas](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/administrar-demandas/administrar-demandas.html)<br> 3) Clique no ícone de Gerenciar Demanda e visualize os canditados que estão interessados no voluntariado <br> 4) Clique no ícone verde para aceitar a candidatura do voluntário e ele receberá um e-mail com a confirmação
**Requisitos associados** | RF-019
**Resultado esperado** | E-mail com a confirmação da ONG.
**Dados de entrada** | E-mail, senha.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT21 - Lista de Voluntários Aceitos na Demanda**
 :--------------: | ------------
**Procedimento**  | Faça [login](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/login/login.html) <br> 2) Acesse a página [Administrar Demandas](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/administrar-demandas/administrar-demandas.html)<br> 3) Clique no ícone de Gerenciar Demanda e visualize os canditados que estão interessados no voluntariado
**Requisitos associados** | RF-020
**Resultado esperado** | Lista de voluntários interessados.
**Dados de entrada** | E-mail, senha.
**Resultado obtido** | Sucesso. 

**Caso de Teste** | **CT22 - Envio de Link para Comentários por E-mail**
 :--------------: | ------------
**Procedimento**  | Faça [login](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/login/login.html) <br> 2) Acesse a página [Administrar Demandas](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/administrar-demandas/administrar-demandas.html)<br> 3) Clique no ícone de Gerenciar Demanda e visualize os canditados que estão interessados no voluntariado <br> 4) Clique no botão `Finalizar Demanda` <br> 5) Visualize os canditados que deseja pedir o feedback e clique no ícone de chat
**Requisitos associados** | RF-021
**Resultado esperado** | Candaidato receber por e-mail o link para deixar o feedback na página da ONG.
**Dados de entrada** | E-mail, senha.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT23 - Página para Depoimentos de Voluntários**
 :--------------: | ------------
**Procedimento**  | 1) Faça [login](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/login/login.html) <br> 2) Acesse a página [Administrar Demandas](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/administrar-demandas/administrar-demandas.html)<br> 3) Clique no ícone de Gerenciar Demanda e visualize os canditados que estão interessados no voluntariado <br> 4) Clique no botão `Finalizar Demanda` <br> 5) Visualize os canditados que deseja pedir o feedback e clique no ícone de chat <br> 6) No e-mail irá receber um link que redirecionará para a página em que deverá escrever o feedback
**Requisitos associados** | RF-022
**Resultado esperado** | Receber o link no e-mail que redirecionará para página de depoimento.
**Dados de entrada** | E-mail, senha. Texto com o feedback sobre a ONG.
**Resultado obtido** | Sucesso.

|     **Caso de Teste**     | **CT24 - Disponibilização de Depoimentos no Perfil da ONG**                                                                                                                                                                                                                                                                                |
|:-------------------------:|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Acessar [página da ONG](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/pagina-da-ong/pagina-da-ong.html?id=1) <br> 2) Validar que os depoimentos são carregados corretamente <br> 3) Alterar `id=1` para `id=2` ao final da URL <br> 4) Validar que os depoimentos de outra ONG são carregados corretamente |
| **Requisitos associados** | RF-023                                                                                                                                                                                                                                                                                                                                     |
|  **Resultado esperado**   | Depoimentos enviados por voluntários exibidos corretamente                                                                                                                                                                                                                                                                                 |
|   **Dados de entrada**    | Nenhum                                                                                                                                                                                                                                                                                                                                     |
|   **Resultado obtido**    | Sucesso                                                                                                                                                                                                                                                                                                                                    |

**Caso de Teste** | **CT25 - Responsividade**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa [a aplicação](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/index.html) por meio de um dispositivo móvel, como um smartphone ou tablet <br> 2) O usuário navega pelas diferentes funcionalidades da aplicação utilizando o dispositivo móvel <br>
**Requisitos associados** | RNF-001
**Resultado esperado** | A aplicação é responsiva e se adapta adequadamente ao tamanho da tela em dispositivos móveis, mantendo todas as funcionalidades acessíveis e funcionais.
**Dados de entrada** | Acesso à aplicação por meio de um dispositivo móvel.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT26 - Interface simples**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa [a aplicação](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/index.html) <br> 2) De acordo com as heurísticas de Nielsen foram implementadas interfaces simples e de fácil reconhecimento pelo usuário <br>
**Requisitos associados** | RNF-002
**Resultado esperado** | Interface simples e de fácil entendimento.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

|     **Caso de Teste**     | **CT27 - Criptografia de senha**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:-------------------------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Acessar [página de cadastro](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/pages/login/login.html) <br> 2) Inserir os dados nos campos apresentados <br> 3) Clicar no botão `Próximo`  <br> 4) Selecione uma imagem para ser utilizada como no perfil da ONG (opcional) # <br> 5) Forneça um texto sobre sua ONG <br> 6) Informe o link do perfil da sua ONG nas redes sociais (opcional) <br> 7) Clique no botão `Cadastrar` <br> 8) Confirme um alerta com a mensagem `Cadastro realizado com sucesso!` na sua tela <br> 9) Verifique no banco de dados que a senha foi salva criptografada |
| **Requisitos associados** | RNF-003                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  **Resultado esperado**   | Senha criptografada salva no banco de dados                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|   **Dados de entrada**    | Dados para cadastro de ONG                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

**Caso de Teste** | **CT28 - Feedback visual**
 :--------------: | ------------
**Procedimento**  | 1) Em diversas páginas da [aplicação](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-conecta/index.html) existe uma mensagem de alerta ao usuário 
**Requisitos associados** | RNF-004
**Resultado esperado** | Mensagem de alerta com confirmações e mensagens de erro
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.


**Caso de Teste** | **CT29 - Compatibilidade com Navegadores**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação por meio dos navegadores Google Chrome, Mozilla Firefox, Microsoft Edge e Safari. <br> 2) O usuário navega pelas diferentes funcionalidades da aplicação em cada um dos navegadores. <br> 3) O usuário verifica se o layout da aplicação é intuitivo e de fácil entendimento em cada um dos navegadores.
**Requisitos associados** | RNF-005
**Resultado esperado** | A aplicação é compatível e funciona corretamente nos navegadores Google Chrome, Mozilla Firefox, Microsoft Edge e Safari.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software


| *Caso de Teste*                   | *CT01 - Cadastrar ONG parte 1*                                                                                                |
|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-001 - A aplicação deve permitir que as ONGs se cadastrem.                                                                  |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/1495429_sga_pucminas_br/EWjk2M7SOPFGhRe9AFkYyCABteRyOOtqhHQOyGaLlmS3ig | 

| *Caso de Teste*                   | *CT02 - Cadastrar ONG parte 2*                                                                                                |
|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-001 - A aplicação deve permitir que as ONGs se cadastrem.                                                                  |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/1495429_sga_pucminas_br/ETPyJhDTKtFGlsXYk-JS4U8BSvYlmz7U4DVQNa7jkLX9YA | 

| *Caso de Teste*                   | *CT03 - Autenticação de ONG (login)*                                                                                                |
|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-002 - A aplicação deve fornecer um sistema de autenticação seguro, permitindo que as ONGs acessem suas contas por meio de um processo de login.                                                                  |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/EQmUCiXris9Cq9zIlRgYxwkBuKGsHFgimdIaIOR4Yun1mw?e=bPQ8rt&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D | 

| *Caso de Teste*                   | *CT04 - Recuperação de Senha*                                                                                                                           |
|-----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-003 - A aplicação deve oferecer um processo de recuperação de senha, permitindo que usuários redefinam suas senhas em caso de esquecimento ou perda. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/1495429_sga_pucminas_br/EaIh9-neGLxHmacLjqbBF_IBAASxVuGPyTV1nd5sQoJlWw                           |

| *Caso de Teste*                   | *CT05 - Página da ONG*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-004 - A aplicação deve apresentar uma página exclusiva para cada ONG, contendo informações sobre a organização, depoimentos dos voluntários e últimas demandas. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/1495429_sga_pucminas_br/EQdVteszIbVBiSNzW09vTJcBByLxuz7jDdicpDkUfSL4pg                                      |

| *Caso de Teste*                   | *CT06 - Gerenciamento de Perfil da ONG*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-005 - A aplicação deve permitir que as ONGs gerenciem suas informações de perfil (alterar, excluir e consultar os dados) a qualquer momento. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/ETjhLAJlLOJAk0pQOehs50gBE9UT8ckY_HdkH7cs2jIRnw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=5ZKaQu                                   |

| *Caso de Teste*                   | *CT07 - Solicitações de Ajuda pelas ONGs*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-006 - A aplicação deve possibilitar que as ONGs divulguem solicitações de ajuda técnica, descrevendo os projetos ou desafios específicos que precisam ser abordados. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/EUWb3WmRlktIubxvHVnPi2cBCow6uCi1_kKkBvB7DDJlqA?e=idN2Xu&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D                                   |

| *Caso de Teste*                   | *CT08 - Administrar Demandas*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-007 - A aplicação deve permitir que as ONG vejam e administrem suas demandas, podendo filtrar por status (aberta, finalizada), cadastrar ou excluir. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/EeC-rLWbvjVBqqQCahtsG_EBNshRmH3OmiBQXXWjs3CGdA?e=qA6HqD                                   |

| *Caso de Teste*                   | *CT09 - Edição de Demandas pelas ONGs*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-008 - As ONGs devem poder editar suas demandas (alterar, excluir e editar os dados) a qualquer momento. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/ETRsKBxBi1RNupmc4UFOohEBG9Nf01Y1LQeWEgp6avQgKA?e=oMLEwZ&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D                                   |

| *Caso de Teste*                   | *CT10 - Visualização de Solicitações por Voluntários*                                                                                  |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-009 - A aplicação deve permitir que os voluntários visualizem as solicitações de ajuda técnica feitas pelas ONGs.                   |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/1495429_sga_pucminas_br/EQNgsGco83RDq0shdoI6BGYBA0kVVNbTrLcp_VOlT92o_Q?e=3St7br |

| *Caso de Teste*                   | *CT11 - Voluntariar-se em Projetos Específicos*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-010 - Os voluntários devem poder se voluntariar por meio de formulário de contato para trabalhar em projetos específicos das ONGs, indicando seu interesse e disponibilidade. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/1484182_sga_pucminas_br/ETIqspcljU5DufN1eSFVvvoBAHWSUY6oc659SuVNaajQwA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=TdOx94                              |

| *Caso de Teste*                   | *CT12 - Marcar Solicitações como Concluídas ou Encerradas*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-011 - A aplicação deve permitir que as ONGs marquem as solicitações como concluídas ou encerradas. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/EQ20l_7QPOpHpeY-eHf0L-IB8rTtxmpwZn1EZB7XiTEhog?e=xacf0e&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D                                   |

| *Caso de Teste*                   | *CT13 - Página "Como Começar"*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-012 - A aplicação deve apresentar a página “Como Começar” que orienta os visitantes sobre os passos necessários para se tornarem voluntários registrados na aplicação. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/EcG84oXGA2VNnPTVaXHQHZkBZArrmZzW7t3rukBfIAykTA?e=bmM92g                                   |

| *Caso de Teste*                   | *CT14 - Página Inicial (Landing Page)*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-013 - Deve existir uma página inicial (landing page) informativa que apresenta o propósito da plataforma e incentiva tanto as ONGs quanto os voluntários a utilizar a aplicação. |
| Link do vídeo do teste realizado: |https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/EZjvZghuoPxFg_UrBrsA_SoBJf27dddKeMgGc5fY5tE5AQ?e=j4cBwt                                   |

| *Caso de Teste*                   | *CT15 - Página "Perguntas Frequentes"*                                                                                                                               |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-014 - A aplicação deve conter a página “Perguntas Frequentes” que aborda as dúvidas mais comuns dos visitantes em relação ao voluntariado e ao uso da plataforma. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/1495429_sga_pucminas_br/EToUbUHz80ZJijlp55wDmp4B5dv7tqAwpvK5SNnfMaVfDQ?e=dWPv04                               |

| *Caso de Teste*                   | *CT16 - Página "Sobre o Voluntariado"*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-015 - A aplicação deve apresentar a página “Sobre o Voluntariado” que fornece informações detalhadas sobre o conceito de trabalho voluntário, destacando seu impacto positivo na sociedade e nas comunidades. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/EVorhCzAhtFMkyV2SYWY25QBD79JhwYVEws4H8xuQC8y6w?e=gKQ8oT                                   |

| *Caso de Teste*                   |*CT17 - Página "Por Que Ser Voluntário?"*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-016 A aplicação deve apresentar a página “Por Que Ser Voluntário?” que apresenta os benefícios pessoais que podem ser obtidos ao se envolver em ações voluntárias. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/1484182_sga_pucminas_br/EUWZm9w979hMj3zO2buQEu0B7BE-Z_taNmsPD5HUw8L4UA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=hcPCGi                                   |

| *Caso de Teste*                   | *CT18 - Página "Histórias de Sucesso"*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-017 A aplicação deve apresentar a página “Histórias de Sucesso” que destaca projetos anteriores realizados por meio da plataforma, com resultados, depoimentos de voluntários e o impacto positivo alcançado. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/ESFLHyIh6OtAiM_auQisuD8B2Bb2desQSpKByEz_Yks2cw?e=LUM0he                                   |

| *Caso de Teste*                   | *CT19 - Filtro de Demandas por Critérios*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-018 A aplicação deve fornecer um mecanismo de filtro para que os usuários possam encontrar demandas com base em critérios como: remoto, presencial e estado do Brasil. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/EXEnKKwVcFJNsKhEIUylSOIBy-_PyEEVFTfueydkqQBBag?e=gNIxNP                                   |

| *Caso de Teste*                   | *CT20 - E-mail de Notificação para Voluntários*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-019 - Os voluntários devem receber um e-mail quando uma ONG expressa interesse em seu perfil. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/EWdgaIjr4TRAn6xupKj_Yx0ByxActuTGJs-rSK7jx-Akww?e=Yt4YhK&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D                                   |

| *Caso de Teste*                   | *CT21 - Lista de Voluntários Aceitos na Demanda*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-020 A página da demanda cadastrada pela ONG deve exibir uma lista de todos os voluntários que tiveram a candidatura aceita. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/EfqFJxHrkYVOs_u9hczZqYwBrT3nBGPFLditEtCpDVvWKg?e=fJrOmI&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D                                   |

| *Caso de Teste*                   | *CT22 - Envio de Link para Comentários por E-mail*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-021 Na página da demanda cadastrada pela ONG, deve ter um botão com a finalidade de enviar um link via e-mail aos voluntários solicitando a eles que deixem um comentário sobre sua experiência. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/Ecl0FwI1BBtAvyGqb1v8nwUBpCf8qrZZls3c5seJNtPQow?e=ACr5lA&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D                                   |

| *Caso de Teste*                   | *CT23 - Página para Depoimentos de Voluntários*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-022 - A aplicação deve apresentar uma página para depoimento da solicitação que o voluntário participou, que só poderá ser acessada através do link recebido via e-mail, com um formulário para preenchimento. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/Ecl0FwI1BBtAvyGqb1v8nwUBpCf8qrZZls3c5seJNtPQow?e=ACr5lA&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D                                   |

| *Caso de Teste*                   | *CT24 - Disponibilização de Depoimentos no Perfil da ONG*                                                |
|-----------------------------------|----------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RF-023 Os depoimentos dos voluntários devem ser disponibilizados no perfil da ONG que fez a solicitação. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/personal/1495429_sga_pucminas_br/_layouts/15/stream.aspx?id=%2Fpersonal%2F1495429%5Fsga%5Fpucminas%5Fbr%2FDocuments%2Fpagina%2Dda%2Dong%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview                                                                                   |

| *Caso de Teste*                   | *CT25 Responsividade*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RNF-001 A aplicação deve oferecer uma interface com design responsivo que se adapte aos dispositivos móveis e desktops. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/ERQck7q5eQdLpnwC7aXcoLEBQwBD-NIZvqNeqO-IT0UkDg?e=aXvqJt                                  |

| *Caso de Teste*                   | *CT26 - Interface simples*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RNF-002 A aplicação deve apresentar um layout simples e de fácil utilização. |
| Link do documento do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:b:/g/personal/954530_sga_pucminas_br/EeXOOBWkW45OtuVZZcW9yhcBmLHYvtzI9aoSnEL6L8IfkQ?e=fxLJRW                                   |

| *Caso de Teste*                   | *CT27 - Criptografia de senha*                                                                                                |
|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RNF-003 As senhas dos usuários devem ser criptografadas antes de serem armazenadas.                                           |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/1495429_sga_pucminas_br/EWpPPFFZqpdAknnEfdKDBY0BQaStf1vyLK8UtivnaQsJxQ |

| *Caso de Teste*                   | *CT28 - Feedback visual*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RNF-004 A aplicação deve fornecer feedback visual claro para ações do usuário, como confirmações de envio e mensagens de erro. |
| Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/EXBl1MNdXuRBnNQuHRhUUTMBT2pA08oz4A0noySo_v8U0g?e=yy4vun&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D                                   |

| *Caso de Teste*                   | *CT29 - Compatibilidade com Navegadores*                                                                                                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisito Associado               | RNF-005 O sistema deve ser capaz de ser executado nas versões mais recentes dos principais navegadores do mercado, como: Chrome, Firefox, Edge e Safari. |
| Link do vídeo do teste realizado: | Google Chrome (https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/EY-z6ZowptVGsfrGlXmflekBmXeqN6eKZYgyVgsJYr6ZqQ?e=GxYJJJ)<br>  Mozilla Firefox (https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/EcaH_zL7IBpIkR8U_nHOMvsBa-8Amb47AqPtMluHAWEgxg?e=aYd0rw)  <br> Microsoft Edge (https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/EVJmyWSHHE5JimkdWgo3YwEBfVJ948MpBwClxtqcV9g88w?e=eNDJzH)  <br> Safari (https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/954530_sga_pucminas_br/ETJOh6A52lxEsoUVuqWKiBQBhTVA0SoR21PxkkcClgv7XA?e=D4KOjo)                         | 



## Avaliação dos Testes de Software

Ao realizar os testes de software, obtivemos resultados relevantes que oferecem informações valiosas sobre a aplicação em análise. Essas avaliações foram direcionadas para analisar a qualidade, funcionalidade e confiabilidade do software, identificando tanto seus pontos positivos quanto áreas que podem ser aprimoradas.

Os testes evidenciaram consistência nos resultados segundo às expectativas, sinalizando que a solução está em conformidade com os requisitos estabelecidos. A cobertura dos principais cenários de uso da aplicação foi abrangente, assegurando uma avaliação das funcionalidades críticas. A equipe de testes demonstrou profissionalismo e competência na execução dos casos de teste, reforçando a confiabilidade dos resultados. 

Alguns pontos a serem aprimorados foram: a página de demandas demora para carregar, poderia deixar mais claro que as informações nos cards estão dentro dos modais, as informações sobre o voluntário devem ser exibidas nos cards.
Já os pontos que foram considerados positivos são principalmente em relação ao design escolhido, à organização do site, a escolha de cores e à disposição das informações.

Para as próximas etapas pretendemos deixar o projeto mais fluído e com mais opções que facilitem a navegabilidade do usuário.

Em síntese, pode-se dizer que a avaliação de testes de software desempenha um papel fundamental na garantia da qualidade e eficiência de um projeto. Considerando que vários integrantes da equipe participaram dos testes, pode-se dizer que a confiabilidade do projeto é bastante considerável.
​
# Testes de Usabilidade
O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário - ONGs |
|---------------|----------------------|
| 1             | Você é um estudante ou profissional da área da tecnologia e quer participar de um trabalho voluntário. No site acesse a página de oportunidades, encontre um trabalho que seja de seu interesse e se candidate.   |
| 2             | Você administra uma ONG e quer cadastrar sua organização em um site que divulga oportunidades de voluntariado. Você acessa o site entra na página como começar, clica no link cadastre sua ONG, preenche as informações de perfil e finaliza a candidatura.  |
| 3             | Você tem sua ONG cadastrada no site e quer divulgar as oportunidades de voluntariado. Você então acessa o site, clica em área da ONG, realiza o login e cadastra duas demandas.  |
| 4             | Você administra uma ONG e vai acessar o site para visualizar se algum candidato está interessado em uma demanda que você cadastrou. Você precisa fazer o login, acessar a página de administrar demandas e verificar se tem algum candidato interessado, se sim, poderá aceitar ou recusar sua candidatura. |
|


## Registro de Testes de Usabilidade

Cenário 1 - Você é um estudante ou profissional da área da tecnologia e quer participar de um trabalho voluntário. No site acesse a página de oportunidades, encontre um trabalho que seja de seu interesse e se candidate.

| Usuário                                    | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|--------------------------------------------|-----------------|----------------------|---------------------------------|
| 1                                | SIM         |  4           | 127 segundos                      |
| 2                               | SIM             | 4               | 57 segundos                     |
|                                            |                 |                      |                                 |
| **Média**                                  | 100%              | 4                    | 92 segundos                      |
| **Tempo para conclusão pelo especialista** | SIM         |  5           | 95 segundos                      |

```
Comentários dos usuários: 

Ícone de carregamento da página de demandas fica muito tempo na tela.
A descrição da demanda poderia aparecer na tela de candidatura.
Bem fácil identificar botão que leva até a página de demandas.
Não percebeu que é possível clicar nos cards para que seja aberto o modal.
Layout simples e intuitivo.
Fácil acesso à página com as oportunidades de voluntariado.
```

Cenário 2 - Você administra uma ONG e quer cadastrar sua organização em um site que divulga oportunidades de voluntariado. Você acessa o site entra na página como começar, clica no link cadastre sua ONG, preenche as informações de perfil e finaliza a candidatura. 

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|----------------|----------------------|---------------------------------|
| 1      | SIM            |  4               | 150 segundos                    |
| 2    | SIM           |   5           | 212 segundos                      |
|  |  |                      |                                 |
| **Média**     | 100%          | 4.5                    | 181 segundos                      |
| **Tempo para conclusão pelo especialista** | SIM |  5               | 90 segundos                     |


    Elementos visuais simples e objetivos, com poucas informações na tela, ajuda a não se perder.
    Não foi intuitivo onde fazer o cadastro, pois não estava claro que era um botão de cadastro.
    A parte de colocar o CEP e ter o endereço puxado foi muito bom.
    Achei intuitivo a aplicação, mesmo demorando um pouco consegui fazer o que queria.

Cenário 3 - Você tem sua ONG cadastrada no site e quer divulgar as oportunidades de voluntariado. Você então acessa o site, clica em área da ONG, realiza o login e cadastra duas demandas.  

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|----------------|------------------|---------------------------------|
| 1     | SIM            |  5                | 120 segundos                    |
| 2     | SIM           |   4            | 130 segundos                      |
|  |  |  |                                 |
| **Média**     | 1000%          | 4.5            | 125 segundos                      |
| **Tempo para conclusão pelo especialista** | SIM |  5 | 80 segundos                     |


    Muito simples cadastrar uma demanda e isso é muito bom.
    Se eu tiver uma demanda que é presencial somente 1 ou 2 vezes por semana, como cadastrar?
    Se eu quiser colocar mais detalhes, mas não quero digitar tudo, pois tenho um arquivo com os detalhes, poderia ter uma local para anexar o arquivo na demanda.
    Poderia ter mais opções para especificar a necessidade durante o cadastro da demanda.

Cenário 4 - Você administra uma ONG e vai acessar o site para visualizar se algum candidato está interessado em uma demanda que você cadastrou. Você precisa fazer o login, acessar a página de administrar demandas e verificar se tem algum candidato interessado, se sim, poderá aceitar ou recusar sua candidatura.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|----------------|----------------------|---------------------------------|
| 1       | SIM            |  4               | 90 segundos                      |
| 2      | SIM           |  5           | 78 segundos                      |
|  |  |                      |                                 |
| **Média**     | 100%          | 4.5                    | 84 segundos                      |
| **Tempo para conclusão pelo especialista** | SIM |  5               | 30 segundos                     |


    Onde vemos os candidatos, poderia estar mais fácil de encontrar.
    Aceitar ou recusar candidatos é muito fácil e isto é ótimo, mas eles também poderiam ter uma forma de enviar o currículo deles em anexo.
    Achei que poderia ter mais detalhes sobre os voluntários.
    

## Avaliação dos Testes de Usabilidade

Com base nos resultados obtidos, constatou-se que a aplicação web teve um bom desempenho em termos de taxa de sucesso na interação do usuário, pois os cenários propostos foram concluídos com sucesso.

Além disso, o aplicativo também alcançou um alto nível de satisfação subjetiva do usuário ao realizar os cenários propostos. Prova disso são as notas médias em cada um dos cenários, que ficaram entre 4 (bom) e 5 (excelente).

Sobre o tempo levado para a realização dos cenários propostos notou-se uma diferença entre os usuários e o especialista, o que é aceitável, visto que o especialista está acostumado com a aplicação, enquanto que para o usuário, tendo o primeiro contato com o site, tende a explorar mais as informações.

Os pontos a serem melhorados segundo os usuários são em relação ao tempo de carregamento da página de oportunidades, sobre a dificuldade de encontrar informações sobre a demanda e sobre os voluntários, já que não está claro que é preciso abrir um modal para visualização e sobre a possibilidade de anexar um arquivo com as informações e as mesmas serem registradas nos campos de descrição do voluntariado.

Em relação aos pontos positivos, os usuários relataram a boa intuitividade e navegabilidade do site, design simples e layout agradável, fácil acesso às páginas de maior relevância para a aplicação, etc.

Em conclusão, pode-se dizer que a avaliação de teste de usuário não apenas valida a funcionalidade, mas também orienta o refinamento contínuo da aplicação, buscando tornar mais intuitivo e eficiente, adaptados às necessidades reais dos usuários.



