// JavaScript Document


$(document).ready(function(){
	
//	profile picture upload icon
	$("input[type='image']").click(function() {
		$("input[id='my_file']").click();
	});
		
})



//	copy website link to share 
let share_btn = document.getElementById("share_btn");
let copy_btn = document.getElementById("copy_link_btn");
share_btn.onclick = function(){
	copy_btn.innerText = "copy";	
};
copy_btn.onclick = function(){
	var r = document.createRange();
	r.selectNode(document.getElementById("web_link"));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(r);
	document.execCommand('copy');
	window.getSelection().removeAllRanges();
	copy_btn.innerText  = "copied";	
};







