window.onload = initialize();

var map;
var infowindow;



function initialize() {
  var latlng = new google.maps.LatLng(-41.07935114946898, 172.46337890625);
  var myOptions = {
    zoom: 5,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
	}	
	
	map = new google.maps.Map(document.getElementById("map_canvas"),
	      myOptions);
		console.log('$fname');
	var fnames = '$fname';
	var fnameArray = new Array();
	fnameArray = fnames.split(",");
	
	var snames = '$sname';
	var snameArray = new Array();
	snameArray = snames.split(",");
	
	var latString = '$lat';
	var latArray = new Array();
	latArray = latString.split(",");
	
	var lng = '$lng';
	var lngArray = new Array();
	lngArray = lng.split(",");

	var	latLength = latArray.length;
	
	
	for(i=0; i < latLength; i++){
			var contentString  = fnameArray[i] + " " + snameArray[i];
			var myLatlng = new google.maps.LatLng(latArray[i], lngArray[i]);
			createMarkers(i, myLatlng, contentString);	
			console.log(myLatlng)	
		} 

}
 
	function createMarkers(i, myLatlng, contentString) {
		var marker = new google.maps.Marker({position: myLatlng, map: map}); 
		attachMessage(contentString, marker, i, map);
		return marker;		
		}
		
		
	function attachMessage(contentString, marker, i, map) {
				

			google.maps.event.addListener(marker, 'click', function() {


			
				var infowindow = new google.maps.InfoWindow({
					content: contentString
					});

			   infowindow.open(map, marker);	
		  });
		


	
		
		
		} 
		
		
		






	/*	  google.maps.event.addListener(map, "click", function(){ 
		   infowindow.close(); 
		});	*/
	
/*	
	for (var i = 0; i < locations.length; i++) {
	
	
	
	
		    var member = locations[i];
		    var myLatLng = new google.maps.LatLng(member[1], member[2]);
		    var marker = new google.maps.Marker({
		        position: myLatLng,
		        map: map,
		        shadow: shadow,
		        icon: image,
		        shape: shape,
		        title: member[0],
		        zIndex: member[3]
		    }); 
*/

	
	


