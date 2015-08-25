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
	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

   // Get the JSON object from SilverStripe
	var members = '$infoWindowObject';
   // Parse into a JSON object
   var membersObj = JSON.parse(members);
   // Count how many records to iterate over
   var membersCount = membersObj.Objects.length;

	var locations = new Array();
	for (var i = 0; i < membersCount; i++) {
		var locationArray = { };
		locationArray["lat"] = membersObj.Objects[i].lat;
		locationArray["lng"] = membersObj.Objects[i].lng;
		locations.push(locationArray);
	}

	console.log("hello" + locations);

	var markers = [];




function drop() {
  clearMarkers();
  for (var i = 0; i < membersCount; i++) {
    addMarkerWithTimeout(locations[i], i * 200);
  }
}

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(function() {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP
    }));
  }, timeout);
}

function clearMarkers() {
  for (var i = 0; i < membersCount; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}


}



/*

	function dropMarkers() {

		    setTimeout(function(){
				 for (var i =0; i < membersCount; i++) {
				 var location = new google.maps.LatLng(membersObj.Objects[i].lat, membersObj.Objects[i].long);
		  	  var marker = new google.maps.Marker({
		  		 position: location,
		  		 title: membersObj.Objects[i].firstname,
		  		 animation: google.maps.Animation.DROP
		  	  });
		  	  marker.setMap(map);
		  }
			 }, 2000);
	  } */




	 /* function makeMarkers() {
	  var location = new google.maps.LatLng(membersObj.Objects[i].lat, membersObj.Objects[i].long);
	  var marker = new google.maps.Marker({
		 position: location,
		 title: membersObj.Objects[i].firstname,
		 animation: google.maps.Animation.DROP
	  });
	  marker.setMap(map);
  } */
/*

	dropMarkers();






   // Instantiate the InfoWindows
	var infoWindow = new google.maps.InfoWindow();
}
*/
/*
function drop() {
  for (var i =0; i < membersCount; i++) {
    setTimeout(function() {
      addMarkerMethod();
    }, i * 200);
  }
}

// Iterate over the objects in the JSON array, adding markers to the map
function addMarkerMethod(i){
	var location = new google.maps.LatLng(membersObj.Objects[i].lat, membersObj.Objects[i].long);
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});
	//attachInfo(membersObj, marker, i);
}


	function attachInfo(membersObj, marker, i) {
		google.maps.event.addListener(marker, 'click', function() {
			infoObj.close(map, marker);
			infoObj.setContent(membersObj.Objects[i].firstname);
			infoObj = new google.maps.InfoWindow({
				content: membersObj.Objects[i].firstname
			});
			infoObj.open(map, marker);
		});
	}
*/
