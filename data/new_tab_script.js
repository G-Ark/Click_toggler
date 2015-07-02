document.addEventListener("click", function(e) {
	var req_element = e.target.tagName; 
	var attribute = e.target.getAttribute("href");
	if(req_element == "A")
	{
		self.port.emit('new_tab_url', attribute);
	}
	self.port.on("new_tab_cancelled", function(toggle) {
		if(toggle == true){
			window.stop();
			e.preventDefault();
		}
	});
});
