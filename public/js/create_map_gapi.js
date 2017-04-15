
var map;
var infowindow;
function initMap(userLocation, userQuery, userRadius, userZoom) {
  var center_spot = userLocation;

  map = new google.maps.Map($('#results_map')[0], {
    center: center_spot,
    zoom: userZoom
  });

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: center_spot,
    radius: userRadius,
    keyword: userQuery,
    type: ['store']
  }, callback);
}
var infowindow = new google.maps.InfoWindow();
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results, i);
    }
  }
}

function createMarker(places, i) {
  // var contentString = "<div class='place-info'> <p>" + place.id +   "</p><p>" + place.formatted_address +   "</p><p>" + place.formatted_phone +   "</p><p>" + place.website +   "</p></div>";
  var placeLoc = places[i].geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: places[i].geometry.location,
    title: places[i].name
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function(){
      infowindow.setContent(places[i].place_id);
      infowindow.open(map, marker);
    }
  })(marker, i));
}
