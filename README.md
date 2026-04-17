# DataForge – Dashboard de Vendas

Sistema para gestão de vendas com gráficos, filtros e persistência em JSON.

![Status](https://img.shields.io/badge/status-finalizado-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

## Capturas de tela

![Dashboard](images/Captura%20de%20tela%202026-04-16%20174518.png)
![Tabela](images/Captura%20de%20tela%202026-04-16%20174759.png)
![Gráfico](images/Captura%20de%20tela%202026-04-16%20174813.png)
![Filtro](images/Captura%20de%20tela%202026-04-16%20174841.png)
![Zerar](images/Captura%20de%20tela%202026-04-16%20174849.png)

## Funcionalidades

- Adicionar, editar e excluir vendas
- Filtrar por categoria (GPU, CPU, RAM, SSD...)
- Gráfico de barras agregado por categoria
- Botão para zerar todos os dados
- Notificações visuais (toast)

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/iLGuilhermeDev/dataforge.git
   cd dataforge/backend
Instale as dependências:

bash
npm init -y
npm install express cors
Inicie o servidor:

bash
node server.js
Abra o arquivo frontend/admin.html no navegador.

Estrutura do projeto
text
dataforge/
├── backend/
│   ├── server.js
│   └── db.json
├── frontend/
│   ├── admin.html
│   ├── admin.js
│   ├── dashboard.html
│   ├── dashboard.js
│   └── style.css
├── images/
│   ├── Captura de tela 2026-04-16 174518.png
│   ├── Captura de tela 2026-04-16 174759.png
│   ├── Captura de tela 2026-04-16 174813.png
│   ├── Captura de tela 2026-04-16 174841.png
│   └── Captura de tela 2026-04-16 174849.png
├── .gitignore
└── README.md
Tecnologias
Node.js, Express (backend)

HTML, CSS, JavaScript, Chart.js (frontend)

Contato
Desenvolvido por Luis Guilherme
