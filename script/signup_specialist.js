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
		
		let form_control_register_specialist_div = $(".form-control-register-specialist-div div div");
		let form_control_register_specialist_div2 = $(".form-control-register-specialist-div2");
		let form_control_register_specialist_main = $(".form-control-register-specialist-div");
        let categories_input = $(".categories-input");


	$(document).ready(function(){

		let dastrasi_sari_grid = $(".dastrasi-sari-grid");
		let swiper_slide = $(".swiper-slide");
		


		for(let i = 0 ; i < swiper_slide.length ; i++){
			$(swiper_slide[i]).click(function(){	
				for(let j = 0 ; j < swiper_slide.length ; j++){
					$(dastrasi_sari_grid[j]).addClass("d-none");
					
                    $(swiper_slide[j]).removeClass("darkYellow");
				
				}
				$(dastrasi_sari_grid[i]).removeClass("d-none");	
                $(swiper_slide[i]).addClass("darkYellow");

			})	
		}
		
		
		
		
		
		
		for(let i = 0 ; i < form_control_register_specialist_div.length ; i++){
			$(form_control_register_specialist_div[i]).click( function(){
			 for(let j = 0 ; j < form_control_register_specialist_div2.length ; j++){
				 $(form_control_register_specialist_div2[j]).addClass("d-none");
			 }
				$(form_control_register_specialist_div2[i]).removeClass("d-none");
				$(form_control_register_specialist_main[0]).addClass("d-none");
		})
			
			
		}
		
//		for(let i = 0 ; i < categories_input.length ; i++){
//			
//			if($(categories_input[i]).prop('checked', true))
//			 // Checks it
//            $('#myCheckbox').prop('checked', false); // Unchecks it
//			
//			
//		}

		
		
		

	});

		   function backToCategories() {
			   	$(document).ready(function(){
            for(let j = 0 ; j < form_control_register_specialist_div2.length ; j++){
				 $(form_control_register_specialist_div2[j]).addClass("d-none");
				
			 }
			$(form_control_register_specialist_main[0]).removeClass("d-none");
				});
         }
	
   

//$('#myCheckbox').prop('checked', true); // Checks it
//$('#myCheckbox').prop('checked', false); // Unchecks it






