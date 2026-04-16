const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const DB_FILE = "./db.json";

function lerDados() {
  try {
    if (!fs.existsSync(DB_FILE)) return [];
    const data = fs.readFileSync(DB_FILE, "utf8");
    if (!data.trim()) return [];
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function salvarDados(dados) {
  fs.writeFileSync(DB_FILE, JSON.stringify(dados, null, 2));
}

app.get("/vendas", (req, res) => {
  res.json(lerDados());
});

app.post("/vendas", (req, res) => {
  const dados = lerDados();
  const { valor, categoria } = req.body;
  if (!valor || !categoria) {
    return res.status(400).json({ erro: "Valor e categoria obrigatórios" });
  }
  const novoId = dados.length > 0 ? Math.max(...dados.map(v => v.id)) + 1 : 1;
  const novaVenda = {
    id: novoId,
    valor: Number(valor),
    categoria: categoria.trim().toUpperCase(),
    data: new Date().toISOString()
  };
  dados.push(novaVenda);
  salvarDados(dados);
  res.status(201).json(novaVenda);
});

app.put("/vendas/:id", (req, res) => {
  const dados = lerDados();
  const id = parseInt(req.params.id);
  const index = dados.findIndex(v => v.id === id);
  if (index === -1) return res.status(404).json({ erro: "Venda não encontrada" });
  const { valor, categoria } = req.body;
  if (valor !== undefined) dados[index].valor = Number(valor);
  if (categoria !== undefined) dados[index].categoria = categoria.trim().toUpperCase();
  salvarDados(dados);
  res.json(dados[index]);
});

app.delete("/vendas", (req, res) => {
  salvarDados([]);
  res.json({ mensagem: "Todos os dados foram apagados" });
});

app.delete("/vendas/:id", (req, res) => {
  let dados = lerDados();
  const id = parseInt(req.params.id);
  const novos = dados.filter(v => v.id !== id);
  if (novos.length === dados.length) {
    return res.status(404).json({ erro: "ID não encontrado" });
  }
  salvarDados(novos);
  res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});