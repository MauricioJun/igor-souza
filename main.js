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
showSlides();
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