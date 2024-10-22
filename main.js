/*
document.querySelector(".content_mask_gradient")
	.addEventListener("scroll", (el) =>{
		//console.log(el);
		el.target.classList.add("active");
		//console.log(el.target.parentNode.id);
		//console.log(el.target.classList);
		//console.log(el.target.scrollTop);
		if (el.target.scrollTop == 0 && el.target.classList.contains("active")) {
			el.target.classList.remove("active");
		}
	}
);
*/

document.querySelector(".main_icons_title")
	.addEventListener("click", (elclick) =>{
		//console.log(elclick);
		//elclick.target.classList.add("active");
		//console.log(elclick.target.parentNode.id);
		//console.log(elclick.target.classList);
		//console.log(elclick.target.scrollTop);
		if (elclick.target.parentNode.classList.contains("main_icons_active")) {
			elclick.target.parentNode.classList.remove("main_icons_active");
		} else {
			elclick.target.parentNode.classList.add("main_icons_active");
		}
	}
);

/* Script - Slideshow Carousel styles */
var slideIndex = 0;
/* New Blue styles
showSlides();
*/
function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("slide-dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(showSlides, 5000); // Change image every 3 seconds
}

document.querySelector("#mobile_menu_icon .main_menu_list_item_link")
	.addEventListener("click", (mobmenushortcut) =>{
		//console.log(mobmenushortcut);
		//mobmenushortcut.target.classList.add("active");
		//console.log(mobmenushortcut.target.parentNode.id);
		//console.log(mobmenushortcut.target.classList);
		//console.log(mobmenushortcut.target.scrollTop);
		if (mobmenushortcut.target.classList.contains("fa-bars")) {
			mobmenushortcut.target.classList.add("deactive_bars");
			var iconx = document.querySelector("#mobile_menu_icon .main_menu_list_item_link .fa-x");
			if (iconx.classList.contains("deactive_x")) {
				iconx.classList.remove("deactive_x");
			}
			var mobmenuextend = document.querySelector("#main_menu_list");
			mobmenuextend.classList.add("active_mobile_menu");

			document.querySelectorAll('.main_menu_list_item_link').forEach(menulink => 
				menulink.addEventListener('click', () => {
					console.log(menulink.parentNode.parentNode.id);
					if (menulink.parentNode.parentNode.classList.contains("active_mobile_menu") && !menulink.parentNode.id) {
						document.querySelector(".deactive_bars").classList.remove("deactive_bars");
						document.querySelector("#mobile_menu_icon .main_menu_list_item_link .fa-x").classList.add("deactive_x");
						menulink.parentNode.parentNode.classList.remove("active_mobile_menu");
					}
				})
			);

		} else if (mobmenushortcut.target.classList.contains("fa-x")) {
			mobmenushortcut.target.classList.add("deactive_x");
			var iconbars = document.querySelector("#mobile_menu_icon .main_menu_list_item_link .fa-bars");
			if (iconbars.classList.contains("deactive_bars")) {
				iconbars.classList.remove("deactive_bars");
			}
			var mobmenuextend = document.querySelector("#main_menu_list");
			mobmenuextend.classList.remove("active_mobile_menu");
		}
		/*
		if (mobmenushortcut.target.parentNode.classList.contains("main_icons_active")) {
			mobmenushortcut.target.parentNode.classList.remove("main_icons_active");
		} else {
			mobmenushortcut.target.parentNode.classList.add("main_icons_active");
		}
		*/
	}
);