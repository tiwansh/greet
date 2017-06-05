function initMap(){
	map = new google.maps.Map(document.getElementById('dispmap'),{
		center : {lat:-34.397, lng:150.644},
		zoom: 6
	});

	infoWindow = new google.maps.InfoWindow;

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			infoWindow.setPosition(pos);
			infoWindow.setContent("You");
			infoWindow.open(map);
			map.setCenter(pos);
		},
		function(){
			handleLocationError(true, infoWindow, map.getCenter());

		});
	}
	else{
		handleLocationError(false, infoWindow, map.getCenter());
	}

	function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
      navigator.geolocation.getCurrentPosition(function(position){
      	loadWeather(position.coords.latitude+','+position.coords.longitude)
      });
  }

function loadWeather(location, woeid) {
	$.simpleWeather({
		location: location,
		woeid: woeid,
		unit: 'c',
		success: function(weather){
			html = '<h2>'+weather.code+' '+weather.temp+'</h2>'
			$("#temp").html(html);
		},
		error:function(error){
			errMsg = '<p>Error ! Couldn\'t load weather!</p>'
			$("#temp").html(errMsg);	
		}
	});
}