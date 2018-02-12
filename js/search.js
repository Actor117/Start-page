$(function () {
// Get the elemets reqired, set to to variables!
var form = document.getElementById('search-form');
var searchbox = document.getElementById('search-box');

// Listen for the form submission
form.addEventListener("submit",
function(event){
	// Freez the submission
	event.preventDefault();
	// Save the user input
	var value = searchbox.value;
	// Check if there's a dot at seperating two words.
	if (value.indexOf(".") >= 0) {
		// If there is treat the input as url
		function addhttp(url) {
			// Check if the url has 'https://' at its begining
		   if (!/^(f|ht)tps?:\/\//i.test(url)) {
			   // if doesn't then add it
			  url = "http://" + url;
		   }
		   // What ir reads!
		   return url;
		}
		// Go the specfied url.
		window.location = addhttp(value);;
	} else {
		// If not: Submit the form normaly
		form.submit();
	}
}, false); // I'm not sure why there's a 'false' in here, but I plan to find out!

)};
