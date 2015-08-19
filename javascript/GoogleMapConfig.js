window.onload = initialize();

function detectBrowser() {
   // Make everything look cool across all devices
	var useragent = navigator.userAgent;
	var mapdiv = document.getElementById("map_canvas");

	if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1) {
		mapdiv.style.width = '100%';
		mapdiv.style.height = '100%';
	} else {
		mapdiv.style.width = '600px';
		mapdiv.style.height = '800px';
	}
}

// create the map object
var map;

function initialize() {
   // Set the centre of the map, in this case it's New Zealand (TODO: Make this configurable through admin)
	var myLatlng = new google.maps.LatLng(-41.07935114946898, 172.46337890625);
	var mapOptions = {
      // Set the zoom to level 5
		zoom: 5,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

   // Bind the map to the element on the template
	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

	var memberCount = '$memberCount';
	console.log(memberCount);


	var latString = '$lat';
	var latArray = new Array();
	latArray = latString.split(",");

	var lngString = '$lng';
	var lngArray = new Array();
	lngArray = lngString.split(",");

	var contentString = '$content';
	var contentArray = new Array();
	contentArray = contentString.split("*");
	console.log(contentArray);

	var infoObj = new google.maps.InfoWindow();

	for (var i = 0; i < memberCount; i++) {
		var location = new google.maps.LatLng(latArray[i], lngArray[i]);
		var marker = new google.maps.Marker({
			position: location,
			map: map
		});
		attachInfo(contentArray, latArray, lngArray, marker, i);
	}


	function attachInfo(contentArray, latArray, lngArray, marker, i) {
		google.maps.event.addListener(marker, 'click', function() {
			infoObj.close(map, marker);
			infoObj.setContent(contentArray[i]);
			infoObj = new google.maps.InfoWindow({
				content: contentArray[i]
			});
			infoObj.open(map, marker);
		});
	}
}
