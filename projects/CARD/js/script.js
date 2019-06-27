function paynow(){
	document.getElementById("hide-content").style.display = "none";
	document.getElementById("hide-cvv").style.display = "none";
	document.getElementById("hide-logos").style.display = "none";
	let loader = document.getElementById("loader");
	 loader.style.display = 'flex'; // показываем .loader
	  setTimeout(function() {
	    loader.style.display = 'none'; // скрываем .loader
	  }, 2000);
	 setTimeout(function() {
		document.getElementById("button-cancel").style.display = "block";
		document.getElementById("hide-block").style.display = "flex";
		document.getElementById("firststap").style.display = "none";
		document.getElementById("secondstap").style.display = "flex";
	 }, 2000)

}

function goback(){
	document.getElementById("button-cancel").style.display = "none";
	document.getElementById("hide-block").style.display = "none";
	document.getElementById("firststap").style.display = "flex";
	document.getElementById("secondstap").style.display = "none";
	let loader = document.getElementById("loader");
	 loader.style.display = 'flex'; // показываем .loader
	  setTimeout(function() {
	    loader.style.display = 'none'; // скрываем .loader
	  }, 2000);
	 setTimeout(function() {
		document.getElementById("hide-content").style.display = "block";
		document.getElementById("hide-cvv").style.display = "block";
		document.getElementById("hide-logos").style.display = "block";
	 }, 2000)
}
