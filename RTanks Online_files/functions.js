function turnBtn(btn){
	if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
		btn.style.right = "-100px";
		btn.style.transition = "0.4s";
		btn.style.visibility = "visible";
	} else {
		btn.style.right = "-250px";
		btn.style.transition = "0.4s";
		btn.style.visibility = "hidden";
	}
}

function goTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0; 
}
