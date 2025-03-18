//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();
    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        document.getElementById("amigo").value = "";
    } else {
        alert("Nome inválido ou já existe na lista.");
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para o sorteio.");
        return;
    }
    let sorteio = [...amigos];
    sorteio.sort(() => Math.random() - 0.5);
    
    let resultado = {};
    for (let i = 0; i < amigos.length; i++) {
        resultado[amigos[i]] = sorteio[(i + 1) % amigos.length];
    }
    
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    for (let amigo in resultado) {
        let li = document.createElement("li");
        li.textContent = `${amigo} -> ${resultado[amigo]}`;
        listaResultado.appendChild(li);
    }
}
