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
    errors.push('<div class="alert alert-danger" role="alert">Preencher nome e sobrenome</div>');
  }
  if (email=="") {
    errors.push('<div class="alert alert-danger" role="alert">Campo e-mail obrigatório</div>');
  }
  if (msg=="") {
    errors.push('<div class="alert alert-danger" role="alert">Digite sua mensagem</div>');
  }
  if (errors.length>0) {
    //result.innerHTML = errors.join("</br>"); Imprimir o result javascript puro
    $("#result").html(errors.join("</br>"))
  }
  else {
    //result.innerHTML = (name + ", parabéns! seus dados foram preenchidos com sucesso.");Imprimir o result javascript puro
    $("#result").html('<div class="alert alert-success" role="alert">' + name + ', parabéns sua mensagem foi enviada com sucesso!' + '</div>');
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