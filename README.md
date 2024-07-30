# Descrição
Este projeto é uma aplicação React simples para gerenciar uma lista de plantas que precisam ser cuidadas. Ele permite adicionar, editar e deletar plantas da lista.

## Estrutura do Projeto
O projeto é composto pelos seguintes arquivos principais:

**App.js:** Componente principal que gerencia o estado da aplicação e renderiza os componentes PlantList e PlantForm.

**Listaplanta.jsx:** Componente que exibe a lista de plantas.

**Planta.jsx:** Componente que contém o formulário para adicionar ou editar plantas.

## Componentes

## App.js
-Importa os componentes PlantList e PlantForm.
-Usa o hook useState para gerenciar o estado das plantas.

### Funções:
handleAddOrEditPlant: Adiciona uma nova planta ou edita uma planta existente.
handleEditPlant: Configura a planta que será editada.
handleDeletePlant: Remove uma planta da lista.

## Listaplanta.jsx
-Recebe as plantas e as funções de edição e deleção como props.
-Renderiza a lista de plantas e botões para editar e deletar cada planta.

## Planta.jsx
-Contém um formulário para adicionar ou editar uma planta.
-Recebe a planta a ser editada e a função de envio do formulário como props.
-Usa o hook useState para gerenciar o estado do formulário.

### Instruções de instalação e uso

## Pré-requisitos
-Node.js instalado na máquina.

-npm instalado.

## Instalação
-Clone o repositório para sua máquina local

-Navegue até o diretório do projeto

-Instale as dependências do projeto

## Uso
Inicie o servidor de desenvolvimento
