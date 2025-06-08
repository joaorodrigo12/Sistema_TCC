# Sistema de Identificação de Tubaroes, Raias, Quimeras 🦈

Um sistema interativo especializado para identificação de tubarões, raias e quimeras através de uma abordagem de questionário guiado. Este sistema de identificação utiliza diversas características morfológicas para ajudar usuários a identificar espécies marinhas.

## Índice

- Visão Geral
- Funcionalidades
- Tecnologias Utilizadas
- Instalação
- Uso
- Estrutura do Projeto
- Endpoints da API
- Banco de Dados
- Créditos

## Visão Geral

O Sistema de Identificação de Tubarões, Raias e Quimeras é uma ferramenta projetada para ajudar pesquisadores do ramo da biologia a identificar diferentes espécies de peixes cartilaginosos (tubarões, raias e quimeras) respondendo a uma série de perguntas sobre as características morfológicas do animal. O sistema utiliza uma abordagem de árvore de decisão para reduzir as possibilidades e sugerir a espécie mais provável.

## Funcionalidades

- **Questionário Interativo**: Sistema de identificação guiada com perguntas adaptativas
- **Banco de Dados de Espécies**: Base de dados abrangente de espécies de peixes cartilaginosos
- **Integração com FishBase**: Links diretos para o FishBase para as principais informações sobre as espécies
- **Visualização Completa do Banco de Dados**: Navegue por todas as espécies no banco de dados
- **Informações Taxonômicas**: Visualize informações taxonômicas das espécies

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Banco de Dados**: MongoDB
- **API Externa**: Integração com FishBase

## Instalação

1. Clone o repositório:
```
git clone https://github.com/joaorodrigo12/Sistema_TCC.git
Abra a pasta TCC com o VSCode (Ou seu editor de código de preferência)
```

2. Instale as dependências:
```
npm install
```
3. Configure a conexão com o banco de dados em [`back-end/db.js`](back-end/db.js) se necessário.

4. Instale a extensão: Live Server(https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

5. Inicie a aplicação:
```
No canto inferior direito, aperte o botão "Go Live"
npm run dev
```

## Uso
1. Escolha "Identificar uma espécie" para iniciar o processo de identificação
2. Responda às perguntas sobre as características do animal
3. Visualize a espécie sugerida com informações taxonômicas
4. Clique no ícone do peixe para ver mais informações no FishBase

Alternativamente, selecione "Base completa" para navegar por todo o banco de dados de espécies.
## Estrutura do Projeto

```
├── assets/                  # Imagens e recursos
├── back-end/                # Código do servidor
│   ├── controller.js        # Manipuladores de requisições
│   ├── db.js                # Conexão com o banco de dados
│   ├── schema.js            # Modelos do banco de dados
│   ├── server.js            # Servidor Express
│   ├── service.js           # Lógica de negócios
│   └── utils.js             # Funções auxiliares
├── front-end/               # Código do cliente
│   ├── paginaBanco/         # Visualização completa do banco de dados
│   └── paginaEspecie/       # Página de resultado da espécie
├── index.html               # Página principal da aplicação
├── package.json             # Dependências do projeto
├── script.js                # Lógica JavaScript principal
└── style.css                # Estilos CSS principais
```

## Endpoints da API

- `GET /quimera` - Identificar espécies de quimeras com base em características
- `GET /tubarao` - Identificar espécies de tubarões com base em características
- `GET /raia` - Identificar espécies de raias com base em características
- `GET /listaAnimais` - Obter todos os animais no banco de dados

## Banco de Dados

O sistema utiliza MongoDB com as seguintes coleções:
- `tbl_quimera` - Espécies de quimeras
- `tbl_tubarao` - Espécies de tubarões
- `tbl_raia` - Espécies de raias
- `tbl_animais` - Todos os animais

## Créditos

- Dados de espécies obtidos do livro:"GUIA PARA IDENTIFICAÇÃO DOS TUBARÕES, RAIAS E QUIMERAS DO ESTADO
RIO DE JANEIRO (Chondrichthyes: Elasmobrachii e Holocephali)".
- [FishBase](https://www.fishbase.se) para características principais sobre espécies
- Ícones do [Font Awesome](https://fontawesome.com)

---

Desenvolvido como projeto de TCC (Trabalho de Conclusão de Curso).
