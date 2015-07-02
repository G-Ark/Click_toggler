var tabs = require("sdk/tabs");
var self = require("sdk/self");
var pageWorkers = require("sdk/page-worker");


var myScript =  'document.addEventListener("click", function(e) {' +
				'var req_element = e.target.tagName; ' +
				'var attribute = e.target.getAttribute("href");' + 
				'if(req_element == "A")' +
				"self.port.emit('new_tab_url', attribute);" +
				'alert(attribute); ' +
				'e.stopPropagation();' +
				'});';

require("sdk/page-mod").PageMod({
  include: "*",
  contentScript: myScript,
  contentScriptWhen: "start",
  onAttach: startListening
});

function startListening(worker) {
  worker.port.on('new_tab_url', function(message) {
    tabs.open(message);
  });
}





/*// main.js

var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.mozilla.org",
  contentScriptFile: [data.url("jquery.min.js"), data.url("my-content-script.js")]
});
*/



/*
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var toggler = false;
var pageWorker = require("sdk/page-worker");
var pageMod = require("sdk/page-mod");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  toggler = true;
  {
	  console.log("Variable has been set!");
	  var links = document.getElementsByTagName('a');
	  for(i=0;i<links.length;i++){
		  console.log(links[i].title);
	  }
  }
}*/