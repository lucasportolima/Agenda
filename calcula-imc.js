/*

  Autor: Lucas Porto

*/

function view(aux) {

  // Resgatar valores.
  view.prototype.resgatarValores = function(){
    $('#resultado').html('Carregando dados...');

    $.getJSON('Data.json', function(data){

      for (var i = 0; i < data.pacientes.length; i++){

        var id = data.pacientes[i].id;
        var nome = data.pacientes[i].nome;
        var peso = data.pacientes[i].peso;
        var altura = data.pacientes[i].altura;
        var imc = peso / (altura * altura);

        var antigo = document.getElementById('pacientes').innerHTML;

        var novo = '<tr id="paciente' + document.getElementById("pacientes").children.length + '">' +
        '<td id="info-id">' + id + '</td>' +
        '<td id="info-nome">' + nome + '</td>' +
        '<td id="info-peso">' + peso + '</td>' +
        '<td id="info-altura">' + altura + '</td>' +
        '<td id="info-imc">' + imc + '</td>' +
        '<td> <button id="paciente' + document.getElementById("pacientes").children.length + '" class="botao bto-principal" onclick="excluir(paciente' + document.getElementById("pacientes").children.length + ');">Excluir</button> </td>' +
        '<td> <button id="paciente' + document.getElementById("pacientes").children.length + '" class="botao bto-principal" onclick="editar(paciente' + document.getElementById("pacientes").children.length + ');">Editar</button> </td> </tr>'

        var novo = antigo + novo;
        document.getElementById('pacientes').innerHTML = novo;

      }
    });
  }
}

var obj = new view();
obj.resgatarValores();


// FORMS validadores
$(document).change(function () {
  var id = document.getElementById("pacientes").children.length;
  var nome = document.getElementById("campo-nome").value;
  var peso = document.getElementById("campo-peso").value;
  var altura = document.getElementById("campo-altura").value;

  if (nome == "" || peso == "" || altura == "") {
    if (nome == ""){
      $('#campo-nome').css("border-color", "red");
    }else{
      $('#campo-nome').css("border-color", "transparent");
    }if (peso == ""){
      $('#campo-peso').css("border-color", "red");
    }else{
      $('#campo-peso').css("border-color", "transparent");
    }if (altura == ""){
      $('#campo-altura').css("border-color", "red");
    }else{
      $('#campo-altura').css("border-color", "transparent");
    }
    $('#adicionar-paciente').hide();
  }else{
    $('#campo-nome').css("border-color", "transparent");
    $('#campo-peso').css("border-color", "transparent");
    $('#campo-altura').css("border-color", "transparent");
    $('#adicionar-paciente').show();
  }

});

//Arrumar o id ao inserir
function inserir() {

  var id = document.getElementById("pacientes").children.length;
  var nome = document.getElementById("campo-nome").value;
  var peso = document.getElementById("campo-peso").value;
  var altura = document.getElementById("campo-altura").value;

  var imc = peso / (altura * altura);

  var antigo = document.getElementById('pacientes').innerHTML;

  var novo = '<tr id="paciente' + document.getElementById("pacientes").children.length + '">' +
  '<td id="info-id">' + id + '</td>' +
  '<td id="info-nome">' + nome + '</td>' +
  '<td id="info-peso">' + peso + '</td>' +
  '<td id="info-altura">' + altura + '</td>' +
  '<td id="info-imc">' + imc + '</td>' +
  '<td> <button id="paciente' + document.getElementById("pacientes").children.length + '" class="botao bto-principal" onclick="excluir(paciente' + document.getElementById("pacientes").children.length + ');">Excluir</button> </td>' +
  '<td> <button id="paciente' + document.getElementById("pacientes").children.length + '" class="botao bto-principal" onclick="editar(paciente' + document.getElementById("pacientes").children.length + ');">Editar</button> </td> </tr>'

  var novo = antigo + novo;
  document.getElementById('pacientes').innerHTML = novo;

}

//Arrumar excluir, faltando excluir os tbody
function excluir(aux) {
  aux.remove();
}

//arrumar id do editar
function editar(aux) {
  var nome = prompt("Digite o nome:");
  if (nome != null) {
    aux.children[1].innerHTML = nome;
  }

  var peso = prompt("Digite o peso:");
  if (peso != null) {
    aux.children[2].innerHTML = peso;
  }else {
    peso = parseFloat(aux.children[2].innerHTML);
  }

  var altura = prompt("Digite o altura:");
  if (altura != null) {
    aux.children[3].innerHTML = altura;
  }else {
    altura = parseFloat(aux.children[3].innerHTML);
  }

  aux.children[4].innerHTML = peso / (altura * altura);

}

// function getPosition(){
//   // Verifica se o browser do usuario tem suporte a geolocation
//   if ( navigator.geolocation ){
//     navigator.geolocation.getCurrentPosition(

//     // sucesso!
//     function( posicao ){
//       alert( posicao.coords.latitude, posicao.coords.longitude );
//     },

//     function ( erro ){
//       var erroDescricao = 'Ops, ';
//       switch( erro.code ) {
//         case erro.PERMISSION_DENIED:
//           erroDescricao += 'usuário não autorizou a Geolocation.';
//         break;
//         case erro.POSITION_UNAVAILABLE:
//           erroDescricao += 'localização indisponível.';
//         break;
//         case erro.TIMEOUT:
//           erroDescricao += 'tempo expirado.';
//         break;
//         case erro.UNKNOWN_ERROR:
//          erroDescricao += 'não sei o que foi, mas deu erro!';
//         break;
//       }
//       alert( erroDescricao );
//     }
//    );
//   }
// }

// $( document ).ready( function(){
//   getPosition();
// } );
