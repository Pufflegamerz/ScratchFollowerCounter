if (window.location.href.includes("#")) { // Check if hashtag is in url
	var username = window.location.href.split("#")[1];
	$(document).ready(function(){
   		$.get("https://scratch.mit.edu/users/"+username+"/followers",
   		function(data, status){
            var found = $('h2', data);
            document.write(found[0].innerHTML.match(/\(([^)]+)\)/)[1]);
    	}).fail(function(err){
    		document.write("Error"); // Nobody will notice...
		});
	});
}
setTimeout(function() { // Ignore Scratch's image background to make the header look better
	document.body.style.background = "white";
},100);
function generate() {
	document.getElementsByTagName('center')[0].innerHTML += '<div id="result"> <p>Copy this code:</p> <textarea><iframe style="border:transparent;width:60px;height:25px;" scrolling="no" src="http://followercounter.usa.cc#'+document.getElementById('username').value+'" scrolling="no"></iframe></textarea> </div>'
}
