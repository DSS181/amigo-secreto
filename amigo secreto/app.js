//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
let amigoSorteado;

//Exibir texto na tela.
function displayScreenText(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//Verifica se algum dado foi inserido.
function InputChecker(val) {
    if (!val) { 
        alert('Por favor, Insira um nome.');       
        return displayScreenText(`h2`, `Digite um nome válido.`); 
     }
    let name = val;
    listaDeAmigos.push(name);
    displayFriendsList();
    clearInputField('amigo');
}

//Limpar input
function clearInputField(entrada) {
    if (!entrada) { return console.log('input vazio.') }
    let name = document.getElementById(entrada);
    name.value = "";
    console.log('input cleared');
    displayScreenText(`h2`, `Digite o nome dos seus amigos`);
}

//Botao para adicionar nome.
function adicionarAmigo() {
    let name = document.getElementById('amigo').value;
    InputChecker(name);
}

/*
function removeSortedFriend(val) {    
    if (listaDeAmigos.length > 0) {         
        listaDeAmigos.splice(val, 1); 
    }
    displayFriendsList();
}*/

//Exibir lista com nomes inseridos.
function displayFriendsList() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
          
    for (let i = 0; i < listaDeAmigos.length; i++) {
        const li = document.createElement("li");
        let x = i;
        x += 1;
        li.innerHTML = `[ `+x+` ] `+listaDeAmigos[i];
        lista.appendChild(li);
      }
}

//Gerar numero inteiro aleatorio.
function getRandomInt(x) {
    return Math.floor(Math.random() * x);
}
  
function sortearAmigo() {
    if (listaDeAmigos < 1) { return alert(`Lista de nomes vazia.`);} 

    amigoSorteado = getRandomInt(listaDeAmigos.length);
    let result = document.getElementById('resultado');

    result.innerHTML = '';
    result.innerHTML = listaDeAmigos[amigoSorteado];
   // removeSortedFriend(amigoSorteado);
}
