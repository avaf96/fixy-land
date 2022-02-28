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