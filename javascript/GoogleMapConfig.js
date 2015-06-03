/* window.onload = initialize();

function detectBrowser() {
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("map_canvas");

  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    mapdiv.style.width = '100%';
    mapdiv.style.height = '100%';
  } else {
    mapdiv.style.width = '600px';
    mapdiv.style.height = '800px';
  }
}

var map;
function initialize() {
  var myLatlng = new google.maps.LatLng(-41.07935114946898, 172.46337890625);
  var mapOptions = {
    zoom: 5,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

	var memberCount = '$memberCount';
//	console.log(memberCount);

	var latString = '$lat';
	var latArray = new Array();
	latArray = latString.split(",");

	var lngString = '$lng';
	var lngArray = new Array();
	lngArray = lngString.split(","); 
	
	var contentString = '$content';
	var contentArray = new Array();
	contentArray = contentString.split(",");
//	console.log(contentArray);

//	var infowindow = new google.maps.InfoWindow();
	function closeInfos() {
		if(infos.length > 0) {
			// detatch info window from the marker
			infos[0].set("marker", null);
			
			// close the window
			infos[0].close();
			
			// kill the data in the array
			infos.length = 0;
		}
	}
	
	infos = [];
	
	for (var i = 0; i < 3; i++) { //
		
	   var location = new google.maps.LatLng(latArray[i],lngArray[i]);
	   
		var marker = new google.maps.Marker({
	       position: location,
	       map: map
	   });
		
		console.log(contentArray[i]);
		
		google.maps.event.addListener(marker, 'click', function() {
			// close the previous info window
			closeInfos();
			console.log(contentArray[i]);
			
			// bind content to the info window
			var info = new google.maps.InfoWindow({content: "<p>" + contentArray[i] + "</p>"});
			// open the info window
			info.open(map, this);
			// keep the handler, so we can close it on the next click event
			infos[0] = info;
		});

	}

} */

window.onload = initialize();

function detectBrowser() {
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("map_canvas");

  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    mapdiv.style.width = '100%';
    mapdiv.style.height = '100%';
  } else {
    mapdiv.style.width = '600px';
    mapdiv.style.height = '800px';
  }
}

var map;
function initialize() {
  var myLatlng = new google.maps.LatLng(-41.07935114946898, 172.46337890625);
  var mapOptions = {
    zoom: 5,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

	var memberCount = '$memberCount';
//	console.log(memberCount);

/*	var geo = '$geo';

	var geoArray = new Array();
	geoArray = geo.split(",");
	var latArray = geoArray.split("#");
	console.log(letArray);
	*/
	
	
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

//	var infowindow = new google.maps.InfoWindow();

var infoObj = new google.maps.InfoWindow();

	
	for (var i = 0; i < memberCount; i++) { 
		
	   var location = new google.maps.LatLng(latArray[i],lngArray[i]);
	   
		var marker = new google.maps.Marker({
	       position: location,
	       map: map
	   });
		
		attachInfo(contentArray, latArray, lngArray, marker, i);
		
	}
	

function attachInfo(contentArray, latArray, lngArray, marker, i) {	
			
		google.maps.event.addListener(marker, 'click', function() {
			
			infoObj.close(map, marker);
				
			//infoObj.close();		
			infoObj.setContent(contentArray[i]);
	
			infoObj = new google.maps.InfoWindow({
				content: contentArray[i]
			});	
					
			infoObj.open(map, marker);
	});
}}	


