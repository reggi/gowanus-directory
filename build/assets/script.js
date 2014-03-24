google.maps.event.addDomListener(window, 'load', function() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(40.6765430, -73.9929580)
  };
  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(40.6765430, -73.9929580),
    map: map,
  });
});