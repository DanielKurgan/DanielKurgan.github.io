function paynow(){
	document.getElementById("hide-content").style.display = "none";
	document.getElementById("hide-cvv").style.display = "none";
	document.getElementById("hide-logos").style.display = "none";
	document.getElementById("button-cancel").style.display = "block";
	document.getElementById("hide-block").style.display = "flex";
}

function goback(){
	document.getElementById("hide-content").style.display = "block";
	document.getElementById("hide-cvv").style.display = "block";
	document.getElementById("hide-logos").style.display = "block";
	document.getElementById("button-cancel").style.display = "none";
	document.getElementById("hide-block").style.display = "none";
}