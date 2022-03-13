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
	
	
//		check if checkbox is checked - toggle button
		let confirm_checkbox = $("#confirm");
		let pay_btn = $(".pay_btn");
		$(confirm_checkbox).click(function(){
			if($(this).is(":checked")){
				$(pay_btn[0]).addClass("d-none");
				$(pay_btn[1]).removeClass("d-none");
			}
			else if($(this).is(":not(:checked)")){
				$(pay_btn[0]).removeClass("d-none");
				$(pay_btn[1]).addClass("d-none");
			}
		});


//		alert if checkbox is not checked
		$(pay_btn[0]).click(function(){
			alert("taeed mikonam ra click konid.");
		});
	

})




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