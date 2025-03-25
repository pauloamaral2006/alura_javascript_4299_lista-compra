let contador = 0;

const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault();

  if (inputItem.value === "") {
    alert("Por favor, inisira um item!");
    return;
  }

  const itemDaLista = document.createElement("li");
  const containerItemDaLista = document.createElement("div");
  containerItemDaLista.classList.add("lista-item-container");
  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = "checkbox-" + contador++;
  const nomeItem = document.createElement("p");
  nomeItem.innerText = inputItem.value;

  inputCheckbox.addEventListener("click", () => {
    if (inputCheckbox.checked) {
      nomeItem.style.textDecoration = "line-through";
    } else {
      nomeItem.style.textDecoration = "none";
    }
  });
  containerItemDaLista.appendChild(inputCheckbox);
  containerItemDaLista.appendChild(nomeItem);

  const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
  });
  const data = new Date().toLocaleDateString("pt-BR");
  const hora = new Date().toLocaleTimeString("pt-BR", {
    hour: "numeric",
    minute: "numeric",
  });
  const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;
  const itemData = document.createElement("p");
  itemData.innerText = dataCompleta;
  itemDaLista.appendChild(containerItemDaLista);
  itemDaLista.appendChild(itemData);
  listaDeCompras.appendChild(itemDaLista);
});
