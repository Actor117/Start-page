	var form = document.getElementById('search-form');
	var searchbox = document.getElementById('search-box');

	form.addEventListener("submit",
	function(event){
		var value = searchbox.value;
		event.preventDefault();
		var value = searchbox.value;
		if (value.indexOf(".") >= 0) {
			function addhttp(url) {
			   if (!/^(f|ht)tps?:\/\//i.test(url)) {
				  url = "http://" + url;
			   }
			   return url;
			}
			window.location = addhttp(value);;
		} else {
			form.submit();
		}
	}, false);
