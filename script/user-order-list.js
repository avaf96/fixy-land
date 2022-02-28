// JavaScript Document

//		swipper-start
		var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
//		swipper-end
	


$(document).ready(function(){
		let user_order_list_menu_item = $(".user-order-list-menu-item");
		let swiper_slide = $(".swiper-slide");

		for(let i = 0 ; i < swiper_slide.length ; i++){
			$(swiper_slide[i]).click(function(){	
				for(let j = 0 ; j < swiper_slide.length ; j++){
					$(user_order_list_menu_item[j]).addClass("d-none");
					$(swiper_slide[j]).removeClass("darkYellow");
				}
				$(user_order_list_menu_item[i]).removeClass("d-none");	
				$(swiper_slide[i]).addClass("darkYellow");	
			})	
		}
})


//Submit comment
let disapprove = document.getElementById("disapprove");
disapprove.onclick = function(){
		let problem = prompt('مشکل:');
		alert("با تشکر از ثبت نظر");
}


//toggle running-job page and user-payment page
$(document).ready(function(){
		let running_job = $("#running_job");
		let user_payment = $("#user_payment");
		let paying_btn = $("#paying_btn");
		$(paying_btn).click(function(){
			$(running_job).addClass("d-none");
			$(user_payment).removeClass("d-none");
		});

	})