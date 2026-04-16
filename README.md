# DataForge – Dashboard de Vendas

Sistema web para gerenciamento de vendas com dashboard interativo, filtros, gráficos e persistência local de dados. Desenvolvido como uma ferramenta prática para controle de vendas por categoria.

## Visão geral

O DataForge permite registrar, visualizar e analisar vendas de produtos como GPUs, CPUs, memórias RAM e SSDs. Os dados são armazenados em um arquivo JSON e a interface oferece feedback visual e operações CRUD completas.

## Funcionalidades

- Registro de vendas (valor + categoria)
- Listagem em tabela com opções de edição e exclusão
- Filtro por categoria
- Totalização automática dos valores
- Gráfico de barras agregado por categoria (Chart.js)
- Botão para limpar todos os registros
- Notificações estilo toast para ações do usuário

## Tecnologias

**Backend**  
- Node.js  
- Express  
- CORS  
- File system (persistência em JSON)

**Frontend**  
- HTML5 / CSS3 (layout responsivo)  
- JavaScript (ES6+)  
- Chart.js  
- Fetch API

## Como executar

### Pré-requisitos
- Node.js instalado (versão 14 ou superior)
- Navegador atual (Chrome, Edge, Firefox)

### Passos

1. Clone o repositório e acesse a pasta do projeto:
   ```bash
   git clone https://github.com/iLGuilhermeDev/dataforge.git
   cd dataforge
   ```

2. Instale as dependências do backend:
   ```bash
   cd backend
   npm init -y
   npm install express cors
   ```

3. Inicie o servidor:
   ```bash
   node server.js
   ```
   A mensagem `Servidor rodando em http://localhost:3000` confirmará a execução.

4. Abra o arquivo `frontend/admin.html` diretamente no navegador (duplo clique).  
   > Não é necessário servidor web adicional para o frontend.

## Estrutura do projeto

```
dataforge/
├── backend/
│   ├── server.js          # API e rotas
│   └── db.json            # Base de dados (JSON)
├── frontend/
│   ├── admin.html         # Painel principal
│   ├── admin.js           # Lógica do painel
│   ├── dashboard.html     # Visualização simplificada
│   ├── dashboard.js       # Lógica simplificada
│   └── style.css          # Estilos globais
├── .gitignore
└── README.md
```

## API Endpoints

| Método | Rota               | Descrição                        |
|--------|--------------------|----------------------------------|
| GET    | `/vendas`          | Retorna todas as vendas          |
| POST   | `/vendas`          | Adiciona uma nova venda          |
| PUT    | `/vendas/:id`      | Atualiza uma venda existente     |
| DELETE | `/vendas`          | Remove todos os registros        |
| DELETE | `/vendas/:id`      | Remove uma venda específica      |

Exemplo de corpo para POST/PUT:
```json
{
  "valor": 1250.90,
  "categoria": "GPU"
}
```

## Possíveis melhorias futuras

- Autenticação de usuários
- Exportação de dados para CSV/Excel
- Filtro por período (data inicial e final)
- Deploy em nuvem (backend na Render, frontend na Vercel)

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para detalhes.

## Contato

Desenvolvido por [Luis Guilherme](https://github.com/iLGuilhermeDev).  
Para sugestões ou reportar problemas, utilize as [issues do GitHub](https://github.com/iLGuilhermeDev/dataforge/issues).
```

---
