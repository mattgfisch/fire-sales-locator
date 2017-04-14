$(document).ready(function() {
  $('#address-container').on('submit', '#address-form', function(e){
    e.preventDefault();
    var formData = $(this).serialize();
    var formMethod = $(this).attr('method');
    var formAction = $(this).attr('action');
    var locationRequest = $.ajax({
      url: formAction,
      type: formMethod,
      data: formData
    });
    locationRequest.done(function(response){
      console.log(response);
      var coordinates = codeAddress(response);
      console.log(coordinates);
      $('#address_results').html(coordinates);
    });
  })
});
