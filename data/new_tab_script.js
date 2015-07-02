document.addEventListener("click", function(e) {
	var req_element = e.target.tagName; 
	var attribute = e.target.getAttribute("href");
	if(req_element == "A")
	{
		self.port.emit('new_tab_url', attribute);
		window.stop();
		e.preventDefault();
	}
});