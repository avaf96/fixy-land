// JavaScript Document

$(document).ready(function(){
	$("#more-box-btn").click(function(){
		$("#more_box").toggleClass("d-none");
		if($("#more_box").hasClass("d-none")){
			$("#more-box-btn").text("مشاهده بیشتر");
		}else{
			$("#more-box-btn").text("مشاهده کمتر");
		}
	})

 });