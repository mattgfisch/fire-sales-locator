var map;
var infowindow;

function initMap(userLocation, userQuery, userRadius, userZoom) {
  var center_spot = userLocation;

  map = new google.maps.Map(document.getElementById('results_map'), {
    center: center_spot,
    zoom: userZoom
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: center_spot,
    radius: userRadius,
    keyword: userQuery,
    type: ['store']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
