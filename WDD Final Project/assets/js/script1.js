let exploreButton = document.getElementById("explore-button");
let introText = document.getElementById("intro-text");
let downArrow = document.getElementById("down-arrow-button");


function exploreButtonClicked() {
	exploreButton.classList.add("hidden");
	introText.classList.remove("hidden");
	downArrow.classList.remove("hidden");
}
exploreButton.onclick = exploreButtonClicked;




