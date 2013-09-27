(function(){
	
	var hej = window.hej = {
		
		i: 0,
		
		supportTimerId: 0,
		
		checkStatus:function(){
	        hej.i++;

	        if(hej.i > 100){
	            console.log("No vpsupport available.");
				clearInterval(hej.supportTimerId);
	        }

			if(window.videoplaza_js_support !== undefined){
	            hej.stopChecking();
			}
		},
		
		errorEventHandler : function( e ) {
			printAdPlayerEvent(e);
			console.log("Received error: " + e);
		},
		
		addEventHandlers : function() {
			window.videoplaza_js_support.addEventListener( "sessionErrorEvent", this.errorEventHandler );
			window.videoplaza_js_support.addEventListener( "adErrorEvent", this.errorEventHandler );
		},
		
		
		startChecking:function() {
			hej.supportTimerId = setInterval(hej.checkStatus, 100);
			console.log("Start looking for vpsupport");
		},

		stopChecking:function(){
			clearInterval(hej.supportTimerId);
			console.log("Found vpsupport, stop looking");
	        hej.addEventHandlers();
		},
		
		
	};
	
	hej.startChecking();
	
})();