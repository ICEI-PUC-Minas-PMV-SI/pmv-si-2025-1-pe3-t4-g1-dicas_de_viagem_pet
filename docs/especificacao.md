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

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe3-t4-g1-dicas_de_viagem_pet/blob/6f4c1fdad271c69a52e2d2992de53e4c68bef6c6/docs/diagrama%20de%20casos%20de%20uso.png)
 
### 3.4.2 Descrições de Casos de Uso

Cada caso de uso deve ter a sua descrição representada nesta seção. Exemplo:

Gerenciar Professor (CSU01)
Sumário: A Secretária realiza a gestão (inclusão, remoção, alteração e consulta) dos dados sobre professores.
Ator Primário: Secretária.
Ator Secundário: Coordenador.
Pré-condições: A Secretária deve ser validada pelo Sistema.
Fluxo Principal:
A Secretária requisita manutenção de professores.
O Sistema apresenta as operações que podem ser realizadas: inclusão de um novo professor, alteração de um professor, a exclusão de um professor e a consulta de dados de um professor.
A Secretária seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.
Se a Secretária desejar continuar com a gestão de professores, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.
Fluxo Alternativo (3): Inclusão
A Secretária requisita a inclusão de um professor.
O Sistema apresenta uma janela solicitando o CPF do professor a ser cadastrado.
A Secretária fornece o dado solicitado.
O Sistema verifica se o professor já está cadastrado. Se sim, o Sistema reporta o fato e volta ao início; caso contrário, apresenta um formulário em branco para que os detalhes do professor (Código, Nome, Endereço, CEP, Estado, Cidade, Bairro, Telefone, Identidade, Sexo, Fax, CPF, Data do Cadastro e Observação) sejam incluídos.
A Secretária fornece os detalhes do novo professor.
O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui o novo professor e a grade listando os professores cadastrados é atualizada; caso contrário, o Sistema reporta o fato, solicita novos dados e repete a verificação.

Fluxo Alternativo (3): Remoção
A Secretária seleciona um professor e requisita ao Sistema que o remova.
Se o professor pode ser removido, o Sistema realiza a remoção; caso contrário, o Sistema reporta o fato.

Fluxo Alternativo (3): Alteração
A Secretária altera um ou mais dos detalhes do professor e requisita sua atualização.
O Sistema verifica a validade dos dados e, se eles forem válidos, altera os dados na lista de professores, caso contrário, o erro é reportado.
 
Fluxo Alternativo (3): Consulta
A Secretária opta por pesquisar pelo nome ou código e solicita a consulta sobre a lista de professores.
O Sistema apresenta uma lista professores.
A Secretária seleciona o professor.
O Sistema apresenta os detalhes do professor no formulário de professores.

Pós-condições: Um professor foi inserido ou removido, seus dados foram alterados ou apresentados na tela.



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

