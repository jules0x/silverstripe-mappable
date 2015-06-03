var infowindow;
var map;
var htmlStr = $('div#mapContent').html();
var gpsXML = '$GPSXMLurl';

var latArray = [];
var lngArray = [];
var markerArray = [];
var contentArray = [];

function initialize() {
	
//TODO: convert markers to polyline
//set the map type and zoom level
    var myOptions = {
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
//create the map
    map = new google.maps.Map(document.getElementById("map"), myOptions);
//connect to the GPS xml data
  
//collect the latlng data 
      for (var i = 0; i < markers.length; i++) {
    	 
        var latlng = new google.maps.LatLng(parseFloat(markers[i].getAttribute("lat")),
                                    parseFloat(markers[i].getAttribute("lng")));
       
        var lat = parseFloat(markers[i].getAttribute("lat"));
        var lng = parseFloat(markers[i].getAttribute("lng"));
        var marker = createMarker(markers[i].getAttribute("time"), latlng);
        var contentString = '<a href="javascript: void(0);" onclick="seekToVimeoVideo(' + markers[i].getAttribute("time") + ');">scrub to video</a>'; 
//push the latlng data to a global array        
        latArray.push (lat);
        lngArray.push (lng);
        markerArray.push (marker);
        contentArray.push (contentString);
//goto the infowindow functions
        attachMessage(contentString, marker, i);
       }
     });
}
//populate the infowindow
function attachMessage(contentString, marker, i) {
	  var infowindow = new google.maps.InfoWindow(
	      {content: contentString});
	  
		dListener(marker, 'click', function() {
	    infowindow.open(map,marker);
//TODO: find a way to close the previous infowindow automatically    
// infowindow.close();  
	  });
	}
//create the markers on the map
function createMarker(time, latlng, markers, contentString) {
	var marker = new google.maps.Marker({position: latlng, map: map});
	return marker;
}

//load the google maps api	
function loadScript() {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=initialize";
	document.body.appendChild(script);
}
  
window.onload = loadScript;




 