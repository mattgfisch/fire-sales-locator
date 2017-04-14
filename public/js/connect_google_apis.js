var geocoder;
var map;

function initialize(){
  geocoder = new google.maps.Geocoder();
}

function codeAddress(){
  var address = "13247 Sandalwood Court, Lake Oswego, OR 97035";
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
      console.log("It worked!");
      console.log('Location is:' + results[0].geometry.location);
      // var marker = new google.maps.Marker({
      //     map: map,
      //     position: results[0].geometry.location
      // });
    } else {
      console.log("Didn't work :(");
      alert('Geocode was not successful for the following reason: ' + status);
    };
  });
};

initialize();
codeAddress();
