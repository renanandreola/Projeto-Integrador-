function send (event) {

  event.preventDefault();

  var name = $("#name").val();
  var price = $("#price").val();
  var description = $("#description").val();
  var url = $("#url").val();

  if (name == "") {
      toastr["error"]("Insira o nome do pruduto");
      return;
  }

  if (price == "") {
      toastr["error"]("Insira o preço");
      return;
  }

  if (description == "") {
      toastr["error"]("Insira a descrição");
      return;
  }

  if (url == "") {
      toastr["error"]("Insira a url");
      return;
  }

  else {
    var data = {
      name: name,
      price: price,
      description: description,
      url: url

    }
    $.post('/insertproducts', data, function (res) {
           if(res === 'ok') {
             toastr["success"]("Produto cadastrado com sucesso!");
             $('form').trigger('reset');
           } else {
             toastr["error"]("Erro: " + res);
            }
   })
 }











}
