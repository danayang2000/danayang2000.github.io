var prevButton = document.getElementById("button-previous");
var nextButton = document.getElementById("button-next");
var carouselSlides = document.getElementsByClassName("carousel-image");
var slideIndex;
for (let i = 0; i < carouselSlides.length; i++) {
	if (!carouselSlides[i].classList.contains("hidden")) {
		slideIndex = i;
	}
}

function prevButtonClicked() {
	let slides = document.getElementsByClassName("carousel-image");
	slides[slideIndex].classList.add("hidden");
	if (slideIndex <= 0) {
		slideIndex = slides.length - 1;
	} else {
		slideIndex = slideIndex - 1;
	}
	slides[slideIndex].classList.remove("hidden");
}

function nextButtonClicked() {
	let slides = document.getElementsByClassName("carousel-image");
	slides[slideIndex].classList.add("hidden");
	if (slideIndex >= slides.length - 1) {
		slideIndex = 0;
	} else {
		console.log('forward');
		slideIndex = slideIndex + 1;
	}
	slides[slideIndex].classList.remove("hidden");
}

prevButton.onclick = prevButtonClicked;
nextButton.onclick = nextButtonClicked;
