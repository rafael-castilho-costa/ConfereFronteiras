# 🏙️ ConfereFronteiras
ConfereFronteira é uma ferramenta em JavaScript que compara uma lista personalizada de municípios de fronteira com os dados oficiais do IBGE, validando a sintaxe dos nomes. Ideal para garantir consistência em cadastros, sistemas geográficos e análises territoriais.

Este script compara uma lista local de municípios de fronteira com os nomes oficiais fornecidos pela API do IBGE, identificando possíveis divergências de grafia ou acentuação. Ele é útil para garantir padronização de dados e compatibilidade com sistemas que utilizam a nomenclatura oficial do IBGE.

# 📦 Requisitos
Node.js versão 18 ou superior

Conexão com a internet (para consumir a API do IBGE)

# ⚙️ Setup e Execução
1. Clone o repositório
  git clone https://github.com/rafael-castilho-costa/ConfereFronteiras.git
  cd ConfereFronteiras
2. Instale as dependências
  npm install
obs: Este Projeto utiliza apenas o axios como dependência externa.
3. Edite a lista de cidades
  - Edite o arquivo minha_lista_fronteira.json com a sua lista de cidades de fronteira.
4. Execute o Script
  node compararCidades.js

# 📋 Saída esperada
* Se todos os nomes estiverem corretos:
    ✅ Todas as cidades estão com sintaxe compatível com o IBGE.

* Se houver divergências:
    ⚠️ Cidades com nome/sintaxe divergente:
        - uruguaina (exemplo)
        - tabatinga (exemplo)


# 🛠 Tecnologias
- Node.js
- Axios
- API de Localidades do IBGE

# ✍️ Autor
Rafael Castilho da Costa

[LinkedIn](https://www.linkedin.com/in/rafael-castilho-182781186/)
