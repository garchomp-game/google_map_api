function initMap(){　

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 35.70564, lng: 139.751891},
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    overviewMapControl: true,
    overviewMapControlOptions: {
      opened: true
    }
  });

  map.addListener('click', function(e) {
    getClickLatLng(e.latLng, map);
  });
}


function getClickLatLng(lat_lng, map) {

  // 座標を表示
  document.getElementById('lat').textContent = lat_lng.lat();
  document.getElementById('lng').textContent = lat_lng.lng();

  // マーカーを設置
  var marker = new google.maps.Marker({
    position: lat_lng,
    map: map
  });

  // 座標の中心をずらす
  // http://syncer.jp/google-maps-javascript-api-matome/map/method/panTo/
  map.panTo(lat_lng);
}
