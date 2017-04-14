

$(document).ready(function() {
  initializeCoord();

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
      var parsed = JSON.parse(response);
      codeAddress(parsed.location, function(coordinates){
        initMap(coordinates, parsed.query, parsed.radius, parsed.zoom);
      });
    });
  })
});
