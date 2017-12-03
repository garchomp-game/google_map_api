function init(){　
  var latlng = new google.maps.LatLng(35.70564,139.751891);// 12行目

  var options = {
    zoom: 17,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    overviewMapControl: true,
    overviewMapControlOptions: {
      opened: true
    }
  };

  var map = new google.maps.Map(document.getElementById('maps_canvas'), options);
  new google.maps.Marker({
    position: latlng,
    map: map
  });
};

google.maps.event.addDomListener(window, 'load', init);
