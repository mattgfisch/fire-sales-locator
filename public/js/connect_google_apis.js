function start() {
  var request = $.ajax({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCxoh9Y7M0wo8wGVAefSO51cqZMDm8xFNc",
    type: 'get'
  });
  request.done(function(response){
    console.log(response);
  });

  // // 2. Initialize the JavaScript client library.
  // gapi.client.init({
  //   'apiKey': 'AIzaSyCxoh9Y7M0wo8wGVAefSO51cqZMDm8xFNc',
  //   // clientId and scope are optional if auth is not required.
  //   // 'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
  //   // 'scope': 'profile',
  // }).then(function() {
  //   // 3. Initialize and make the API request.
  //   return gapi.client.request({
  //     'path': 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCxoh9Y7M0wo8wGVAefSO51cqZMDm8xFNc',
  //   })
  // }).then(function(response) {
  //   console.log(response.result);
  // }, function(reason) {
  //   console.log('Error: ' + reason.result.error.message);
  // });
};
// // 1. Load the JavaScript client library.
// gapi.load('client', start);
