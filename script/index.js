// JavaScript Document


//------------------------------index-sec3 scripts-----------------------------------

		
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
		let sub_menu_hover2 = $(".sub-menu-hover2");
		let dastrasi_sari_grid = $(".dastrasi-sari-grid");
		let swiper_slide = $(".swiper-slide");

		for(let i = 0 ; i < sub_menu_hover2.length ; i++){
			$(sub_menu_hover2[i]).click(function(){	
				for(let j = 0 ; j < dastrasi_sari_grid.length ; j++){
					$(dastrasi_sari_grid[j]).addClass("d-none");
				}
				$(dastrasi_sari_grid[i]).removeClass("d-none");	

			})	
		}

		for(let i = 0 ; i < swiper_slide.length ; i++){
			$(swiper_slide[i]).click(function(){	
				for(let j = 0 ; j < dastrasi_sari_grid.length ; j++){
					$(dastrasi_sari_grid[j]).addClass("d-none");
				}
				$(dastrasi_sari_grid[i]).removeClass("d-none");	


			})	
		}

	})
