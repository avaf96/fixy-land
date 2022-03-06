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
	
	
//	swiper menu
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
	
	
	
//	short & long description 
	
	//	more info button
	let more_inf_btn = $("#more_inf_btn");	
	//	go back button
	let back_btn = $("#go-back-btn");
	
	let req_short_dsc = $(".req-short-dsc");
	let req_long_dsc = $(".req-long-dsc");
	
	$(more_inf_btn).click(function(){
		$(req_short_dsc[0]).addClass("d-none");
		$(req_long_dsc[0]).removeClass("d-none");
	});
	
	$(back_btn).click(function(){
		$(req_short_dsc[0]).removeClass("d-none");
		$(req_long_dsc[0]).addClass("d-none");
	});
	

	
	
})




