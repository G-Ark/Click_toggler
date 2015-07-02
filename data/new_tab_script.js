document.addEventListener("click", function(e) {
	var req_element = e.target.tagName; 
	var attribute = e.target.getAttribute("href");
	if(req_element == "A")
	{
		self.port.emit('new_tab_url', attribute);
	}
	self.port.on("new_tab_condition", function(toggle) {
		if(toggle == true){
			console.log("Toggle set to true");
			window.stop();
			document.addEventListener("ready",function(e){
				e.preventDefault();
			});	
		}
		if(toggle == false){
			console.log("Toggle set to false");
		}
	});
});
