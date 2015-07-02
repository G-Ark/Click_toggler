//Initial requirements of SDK
var tabs = require("sdk/tabs");
var self = require("sdk/self");
var pageWorkers = require("sdk/page-worker");
var data = require("sdk/self").data;
var buttons = require('sdk/ui/button/action');
var page = require("sdk/page-mod");

//Variables to be initialized
var toggle = false;

//start of functions and actions
var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: toggle_variable
});

function toggle_variable(){
	if(toggle == true)
	{
		toggle = false;
		console.log("Variable set to false");
	}
	else
	{
		toggle = true;
		console.log("Variable set to true");
	}
}

var Page = page.PageMod({
  include: "*",
  contentScriptFile: data.url("new_tab_script.js"),
  contentScriptWhen: "start",
  onAttach: openNewtab
});

function openNewtab(worker) {
	
	worker.port.on('new_tab_url', function(message) {
		if(toggle == true){
			tabs.open(message);
		}
		else if(toggle == false){
			worker.port.emit('new_tab_cancelled',toggle)
		}
	  });
	
}