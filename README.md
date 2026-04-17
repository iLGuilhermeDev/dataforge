# DataForge – Dashboard de Vendas

Sistema web completo para gestão de vendas, com dashboard interativo, gráficos, filtros e persistência de dados em JSON.  
Desenvolvido com **Node.js + Express** no backend e **HTML/CSS/JS + Chart.js** no frontend.

![Status](https://img.shields.io/badge/status-finalizado-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## Capturas de tela

![Dashboard principal](images/Captura%20de%20tela%202026-04-16%20174518.png)
![Tabela de vendas](images/Captura%20de%20tela%202026-04-16%20174759.png)
![Gráfico agregado](images/Captura%20de%20tela%202026-04-16%20174813.png)
![Filtro por categoria](images/Captura%20de%20tela%202026-04-16%20174841.png)
![Botão zerar dados](images/Captura%20de%20tela%202026-04-16%20174849.png)

---

## Funcionalidades

- ✅ Adicionar vendas (valor + categoria)
- ✅ Listar vendas em tabela responsiva
- ✅ Filtrar por categoria (GPU, CPU, RAM, SSD, etc.)
- ✅ Gráfico de barras agregado por categoria
- ✅ Editar e excluir vendas individualmente
- ✅ Zerar todos os dados com um clique
- ✅ Notificações estilo toast (sucesso/erro)
- ✅ Persistência em arquivo `db.json`
- ✅ Design escuro e responsivo

---

## Tecnologias utilizadas

**Backend**  
- Node.js  
- Express  
- CORS  
- File System (persistência local)

**Frontend**  
- HTML5 / CSS3 (Flexbox, Grid)  
- JavaScript (ES6+)  
- Chart.js (gráficos)  
- Fetch API

---

## Como executar o projeto

### Pré‑requisitos
- Node.js (versão 14 ou superior)
- Navegador atual (Chrome, Edge, Firefox)

### Passos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/iLGuilhermeDev/dataforge.git
   cd dataforge
Instale as dependências do backend

bash
cd backend
npm init -y
npm install express cors
Inicie o servidor

bash
node server.js
Você verá:
✅ Servidor rodando em http://localhost:3000

Abra o frontend
Navegue até a pasta frontend e abra o arquivo admin.html diretamente no navegador (duplo clique).

Não é necessário servidor web extra – o frontend se comunica diretamente com o backend via localhost:3000.

Estrutura do projeto
text
dataforge/
├── backend/
│   ├── server.js          # API Express
│   └── db.json            # Banco de dados (JSON)
├── frontend/
│   ├── admin.html         # Painel principal (completo)
│   ├── admin.js           # Lógica do painel
│   ├── dashboard.html     # Versão simplificada (opcional)
│   ├── dashboard.js       # Lógica simplificada
│   └── style.css          # Estilos globais
├── images/                # Capturas de tela
├── .gitignore
└── README.md
API Endpoints
Método	Rota	Descrição
GET	/vendas	Retorna todas as vendas
POST	/vendas	Adiciona uma nova venda
PUT	/vendas/:id	Edita uma venda existente
DELETE	/vendas	Remove todas as vendas
DELETE	/vendas/:id	Remove uma venda específica
Exemplo de corpo para POST/PUT:

json
{
  "valor": 1250.90,
  "categoria": "GPU"
}
Possíveis melhorias futuras
Autenticação de usuários (login)

Exportação de dados para CSV/Excel

Filtro por período (data inicial e final)

Deploy em nuvem (backend na Render, frontend na Vercel)

Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para detalhes.

Contato
Desenvolvido por Luis Guilherme – GitHub
Sugestões ou problemas? Abra uma issue.

Aproveite o DataForge! ⚡
