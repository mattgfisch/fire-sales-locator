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

  $('#get-animal-form').on('click', function(event){
    event.preventDefault();
    $.ajax({
      url: 'animals/new',
      method: 'GET'
    }).done(function(response){
      // console.log(response)
      $('#form-target').append(response)
    });
  });

  $('#form-target').on('submit', 'form', function(event){
    event.preventDefault();
    var data = $(event.target).serialize()
    $.ajax({
      url: '/animals',
      method: 'POST',
      data: data
    }).done(function(response){
      $('#animals').prepend(response)
    });
  });
});
