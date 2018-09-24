// Google Maps
var map;
function initMap() {
    var coordinates = {lat: 32.7033041, lng: -117.2077936 },
    image = '/img/icon-map.svg',

    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 13.0,
        disableDefaultUI: true,
        scrollwheel: true,
        styles: [ {"featureType": "all", "elementType":"all", "stylers":[ {"visibility": "off" } ] }, {"featureType": "all", "elementType":"labels", "stylers":[ {"visibility": "off" } ] }, {"featureType": "all", "elementType":"labels.text", "stylers":[ {"visibility": "off" }, {"weight": "0.01" }, {"gamma": "0.00" }, {"lightness": "-100" }, {"saturation": "-100" }, {"color": "#ffffff" } ] }, {"featureType": "all", "elementType":"labels.text.fill", "stylers":[ {"visibility": "off" } ] }, {"featureType": "all", "elementType":"labels.text.stroke", "stylers":[ {"visibility": "off" } ] }, {"featureType": "all", "elementType":"labels.icon", "stylers":[ {"visibility": "off" } ] }, {"featureType": "administrative", "elementType":"labels.text.fill", "stylers":[ {"color": "#6195a0" } ] }, {"featureType": "administrative.province", "elementType":"geometry.stroke", "stylers":[ {"visibility": "off" } ] }, {"featureType": "landscape", "elementType":"geometry", "stylers":[ {"lightness": "0" }, {"saturation": "0" }, {"color": "#f5f5f2" }, {"gamma": "1" } ] }, {"featureType": "landscape", "elementType":"geometry.fill", "stylers":[ {"visibility": "on" }, {"hue": "#ff0000" } ] }, {"featureType": "landscape.man_made", "elementType":"all", "stylers":[ {"lightness": "-3" }, {"gamma": "1.00" }, {"visibility": "on" } ] }, {"featureType": "landscape.man_made", "elementType":"geometry.fill", "stylers":[ {"visibility": "off" }, {"color": "#ff0000" } ] }, {"featureType": "landscape.man_made", "elementType":"geometry.stroke", "stylers":[ {"visibility": "on" }, {"color": "#2b0e02" }, {"weight": "4.58" } ] }, {"featureType": "landscape.natural.terrain", "elementType":"all", "stylers":[ {"visibility": "off" } ] }, {"featureType": "poi", "elementType":"all", "stylers":[ {"visibility": "off" } ] }, {"featureType": "poi.park", "elementType":"geometry.fill", "stylers":[ {"color": "#bae5ce" }, {"visibility": "on" } ] }, {"featureType": "road", "elementType":"all", "stylers":[ {"saturation": -100 }, {"lightness": 45 }, {"visibility": "simplified" } ] }, {"featureType": "road.highway", "elementType":"all", "stylers":[ {"visibility": "simplified" } ] }, {"featureType": "road.highway", "elementType":"geometry.fill", "stylers":[ {"color": "#fac9a9" }, {"visibility": "simplified" } ] }, {"featureType": "road.highway", "elementType":"labels.text", "stylers":[ {"color": "#4e4e4e" } ] }, {"featureType": "road.arterial", "elementType":"labels.text.fill", "stylers":[ {"color": "#787878" } ] }, {"featureType": "road.arterial", "elementType":"labels.icon", "stylers":[ {"visibility": "off" } ] }, {"featureType": "transit", "elementType":"all", "stylers":[ {"visibility": "simplified" } ] }, {"featureType": "transit.station.airport", "elementType":"labels.icon", "stylers":[ {"hue": "#0a00ff" }, {"saturation": "-77" }, {"gamma": "0.57" }, {"lightness": "0" } ] }, {"featureType": "transit.station.rail", "elementType":"labels.text.fill", "stylers":[ {"color": "#43321e" } ] }, {"featureType": "transit.station.rail", "elementType":"labels.icon", "stylers":[ {"hue": "#ff6c00" }, {"lightness": "4" }, {"gamma": "0.75" }, {"saturation": "-68" } ] }, {"featureType": "water", "elementType":"all", "stylers":[ {"color": "#eaf6f8" }, {"visibility": "on" } ] }, {"featureType": "water", "elementType":"geometry.fill", "stylers":[ {"color": "#c7eced" } ] }, {"featureType": "water", "elementType":"labels.text.fill", "stylers":[ {"lightness": "-49" }, {"saturation": "-53" }, {"gamma":"0.79" } ] } ]
    }),
  
    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: image
    });
};



