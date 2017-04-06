$(document).ready(function() {
  $('#animals').click(function(event) {
    event.preventDefault();
    $.ajax({
      url: '/animals',
      method: 'GET',
    }).done(function(response){
      $('#animals-target').append(response)
    });
  });
});
