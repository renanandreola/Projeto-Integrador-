function send (event) {

  event.preventDefault();
  //var name = document.getElementById("name").value;
  //var email = document.getElementById("email").value;
  //var age = parseInt(document.getElementById("age").value);
  //var phone = parseInt(document.getElementById("phone").value);
  //As expressões acima estão escritas como javascript puro
  //as expressões abaixo estão escritas em jquery
  var name = $("#name").val();
  var email = $("#email").val();
  var msg = $("#msg").val();
  var errors = [];
  var result = $("#result");

  if (name.split(" ").length < 2) {
    toastr["error"]("Preencher nome e sobrenome");
  }
  if (email=="") {
    toastr["error"]("Campo email obrigatório");
  }
  if (msg=="") {
    toastr["error"]("Digite sua mensagem");
  }
  else {
    toastr["success"](name + ", parabéns sua mensagem foi enviada com sucesso!");
    clear();
  }
}

function clear (){
  $("#name").val("");
  $("#email").val("");
  $("#age").val("");
  $("#phone").val("");
  $("#cep").val("");
  $("#state").val("");
  $("#city").val("");
  $("#neighborhood").val("");
  $("#address").val("");
  $("#number").val("");
  $("#complement").val("");
  $("#msg").val("");
}

//$('#cep').keyup(function() {
//var cep = $('#cep').value;
//$.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
  //console.info(dados);
  //console.info(dados.logradouro);
//});
$(document).ready(function() {
 function limpa_formulário_cep() {
     // Limpa valores do formulário de cep.
     $("#address").val("");
     $("#neighborhood").val("");
     $("#city").val("");
     $("#state").val("");
     $("#complement").val("");
 }
})
