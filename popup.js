chrome.runtime.sendMessage({'method':'getInfo'},function(response){
	//response is now the info collected by the content script.
	var errors = response.errors;
	var list = document.getElementById('list');
	list.innerHTML = "";
	
	$.each(errors, function(i)
	{
	    var li = $('<li/>')
	        .appendTo(list);
		if(errors[i].errorCode != undefined) {
			var lbl = $('<label for="cp-' + i + '">' + errors[i].type + ' (' + errors[i].errorCode + ' )' +  '</label>')
		    .appendTo(li);
		} else {
			var lbl = $('<label for="cp-' + i + '">' + errors[i].type + '</label>')
		    .appendTo(li);
		}
	    
		var input = $('<input type="radio" name="a" id="cp-' + i + '" checked="checked">')
			.appendTo(li);
		var div = $('<div class="content"><p>' + errors[i].detailedMessage + '</p></div>')
			.appendTo(li);
	});
	

	//document.getElementById('item1').innerHTML = response.errors[0].detailedMessage;
});