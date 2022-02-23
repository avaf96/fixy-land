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
		let dastrasi_sari_grid_active = $(".dastrasi-sari-grid-active");
		let swiper_slide = $(".swiper-slide");
		let squre_div = $(".squre-div");


		for(let i = 0 ; i < swiper_slide.length ; i++){
			$(swiper_slide[i]).click(function(){	
				for(let j = 0 ; j < swiper_slide.length ; j++){
					$(dastrasi_sari_grid[j]).addClass("d-none");
//					$(dastrasi_sari_grid_active[0]).addClass("d-none");
				
				}
				$(dastrasi_sari_grid[i]).removeClass("d-none");	
  

			})	
		}

	})
