let dados = [];
let grafico = null;

function mostrarToast(msg, tipo = "sucesso") {
  const toast = document.getElementById("toast");
  toast.innerText = msg;
  toast.style.background = tipo === "erro" ? "#ef4444" : "#22c55e";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

async function carregarDados() {
  try {
    const res = await fetch("http://localhost:3000/vendas");
    if (!res.ok) throw new Error("Erro na requisição");
    dados = await res.json();
    preencherFiltro();
    aplicarFiltro();
  } catch (err) {
    console.error(err);
    mostrarToast("Erro ao conectar com o servidor", "erro");
  }
}

function preencherFiltro() {
  const categorias = [...new Set(dados.map(v => v.categoria))];
  const select = document.getElementById("filtroCategoria");
  select.innerHTML = '<option value="todas">📌 Todas</option>';
  categorias.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });
}

function aplicarFiltro() {
  const categoria = document.getElementById("filtroCategoria").value;
  const filtrados = categoria === "todas" ? dados : dados.filter(d => d.categoria === categoria);
  atualizarDashboard(filtrados);
  atualizarTabela(filtrados);
}

function atualizarDashboard(lista) {
  const total = lista.reduce((s, v) => s + v.valor, 0);
  document.getElementById("total").innerHTML = `R$ ${total.toFixed(2)}`;
  const grupos = {};
  lista.forEach(item => { grupos[item.categoria] = (grupos[item.categoria] || 0) + item.valor; });
  const labels = Object.keys(grupos);
  const valores = Object.values(grupos);
  const ctx = document.getElementById("grafico").getContext("2d");
  if (grafico) grafico.destroy();
  if (lista.length === 0) {
    grafico = new Chart(ctx, { type: "bar", data: { labels: [], datasets: [] } });
    return;
  }
  grafico = new Chart(ctx, {
    type: "bar",
    data: { labels, datasets: [{ label: "Vendas (R$)", data: valores, backgroundColor: "#38bdf8" }] }
  });
}

function atualizarTabela(lista) {
  const tbody = document.getElementById("tabela");
  tbody.innerHTML = "";
  if (lista.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4">Nenhuma venda encontrada</td></tr>`;
    return;
  }
  lista.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>R$ ${item.valor.toFixed(2)}</td>
      <td>${item.categoria}</td>
      <td>${new Date(item.data).toLocaleDateString()}</td>
      <td>
        <button class="btn-edit" data-id="${item.id}">✏️</button>
        <button class="btn-delete" data-id="${item.id}">🗑️</button>
       </td>
    `;
    tbody.appendChild(tr);
  });

  document.querySelectorAll(".btn-edit").forEach(btn => {
    btn.addEventListener("click", async () => {
      const id = parseInt(btn.getAttribute("data-id"));
      const item = dados.find(v => v.id === id);
      if (!item) return;
      const novoValor = prompt("Novo valor:", item.valor);
      if (!novoValor) return;
      const novaCategoria = prompt("Nova categoria:", item.categoria);
      if (!novaCategoria) return;
      try {
        const res = await fetch(`http://localhost:3000/vendas/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ valor: Number(novoValor), categoria: novaCategoria.toUpperCase() })
        });
        if (!res.ok) throw new Error();
        mostrarToast("Atualizado!");
        carregarDados();
      } catch {
        mostrarToast("Erro ao editar", "erro");
      }
    });
  });

  document.querySelectorAll(".btn-delete").forEach(btn => {
    btn.addEventListener("click", async () => {
      const id = parseInt(btn.getAttribute("data-id"));
      if (!confirm("Excluir esta venda?")) return;
      try {
        const res = await fetch(`http://localhost:3000/vendas/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error();
        mostrarToast("Excluído!");
        carregarDados();
      } catch {
        mostrarToast("Erro ao excluir", "erro");
      }
    });
  });
}

// Adicionar
document.getElementById("btnAdicionar").addEventListener("click", async () => {
  const valor = document.getElementById("novoValor").value.trim();
  const categoria = document.getElementById("novaCategoria").value.trim();
  if (!valor || !categoria) return mostrarToast("Preencha os campos", "erro");
  try {
    const res = await fetch("http://localhost:3000/vendas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ valor: Number(valor), categoria: categoria.toUpperCase() })
    });
    if (!res.ok) throw new Error();
    document.getElementById("novoValor").value = "";
    document.getElementById("novaCategoria").value = "";
    mostrarToast("Adicionada!");
    carregarDados();
  } catch {
    mostrarToast("Erro ao adicionar", "erro");
  }
});

// Zerar todos
document.getElementById("btnReset").addEventListener("click", async () => {
  if (!confirm("Apagar TODAS as vendas?")) return;
  try {
    const res = await fetch("http://localhost:3000/vendas", { method: "DELETE" });
    if (!res.ok) throw new Error();
    mostrarToast("Todos os dados foram apagados!");
    carregarDados();
  } catch {
    mostrarToast("Erro ao limpar dados", "erro");
  }
});

document.getElementById("filtroCategoria").addEventListener("change", aplicarFiltro);
carregarDados();