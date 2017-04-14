var geocoder;


function initialize(){
  geocoder = new google.maps.Geocoder();
}

function codeAddress(givenAddress){
  var address = givenAddress;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
      var location = results[0].geometry.location;
      console.log("You are at :" + location);
      // var marker = new google.maps.Marker({
      //     map: map,
      //     position: results[0].geometry.location
      // });
      console.log(location);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    };
  });
};

initialize();
