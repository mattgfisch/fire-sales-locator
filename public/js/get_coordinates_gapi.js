var geocoder;


function initializeCoord(){
  geocoder = new google.maps.Geocoder();
}

function codeAddress(givenAddress, result){
  var address = givenAddress;
  var location;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
      location = results[0].geometry.location;
      result(location);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    };
  });
  return location;
};
