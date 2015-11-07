$(function () {
   // initialise
    bigMap();
    smallMap();

});




var markers = [];



function bigMap() {
      // set viewport for device (see below)
      // detectBrowser();

       // default to New Zealand TODO: make this a part of the admin
       var mapInitialView = {
           center: {
               lat: $lat,
               lng: $lng
           },
           zoom: 15,
           mapTypeId: google.maps.MapTypeId.SATELLITE
       };
       // get the map element
       var map = new google.maps.Map(document.getElementById("map_canvas"), mapInitialView);
              var myLatLng = {lat: $lat, lng: $lng};
              var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              title: 'Hello World!'

     });

   }

   function smallMap() {

         // set viewport for device (see below)
         // detectBrowser();

          // default to New Zealand TODO: make this a part of the admin
          var newMap = {
              center: {
                  lat: $lat,
                  lng: $lng
              },
              zoom: 5,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          // get the map element
          var map = new google.maps.Map(document.getElementById("map_canvas_small"), newMap);
                 var myLatLng = {lat: $lat, lng: $lng};
                 var marker = new google.maps.Marker({
                 position: myLatLng,
                 map: map,
                 title: 'Hello World!'

        });

       /* var ctaLayer = new google.maps.KmlLayer({
          url: 'http://tane.novaweb.nz/assets/PotentialVegetation.kml',
          map: map
       }); */

      }
