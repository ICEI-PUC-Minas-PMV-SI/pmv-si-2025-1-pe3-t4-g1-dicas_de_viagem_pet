# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

****************

## 3.1 Objetivos deste documento
O objetivo principal do projeto é desenvolver uma plataforma web que centralize informações essenciais para tutores que planejam viajar com seus animais de estimação, com foco em regras, cuidados e destinos pet-friendly em Minas Gerais. A plataforma visa esclarecer dúvidas frequentes, como as normas para transporte de pets em diferentes modais (aéreo, rodoviário e particular) e os cuidados necessários para garantir o bem-estar dos animais durante a viagem. Além disso, busca catalogar e promover locais que aceitam pets, como hoteis, pousadas, Airbnbs, restaurantes e pontos turísticos no estado.

Os objetivos específicos incluem:
 - Identificar e organizar informações sobre as regulamentações de viagem com pets em companhias aéreas, ônibus e veículos particulares, oferecendo aos usuários uma referência clara e confiável;

- Listar e detalhar opções de hospedagem em Minas Gerais que sejam receptivas a animais de estimação, ajudando os tutores a encontrar acomodações adequadas;
Catalogar serviços e pontos turísticos pet-friendly em cidades mineiras, permitindo que os usuários planejem roteiros completos e seguros para si e seus companheiros.

- Esses objetivos refletem a intenção de criar uma ferramenta que não apenas informe, mas também inspire confiança e facilite a tomada de decisão dos tutores, promovendo experiências de viagem mais agradáveis e inclusivas.


## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto, intitulado "Dicas de Viagem com Pets", é uma plataforma colaborativa que se diferencia de sites estáticos existentes por permitir interação entre os usuários. Seu escopo abrange a criação de um site dinâmico onde os tutores podem compartilhar suas experiências, publicar avaliações, enviar fotos e dialogar tanto com outros viajantes quanto com proprietários de estabelecimentos pet-friendly. O foco geográfico inicial é o estado de Minas Gerais, abrangendo hospedagens, serviços e atrações turísticas que aceitem animais de estimação.
Os principais componentes da plataforma incluem:
Um banco de dados com informações sobre destinos e serviços pet-friendly, constantemente atualizado por contribuições dos usuários;
Funcionalidades de interação, como comentários, reviews e sugestões, que proporcionam feedbacks confiáveis sobre os locais listados;
Ferramentas de navegação que auxiliem na montagem de roteiros personalizados, baseados nas necessidades dos tutores e de seus pets.

O sistema não se limita a listar locais, mas busca criar uma comunidade ativa, onde os usuários possam colaborar para aprimorar a qualidade das informações e dos serviços oferecidos pelos estabelecimentos. Limitações do projeto incluem a ausência de funcionalidades como reservas diretas ou transações financeiras, que estão fora do escopo inicial, focado em informação e interação.


### 3.2.2 Missão do produto
Disponibilizar para as pessoas interessadas, informações sobre viagens com animais de estimação, opções de passeio e hospedagens que aceitam o acompanhamento dos Pets.

### 3.2.3 Limites do produto
O sistema em si não fornece os serviços supracitados, e não se responsabiliza pela disponibilidade e tão pouco pela qualidade dos serviços ofertados, sendo somente uma ambiente de consulta das informações cadastradas pelos representantes dos locais, e de comentários postados por outros usuários.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Informações relevantes sobre o assunto |	Essencial |
|2 | Possibilidade de ver comentários de outros usuários | Essencial | 
|3 | Possibilidade de interagir com outros tutores de Pets | Essencial | 
|4	| Facilidade de comunição com representantes dos estabelecimentos	| Recomendável | 
|5	| Possibilidade de realizar críticas aos serviços consumidos	| Recomendável | 
|6	| Facilidade em encontrar informações relevantes sobre viagens e hospedagens	| Recomendável | 

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| RF1 | Gerenciar regras de viagem de aviões com pet |	Processamento de inclusão, alteração e exclusão de informações de regras de viagem de avião com pet |
| RF2 | Consultar regras de viagem de aviões com pet	| Página com informações de regras de viagem de avião com pet |
| RF3	| Gerenciar regras de viagem de ônibus com pet |	Processamento de inclusão, alteração e exclusão de informações de regras de viagem de ônibus com pet |
| RF4 |	Consultar regras de viagem de ônibus com pet	| Página com informações de regras de viagem de ônibus com pet |
| RF5 |	Gerenciar regras de viagem de carro com pet	| Processamento de inclusão, alteração e exclusão de informações de regras de viagem de carro com pet |
| RF6 |	Consultar regras de viagem de carro com pet	| Página com informações de regras de viagem de carro com pet |
| RF7 |	Gerenciar hospedagens pet-friendly	| Processamento de inclusão, alteração e exclusão de informações de hospedagens pet-friendly |
| RF8 |	Consultar hospedagens pet-friendly	|Página com informações de hospedagens pet-friendly |
| RF9 |	Gerenciar estabelecimentos comerciais pet-friendly	| Processamento de inclusão, alteração e exclusão de informações de estabelecimentos comerciais pet-friendly |
| RF10 |	Consultar estabelecimentos comerciais pet-friendly	| Página com informações de estabelecimentos comerciais pet-friendly |
| RF11 |	Gerenciar locais públicos pet-friendly	| Processamento de inclusão, alteração e exclusão de informações de locais públicos pet-friendly |
| RF12 | Consultar locais públicos pet-friendly	| Página com informações de locais públicos pet-friendly |
| RF13 |	Gerenciar comentários sobre estabelecimentos e hospedagens	| Página em que o usuário poderá inserir, alterar, excluir e consultar depoimentos/feedback sobre hospedagens e estabelecimentos pet-friendly |
| RF14 |	Pesquisar hospedagens pet-friendly	| Funcionalidade que permita pesquisar hospedagens pet-friendly |
| RF15 |	Pesquisar estabelecimentos comerciais pet-friendly	| Funcionalidade que permita pesquisar estabelecimentos comerciais privados pet-friendly |
| RF16 |	Pesquisar locais públicos pet-friendly	| Funcionalidade que permita pesquisar locais públicos pet-friendly |
| RF17 |	Gerenciar estabelecimentos	| Processamento de inclusão, alteração, consulta e exclusão de informações de estabelecimentos para serem avaliadas e adicionadas à lista de hospedagens e locais pet friendly |
| RF18 |	Gerenciar usuário	| Processamento de inclusão, alteração, consulta e exclusão de informações de usuário |
| RF19 |	Coletar dados de usuário	| Coletar dados de preferências do usuário para recomendação de locais pet-friendly para visitar |
| RF20 |	Interagir com depoimentos	| Criar funcionalidade para curtir e comentar os depoimentos |
| RF21 |	Aprovar/reprovar cadastro de estabelecimentos	| Realizar a aprovação dos estabelecimentos comerciais cadastrados antes da exibição para os usuários |
| RF22 |	Ranquear os estabelecimentos	| O sistema deve permitir que os usuários classifiquem os estabelecimentos de 0 a 5 estrelas, a classificação será usada para gerar rankings de estabelecimentos com base na média das classificações |
| RF23 |	Divulgar empresas parceiras	| Página com informações de empresas parceiras de acordo com as preferências coletadas dos usuários e suas necessidades |
| RF24 |	Logar e deslogar do sistema	| Permitir que os usuários façam login e logout no sistema |

### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) | Descrição |
|--------------------|---------------------------|----------------------------|
| RNF1 | Ambiente | Interface responsiva adaptável a qualquer interface utilizada - Browser, Smartphone ou Tablet|
| RNF2 | Ambiente | Disponibilidade de adaptação da interface pró-acessibilidade |
| RNF3 |	Segurança | O produto deve restringir o acesso por meio de senhas individuais para o usuário. |
| RNF4 |	Ambiente | A página deverá ter disponibilidade em 90% do tempo |
| RNF5 |	Ambiente | Deve processar requisições do usuário em no máximo 3s|


### 3.3.3 Usuários 

O projeto identifica dois públicos-alvo principais, cada um com necessidades específicas que a plataforma pretende atender:
Primeiro Público-Alvo: Tutores de Pets


Perfil: Indivíduos entre 20 e 60 anos, residentes predominantemente na região Sudeste do Brasil, que possuem animais de estimação e desejam viajar com eles para destinos turísticos em Minas Gerais.
Necessidades: Esses usuários buscam informações confiáveis sobre regras de transporte, cuidados durante a viagem e locais pet-friendly. Eles valorizam a possibilidade de planejar roteiros com base em experiências reais de outros tutores e esperam encontrar destinos que acolham bem seus pets, considerados membros da família.


Segundo Público-Alvo: Proprietários de Estabelecimentos


Perfil: Donos de hotéis, pousadas, bares, restaurantes e outros negócios em Minas Gerais que aceitam animais de estimação e têm interesse em divulgar seus serviços.
Necessidades: Esses usuários desejam aumentar a visibilidade de seus estabelecimentos e atrair clientes que viajam com pets. A plataforma oferece a eles a oportunidade de receber feedbacks diretos dos tutores, permitindo ajustes e melhorias em seus serviços com base nas sugestões recebidas.


A interação entre esses dois grupos é um dos pilares do sistema, que busca conectar tutores a estabelecimentos de forma colaborativa, criando uma rede de apoio para o turismo pet-friendly. A plataforma será projetada para atender às expectativas de ambos os públicos, garantindo uma experiência intuitiva e útil.


| Ator | Descrição |
|--------------------|------------------------------------|
| Tutor de Pet |	Usuário principal do sistema que busca informações sobre viagens com animais de estimação. Pode consultar regras de viagem, pesquisar locais pet-friendly, compartilhar experiências e avaliar estabelecimentos. |
| Representante de estabelecimento |	Usuário que deseja divulgar seu estabelecimento pet-friendly (hotel, pousada, restaurante, etc.) na plataforma. Pode cadastrar e atualizar informações sobre seu negócio. |
| Administrador |	Usuário responsável pela manutenção do sistema, aprovação de cadastros de estabelecimentos e moderação de conteúdo. Possui acesso geral ao sistema. |
| Visitante |	Usuário não autenticado que pode visualizar informações públicas sobre regras de viagem e estabelecimentos pet-friendly, mas não pode adicionar conteúdo ou interagir com a comunidade. |


## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
3.4.1 Diagrama de Casos de Uso
Como observado no diagrama de casos de uso da Figura 1, o usuário poderá pesquisar locais, gerenciar seu perfil, avaliar estabelecimentos e interagir com os depoimentos. Já o proprietário, além dessas funcionalidades, poderá também gerenciar o seu estabelecimento. O administrador, por sua vez, é responsável por gerenciar o cadastro dos estabelecimentos no sistema.


#### Figura 1: Diagrama de Casos de Uso do Sistema.

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe3-t4-g1-dicas_de_viagem_pet/blob/main/docs/casos%20de%20uso.png)
 
### 3.4.2 Descrições de Casos de Uso

Cada caso de uso deve ter a sua descrição representada nesta seção. Exemplo:

3.4.2 Descrições de Casos de Uso

Cada caso de uso deve ter a sua descrição representada nesta seção. Exemplo:

Pesquisar Locais (CSU01)
Sumário:
 O usuário pode realizar pesquisas por locais pet-friendly, incluindo hospedagens, estabelecimentos comerciais e locais públicos.
Ator Primário:
 Usuário
Pré-condições:
O Usuário deve estar autenticado no sistema.


Fluxo Principal:
O Usuário acessa a funcionalidade “Pesquisar Locais”.


O Sistema exibe as categorias disponíveis (hospedagens, estabelecimentos comerciais e locais públicos pet-friendly).


O Usuário seleciona uma categoria e, se desejar, aplica filtros de pesquisa (ex.: localização, tipo, avaliação).


O Sistema processa a solicitação e apresenta uma lista de locais que correspondem aos critérios.


O Usuário pode selecionar um local para ver detalhes adicionais ou refinar a pesquisa.


Fluxo Alternativo – Pesquisa Geral:
Caso o Usuário não selecione uma categoria específica, o Sistema realiza uma busca abrangente em todas as categorias e apresenta os resultados de forma unificada.


Fluxo Alternativo – Nenhum Resultado:
Se nenhum local corresponder aos critérios informados, o Sistema exibe uma mensagem informando a ausência de resultados e sugere ajustar os filtros.


Pós-condições:
Uma lista de locais pet-friendly é exibida, permitindo ao Usuário visualizar detalhes ou realizar nova pesquisa.




Gerenciar Perfil (CSU02)
Sumário:
 O Usuário gerencia seus dados pessoais, podendo alterar informações, atualizar foto, modificar senha e definir preferências de uso.
Ator Primário:
 Usuário
Ator Secundário:
 —
Pré-condições:
O Usuário deve estar autenticado no sistema.


Fluxo Principal:
O Usuário acessa a seção “Gerenciar Perfil”.


O Sistema apresenta os dados cadastrais e as configurações atuais.


O Usuário seleciona a opção de editar e altera as informações desejadas (por exemplo, nome, foto, e-mail, senha).


O Sistema valida as alterações e, se todos os dados forem válidos, atualiza o cadastro.


O Usuário recebe uma confirmação de que os dados foram atualizados com sucesso.


Fluxo Alternativo – Alteração de Senha:
O Usuário opta por alterar a senha.


O Sistema solicita a senha atual e a nova senha.


Após validação, a senha é alterada e o Usuário é notificado.


Pós-condições:
O perfil do Usuário é atualizado com as novas informações ou configurações.


Avaliar Estabelecimento (CSU03)
Sumário:
 O Usuário pode avaliar os estabelecimentos pet-friendly, atribuindo notas e inserindo comentários para ajudar outros usuários a conhecer melhor as experiências.
Ator Primário:
 Usuário
Ator Secundário:
 —
Pré-condições:
O Usuário deve estar autenticado no sistema.


O Usuário já teve alguma experiência com o estabelecimento (ou possui informações relevantes).


Fluxo Principal:
O Usuário acessa a página de detalhes de um estabelecimento.


O Sistema disponibiliza o formulário ou interface para avaliação.


O Usuário insere uma nota (por exemplo, de 1 a 5 estrelas) e um comentário opcional.


O Sistema valida os dados e cadastra a avaliação.


O estabelecimento tem sua média de avaliações atualizada e o comentário fica visível para outros usuários.


Fluxo Alternativo – Dados Incompletos ou Inválidos:
Se o Usuário não preencher os campos obrigatórios ou inserir dados inválidos, o Sistema exibe mensagens de erro solicitando a correção antes de submeter a avaliação.


Pós-condições:
A avaliação do estabelecimento é registrada e reflete na nota média exibida a todos os usuários.


Interagir com os Depoimentos (CSU04)
Sumário:
 O Usuário pode interagir com os depoimentos relacionados aos estabelecimentos, lendo, respondendo ou reagindo (curtir, comentar) em cada depoimento.
Ator Primário:
 Usuário
Ator Secundário:
 Outros usuários (indiretamente, ao visualizar interações)
Pré-condições:
O Usuário deve estar autenticado no sistema.


Fluxo Principal:
O Usuário acessa a área de depoimentos de um estabelecimento.


O Sistema exibe uma lista de depoimentos já cadastrados.


O Usuário seleciona um depoimento para visualizar em detalhe e tem a opção de:


Curtir o depoimento.


Comentar ou responder a ele.


Ao inserir sua interação, o Sistema valida e registra a ação, atualizando a contagem de curtidas ou adicionando o comentário.


A interação é exibida em tempo real no detalhe do depoimento.


Fluxo Alternativo – Moderação de Conteúdo:
Se o comentário contiver palavras inadequadas ou ultrapassar limites definidos, o Sistema pode rejeitar a postagem e exibir uma mensagem solicitando a revisão do conteúdo.


Pós-condições:
A interação do Usuário com o depoimento é armazenada e atualizada na lista, contribuindo para a dinâmica do sistema.


Gerenciar Estabelecimento (CSU05) – (Para Proprietário)
Sumário:
 O Proprietário pode gerenciar os dados e informações do seu próprio estabelecimento, incluindo atualizações, inclusão ou remoção de informações, visando manter os dados sempre atualizados e atraentes para os usuários.
Ator Primário:
 Proprietário
Ator Secundário:
 Usuário (como visualizador dos dados atualizados)
Pré-condições:
O Proprietário deve estar autenticado no sistema.


O estabelecimento já deve estar cadastrado previamente.


Fluxo Principal:
O Proprietário acessa a seção “Gerenciar Estabelecimento”.


O Sistema apresenta os dados atuais do estabelecimento (nome, endereço, horário de funcionamento, fotos, serviços, etc.).


O Proprietário seleciona a opção de editar os dados.


O Sistema exibe um formulário pré-preenchido com as informações atuais.


O Proprietário altera os dados conforme necessário e confirma a operação.


O Sistema valida as alterações e, se estiverem corretas, atualiza os dados cadastrais do estabelecimento.


O Proprietário recebe uma confirmação de que as informações foram atualizadas com sucesso.


Fluxo Alternativo – Remoção do Estabelecimento:
Caso o Proprietário opte por remover o estabelecimento do sistema, o Sistema solicita confirmação.


Após confirmação, o cadastro do estabelecimento é removido e o Proprietário recebe uma notificação.


Pós-condições:
Os dados do estabelecimento são atualizados (ou removidos) conforme a ação realizada pelo Proprietário.


Gerenciar Cadastro de Estabelecimentos (CSU06) – (Para Administrador)
Sumário:
 O Administrador gerencia o cadastro dos estabelecimentos no sistema, exercendo operações de inclusão, alteração, remoção e consulta, garantindo a integridade e a qualidade das informações exibidas aos usuários e proprietários.
Ator Primário:
 Administrador

Pré-condições:
O Administrador deve estar autenticado no sistema com permissões administrativas adequadas.


Fluxo Principal:
O Administrador acessa o módulo “Gerenciar Cadastro de Estabelecimentos”.


O Sistema apresenta as operações disponíveis: inclusão, alteração, remoção e consulta dos cadastros.


O Administrador seleciona a operação desejada.


Inclusão:


O Sistema solicita os dados do novo estabelecimento (nome, endereço, contatos, serviços oferecidos, etc.).


O Administrador insere as informações e o Sistema valida os dados, evitando duplicatas.


Se os dados estiverem corretos, o novo estabelecimento é cadastrado.


Alteração:


O Administrador seleciona um estabelecimento existente e edita os dados conforme necessário.


Após validação, o Sistema atualiza os dados cadastrais.


Remoção:


O Administrador seleciona um estabelecimento e solicita a remoção.


O Sistema confirma a ação e, se permitido, remove o cadastro.


Consulta:


O Administrador pode pesquisar estabelecimentos por filtros (nome, localização, status de verificação, etc.) e visualizar detalhes.


Cada operação realizada resulta em uma atualização imediata do cadastro.


Fluxo Alternativo – Dados Inválidos ou Duplicidade:
Se durante a inclusão ou alteração os dados estiverem incompletos ou já existirem no sistema, o Sistema exibe mensagens de erro e solicita as correções necessárias.


Pós-condições:
O cadastro de estabelecimentos é atualizado conforme a operação realizada, garantindo a precisão e a integridade das informações no sistema.





### 3.4.3 Diagrama de Classes 

O diagrama de classes apresentado a seguir representa a estrutura estática do sistema “Dicas de Viagem com Pets”, destacando os principais elementos que compõem o software, bem como os relacionamentos entre eles. As classes foram definidas com base nos requisitos funcionais e nos perfis de usuários identificados, contemplando ações como cadastro, consulta, avaliação e interação com estabelecimentos pet-friendly.

#### Figura 2: Diagrama de Classes do Sistema.
 
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe3-t4-g1-dicas_de_viagem_pet/blob/f449ef82218afb9eddc231c0f22ddba45eeae863/docs/Classe%20UML.png)


### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	usuário |	Classe base que representa os dados gerais dos usuários da plataforma. |
| 2	| TutorDePet |	Usuário que busca informações sobre viagens com pets e interage com a comunidade. |
| 3 |	representanteEstabelecimento |	Usuário responsável por cadastrar e gerenciar estabelecimentos pet-friendly. |
| 4 |	Administrador | Responsável pela moderação do sistema e aprovação dos cadastros realizados. |
| 5	|	visitante |	Classe de usuários visitantes não cadastrados no sistema |
| 6 |	estabelecimento |	Classe abstrata com dados gerais dos estabelecimentos, como hoteis, pousadas, restaurantes e afins que aceitam animais de estimação. |
| 7 |	espaçoPúblico |	classe com atributos específicos de espaços públicos |
| 8 |	hospedagem |	Classe com atributos específicos de hospedagens |
| 9 |	estabelecimentoComercial |	Classe com atributos específicos de estabelecimentos comerciais. |
| 10 |	Avaliacao |	Classificações atribuídas por usuários aos estabelecimentos (0 a 5 estrelas). |

