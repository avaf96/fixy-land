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

	})
