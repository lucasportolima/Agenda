/* 

  Autor: Lucas Porto

*/

function inserir() {
  var nome = document.getElementById("campo-nome").value;
  var peso = document.getElementById("campo-peso").value;
  var altura = document.getElementById("campo-altura").value;
  var imc = peso / (altura * altura);

  var antigo = document.getElementById('pacientes').innerHTML;

  var novo = '<tr id="paciente' + document.getElementById("pacientes").children.length + '">' +
             '<td id="info-nome">' + nome + '</td>' +
             '<td id="info-peso">' + peso + '</td>' +
             '<td id="info-altura">' + altura + '</td>' + 
             '<td id="info-imc">' + imc + '</td>' + 
             '<td> <button id="paciente' + document.getElementById("pacientes").children.length + '" class="botao bto-principal" onclick="excluir(paciente' + document.getElementById("pacientes").children.length + ');">Excluir</button> </td>' + 
             '<td> <button id="paciente' + document.getElementById("pacientes").children.length + '" class="botao bto-principal" onclick="editar(paciente' + document.getElementById("pacientes").children.length + ');">Editar</button> </td> </tr>'

  var novo = antigo + novo;
  document.getElementById('pacientes').innerHTML = novo;

}

function excluir(aux) {
  aux.remove();
}

function editar(aux) {
  var nome = prompt("Digite o nome:");
  var peso = prompt("Digite o peso:");
  var altura = prompt("Digite o altura:");

  aux.children[0].innerHTML = nome;
  aux.children[1].innerHTML = peso;
  aux.children[2].innerHTML = altura;
  aux.children[3].innerHTML = peso / (altura * altura);

}

