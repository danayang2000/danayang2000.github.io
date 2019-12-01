
function backButtonClicked() {
	window.history.back();
}
let backButtons1 = document.getElementsByClassName("back-text1");
let backButtons2 = document.getElementsByClassName("back-text2");

for (let i = 0; i < backButtons1.length; i++) {
	backButtons1[i].onclick = backButtonClicked;
}
for (let i = 0; i < backButtons2.length; i++) {
	backButtons2[i].onclick = backButtonClicked;
}

function unhideLightbox(lightboxID) {

	document.getElementById('lightbox-overlay5').classList.remove('hide');
	document.getElementById('lightbox-overlay6').classList.remove('hide');

	document.getElementById(lightboxID).classList.remove('hide');

}


function unhideLightboxEastCoastPlace1() {
	unhideLightbox("eastcoastplace1");
}
function unhideLightboxEastCoastPlace2() {
	unhideLightbox("eastcoastplace2");
}
function unhideLightboxEastCoastPlace3() {
	unhideLightbox("eastcoastplace3");
}
function unhideLightboxEastCoastPlace4() {
	unhideLightbox("eastcoastplace4");
}
function unhideLightboxEastCoastPlace5() {
	unhideLightbox("eastcoastplace5");
}

function unhideLightboxEastCoastFood1() {
	unhideLightbox("eastcoastfood1");
}
function unhideLightboxEastCoastFood2() {
	unhideLightbox("eastcoastfood2");
}
function unhideLightboxEastCoastFood3() {
	unhideLightbox("eastcoastfood3");
}
function unhideLightboxEastCoastFood4() {
	unhideLightbox("eastcoastfood4");
}


document.getElementById("eastcoastplace-img1").onclick = unhideLightboxEastCoastPlace1;
document.getElementById("eastcoastplace-img2").onclick = unhideLightboxEastCoastPlace2;
document.getElementById("eastcoastplace-img3").onclick = unhideLightboxEastCoastPlace3;
document.getElementById("eastcoastplace-img4").onclick = unhideLightboxEastCoastPlace4;
document.getElementById("eastcoastplace-img5").onclick = unhideLightboxEastCoastPlace5;
document.getElementById("eastcoastfood-img1").onclick = unhideLightboxEastCoastFood1;
document.getElementById("eastcoastfood-img2").onclick = unhideLightboxEastCoastFood2;
document.getElementById("eastcoastfood-img3").onclick = unhideLightboxEastCoastFood3;
document.getElementById("eastcoastfood-img4").onclick = unhideLightboxEastCoastFood4;


function closeLightbox(lightboxID) {

	document.getElementById('lightbox-overlay5').classList.add('hide');
	document.getElementById('lightbox-overlay6').classList.add('hide');

	document.getElementById(lightboxID).classList.add('hide');
}



function closeAllLightboxes() {

	var lightboxElements = document.getElementsByClassName('lightbox');

	for (var i = 0; i < lightboxElements.length; i++) {

		var id = lightboxElements[i].id;

		closeLightbox(id);
	}
}

document.getElementById('lightbox-overlay5').onclick = closeAllLightboxes;
document.getElementById('lightbox-overlay6').onclick = closeAllLightboxes;

