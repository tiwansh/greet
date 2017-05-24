(function(){

	function onPositionReceived(position){
		console.log(position);
	}

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(onPositionReceived);
	}
})();