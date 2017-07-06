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
             '<td> <button id="delPaciente' + document.getElementById("pacientes").children.length + '" class="botao bto-principal" onclick="excluir();">Excluir</button> </td> </tr>'

  var novo = antigo + novo;
  document.getElementById('pacientes').innerHTML = novo;

}

function excluir() {
  alert("funcionando");
}
