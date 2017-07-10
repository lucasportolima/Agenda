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
             '<td> <button id="paciente' + document.getElementById("pacientes").children.length + '" class="botao bto-principal" onclick="alert("zxasd");">Excluir</button> </td> </tr>'

  var novo = antigo + novo;
  document.getElementById('pacientes').innerHTML = novo;

}

 
$(document).ready(function()
{
    for (var i = 0; i <= document.getElementById("pacientes").children.length; i++) {    
      $('paciente' + i).click(function() {
          var aux = $('paciente' + i);
          aux.remove();
      });
    }
});  