$(function () {
    initialize();
});

var markers = [];

function initialize() {

    detectBrowser();

    var mapInitialView = {
        center: {
            lat: -41.07935114946898,
            lng: 172.46337890625
        },
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapInitialView);

    var infowindow = new google.maps.InfoWindow({
        content: ''
    });

    $.ajax({
        url: window.location.href + 'locationData',
        type: 'GET',
        success: function (result) {
            var locations = JSON.parse(result);

            for (var i = 0, length = locations.length; i < length; i++) {

                var locationData = locations[i];
                var latLng = new google.maps.LatLng(locationData.lat, locationData.lng);

                addMarkerWithTimeout(latLng, map, infowindow, locationData, i * 100);
            }
        }
    });
}

function detectBrowser() {
    // Make everything look cool across all devices
    var useragent = navigator.userAgent;
    var mapdiv = document.getElementById("map_canvas");

    if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1) {
        mapdiv.style.width = '100%';
        mapdiv.style.height = '100%';
    } else {
        mapdiv.style.width = '100%';
        mapdiv.style.height = '500px';
    }
}

function addMarkerWithTimeout(position, map, infowindow, location, timeout) {
    window.setTimeout(function () {
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP
        });
        markers.push(marker);
        bindInfoWindow(marker, map, infowindow, location.info);
    }, timeout);
}

function bindInfoWindow(marker, map, infowindow, description) {
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(description);
        infowindow.open(map, marker);
    });
}
