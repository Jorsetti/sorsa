var venueMap;
function init() {

  var pinLocation = new google.maps.LatLng(60,15.1);



  
  
  var mapOptions = {
    zoom: 10,
    center: pinLocation,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    panControl: true,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.MEDIUM,
      position: google.maps.ControlPosition.TOP_RIGHT
    },

    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_LEFT
    },

    scaleControl: true,
    scaleControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER
    },
	
    streetViewControl: true,
    overviewMapControl: true,

    styles: [
      {
        stylers: [
          { hue: "#000000" },
          { saturation: 0 }
        ]
      }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [
			{ hue: "#ffff1a" },
          { lightness: 0 },
          { visibility: "on" }
        ]
      }, 	  {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          { visibility: "on" }
        ]
      }, {
        featureType: "poi.park",
        elementType: "labels",
        stylers: [
          { visibility: "on" }
        ]
      }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          { hue: "#c4f4f4" }
        ]
      },

	  {
        featureType: "road",
        elementType: "labels",
        stylers: [
	
          { visibility: "on" },
		  { hue: "#e6005c" },
		  { saturation: 20 }
		  
        ]
      }
    ]
  };

  var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

  var startPosition = new google.maps.Marker({    // Create a new marker
    position: pinLocation,                        // Set its position
    map: venueMap,                                // Specify the map
	draggable: true,
		icon: 'http://vignette4.wikia.nocookie.net/simpsons/images/6/6d/Homer-pythagoras.png/revision/latest/scale-to-width-down/404?cb=20100312231443'				// Path to image from HTML
  });

}

function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
  
}

window.onload = loadScript;