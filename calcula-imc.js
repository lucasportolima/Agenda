// peso / altura * altura

//prompt() é um alert com entrada de dados

// variavel global já é o DOM

function inserir() {
  var nome = document.getElementById("campo-nome").value;
  var peso = document.getElementById("campo-peso").value;
  var altura = document.getElementById("campo-altura").value;
  var imc = peso / (altura * altura);

  document.getElementById('info-nome').textContent = nome;
  document.getElementById('info-peso').textContent = peso;
  document.getElementById('info-altura').textContent = altura;
  document.getElementById('info-imc').textContent = imc;


  // joga tr aqui dentro
  //document.getElementById("pacientes").children[0].children[]
  //Mostra no console do navegador, como se fosse um print

}
