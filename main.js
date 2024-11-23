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

/*
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
*/

/* Script - Slideshow Carousel styles */
var slideIndex = 0;
const targetElement = document.querySelector('.mySlides');
if (targetElement) {
	showSlides();
}
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
	}
);

document.onclick = function(event) {
    var el = event.target;
	//console.log('clicked el parent = ' + el.parentNode.tagName);
	/*
    if (el.className == "new" && el.nodeName == "DIV") {
        alert("div.new clicked");
    }
	*/
	if (el.parentNode.tagName == 'FIGURE' && el.parentNode.classList.contains("active_image")) {
		el.parentNode.classList.remove("active_image");
		//console.log('1');
	} else if (el.parentNode.tagName == 'FIGURE' && !el.parentNode.classList.contains("active_image")) {
		el.parentNode.classList.add("active_image");
		//console.log('2');
	}
	
	if (el.parentNode.parentNode.classList.contains("active_image")) {
		//console.log('3');
		el.parentNode.parentNode.classList.remove("active_image");
	}
};

/* Script - Galeria styles */
/*
const galeryTargetElement = document.querySelector('.square_images_galery_page_container');
if (galeryTargetElement) {
	openImage();
}
function openImage() {
	console.log('4');
	//console.log(document.querySelectorAll('.square_images_galery_page_container figure img'));
	document.querySelectorAll('.square_images_galery_page_container figure img').forEach(galeryImageClicked => 
		galeryImageClicked.addEventListener('click', () => {
			//console.log(galeryImageClicked.parentNode);
			
			if (galeryImageClicked.parentNode.classList.contains("active_image")) {
				console.log('5');
				galeryImageClicked.parentNode.classList.remove("active_image");
			} else {
				console.log('6');
				galeryImageClicked.parentNode.classList.add("active_image");
				closeGaleryOpenedImage_overlay();
			}
			
		})
	);
}
	*/
/*
const galeryOverlayTargetElement = document.querySelector('.square_images_galery_page_container figure.active_image figcaption');
if (galeryOverlayTargetElement) {
	closeGaleryOpenedImage_overlay();
}
*/
/*
function closeGaleryOpenedImage_overlay() {
	document.querySelector(".square_images_galery_page_container figure.active_image figcaption")
		.addEventListener("click", (galeryOpenedImageOverlay) =>{
			//console.log(galeryOpenedImageOverlay.target.parentNode);
			console.log('7');
			galeryOpenedImageOverlay.target.parentNode.classList.remove("active_image");
		}
	);
}
*/
/* GET Galeria folders images */
function getArticleImage(page, inicialImage, numberOfImagesPerPage) {
	console.log('page = ' + page + ' inicialImage = ' + inicialImage + ' numberOfImagesPerPage = ' + numberOfImagesPerPage);
	/*
	const hash = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
	const image = new Image;
	image.className = 'article-list__item__image--loading';
	image.src = 'http://api.adorable.io/avatars/250/' + hash;
	
	image.onload = function() {
		image.classList.remove('article-list__item__image--loading');
	};
	*/
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.github.com/repos/MauricioJun/igor-souza/contents/galeria/", true);
	/*xhr.responseType = 'document';*/
	/*xhr.responseType = 'text';*/
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			
			// Análise dos dados JSON retornados
			const files = JSON.parse(xhr.responseText);
			// Filtre e liste os arquivos de imagem
			const imageFiles = files.filter(file => {
				return file.type === 'file' && /\.(jpg|jpeg|png|gif)$/i.test(file.name);
			});
			imagesLengthAux = 0;
			// Exibir o nome dos arquivos de imagem
			imageFiles.forEach(file => {
				console.log(file.name);
				imagesLengthAux++;
			});
			imagesLength = imagesLengthAux;
			console.log(imagesLength);
			/*
			var elements = xhr.response.getElementsByTagName("a");
			imagesLengthAux = 0;
			for (x of elements) {
				if ( x.href.match(/\.(jpe?g|png|gif)$/) ) { 
					imagesLengthAux++;
				}
			};
			imagesLength = imagesLengthAux;
			console.log(imagesLength);
   			*/
			
			inicialImageAux = 0;
			for (file of imageFiles) {
				//if ( x.href.match(/\.(jpe?g|png|gif)$/) ) {
					inicialImageAux++;
					if (inicialImage > imagesLength) {
						endLoad = true;
						const deleteFigure = document.querySelectorAll('.square_images_galery_page_container figure');
						deleteFigure.forEach(function (deleteElement) {
							if (deleteElement.classList.contains(inicialImage)) {
								deleteElement.remove();
								//endLoad = true;
								//inicialImage = imagesLength;
							}
						});
						endLoad = true;
						break;
					}
					if (inicialImageAux >= inicialImage && inicialImageAux <= inicialImage + numberOfImagesPerPage - 1) {
						console.log('inicialImage = ' + inicialImage);
						const fetchImage = document.querySelectorAll('.square_images_galery_page_container figure');
						let img = document.createElement("img");
						img.src = file.path;
						//document.body.appendChild(img);
						//container.appendChild(img);
						console.log(img);
						fetchImage.forEach(function (element) {
							if (element.classList.contains(inicialImage)) {
								element.prepend(img);
							}
						});
						//console.log(fetchImage.classList);
						//return img;
						
						//return img;
						break;
					}
				//}
			};
		} else {
			console.log('Request failed. Returned status of ' + xhr.status);
		}
	}
	xhr.send();
	
	//console.log(image);
	//console.log(img);
	//return image;
}

function getArticle(page, inicialImage, numberOfImagesPerPage) {
	//const articleImage = getArticleImage(page, inicialImage, numberOfImagesPerPage);
	const article = document.createElement('figcaption');
	const figcaptionDiv = document.createElement('div');
	figcaptionDiv.className = 'bottom_align';
	const figcaptionDivParagraph = document.createElement('p');
	figcaptionDivParagraph.innerText = " ";

	figcaptionDiv.innerHTML+= figcaptionDivParagraph.outerHTML;

	article.appendChild(figcaptionDiv);
	
	return article;
}

function getArticlePage(page, inicialImage, numberOfImagesPerPage) {

	var checkImgs = getArticleImage(page, inicialImage, numberOfImagesPerPage);
	if (typeof checkImgs !== 'undefined' && typeof checkImgs !== 'null') {
		pageElement.append(checkImgs);
		console.log('1');
	} else {
		//setTimeout(getArticlePage(page, inicialImage, numberOfImagesPerPage), 100000);
		//getArticlePage(page, inicialImage, numberOfImagesPerPage);
		console.log('2');
	}

	const pageElementItens = "";
	const pageElement = document.createElement('figure');
	pageElement.className = inicialImage;
	//pageElement.className = 'article-list__page';

	//pageElement.append(getArticleImage(page, inicialImage, numberOfImagesPerPage));
	pageElement.appendChild(getArticle(page, inicialImage, numberOfImagesPerPage));

	return pageElement;
}

function fetchPage(page, inicialImage, numberOfImagesPerPage) {
	numberOfImagesPerPageAux = numberOfImagesPerPage;
	while (numberOfImagesPerPageAux--) {
		galeryListContainer.appendChild(getArticlePage(page, inicialImage, numberOfImagesPerPage));
		inicialImage++;
	}
}

function addPage(page) {
	if (page === 1) {
		inicialImage = page;
		imagesUsedBefore = 0;
	} else {
		imagesUsedBefore = numberOfImagesPerPage * (page - 1);
		inicialImage = imagesUsedBefore + 1;
	}
	console.log('page = ' + page + ' inicialImage = ' + inicialImage);
	fetchPage(page, inicialImage, numberOfImagesPerPage);
	//document.body.appendChild(page);
}

let page = 0;
let inicialImage = 1;
let imagesUsedBefore = 0;
let numberOfImagesPerPage = 2;
var imagesLength = 6;
let testenumero = inicialImage;
var endLoad = false;
const galeryListContainer = document.querySelector('.square_images_galery_page_container');

if (galeryListContainer){
	addPage(++page);
}

// listen for scroll event and load more images if we reach the bottom of window
window.addEventListener('scroll',()=>{
    //console.log("scrolled", window.scrollY) //scrolled from top
    //console.log(window.innerHeight) //visible part of screen
    if(galeryListContainer && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        console.log('rolando...');
		//loadGaleryImages("galeria", postGaleryImages);
		console.log('endLoad = ' + endLoad + ' inicialImage = ' + inicialImage + ' imagesLength = ' + imagesLength);
		if (endLoad === false && inicialImage <= imagesLength) {
			addPage(++page);
		}
		//addPage(++page);
    }
})

document.querySelectorAll(".flex_2_images_for_script").forEach(async(elCont) => {

	const elsImages = elCont.querySelectorAll("img");
  
	//stackoverflow.com/a/60949881/383904
	await Promise.all([...elsImages].filter(img => !img.complete).map(img => new Promise(resolve => img.onload = img.onerror = resolve)));
  
	elsImages.forEach(elImg => {
		elImg.parentNode.parentNode.style.setProperty("--w", elImg.naturalWidth);
		elImg.parentNode.style.setProperty("--w", elImg.naturalWidth);
		elImg.style.setProperty("--w", elImg.naturalWidth);
		elImg.parentNode.parentNode.style.setProperty("--h", elImg.naturalHeight); 
		elImg.parentNode.style.setProperty("--h", elImg.naturalHeight);
		elImg.style.setProperty("--h", elImg.naturalHeight);
	});
  
  });
