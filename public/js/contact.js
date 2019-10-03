function send (event) {

  event.preventDefault();

  var name = $("#name").val();
  var lastname = $("#lastname").val();
  var email = $("#email").val();
  var msg = $("#msg").val();
  var errors = [];
  var result = $("#result");

  if (name == "") {
    toastr["error"]("Campo nome obrigatório");
    return
  }

  if (lastname == "") {
    toastr["error"]("Campo sobrenome obrigatório");
    return
  }

  if (email == "") {
    toastr["error"]("Campo email obrigatório");
    return
  }

  if (msg == "") {
    toastr["error"]("Digite sua mensagem");
    return
  }

  else {
    toastr["success"]("Mensagem enviada com sucesso!");
    clear();
  }
}

function clear (){
  $("#name").val("");
  $("#lastname").val("");
  $("#email").val("");
  $("#msg").val("");
}
