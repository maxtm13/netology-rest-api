$(document).ready(function () {
  $("form").submit(function (event) {
    var formData = {
      query: $("#ip").val(),
    };
    var url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
    var token = "84f89a3079d277f69fe660ad07d68caaf437dbc9";

    $.ajax({
      type: "GET",
      url: url + formData.query,
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Token " + token)
      },
      data: '',
      dataType: "json",
      encode: true,
    }).done(function (result) {
      console.log(result);
      result.location === null ? $('#result').text('не найдено') : $('#result').text(result.location.value);

    });

    event.preventDefault();
  });
});