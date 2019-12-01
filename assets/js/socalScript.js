
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
	document.getElementById('lightbox-overlay3').classList.remove('hide');
	document.getElementById('lightbox-overlay4').classList.remove('hide');

	document.getElementById(lightboxID).classList.remove('hide');

}




function unhideLightboxSocalPlace1() {
	unhideLightbox("socalplace1");
}
function unhideLightboxSocalPlace2() {
	unhideLightbox("socalplace2");
}
function unhideLightboxSocalPlace3() {
	unhideLightbox("socalplace3");
}
function unhideLightboxSocalPlace4() {
	unhideLightbox("socalplace4");
}
function unhideLightboxSocalPlace5() {
	unhideLightbox("socalplace5");
}
function unhideLightboxSocalFood1() {
	unhideLightbox("socalfood1");
}
function unhideLightboxSocalFood2() {
	unhideLightbox("socalfood2");
}
function unhideLightboxSocalFood3() {
	unhideLightbox("socalfood3");
}


document.getElementById("socalplace-img1").onclick = unhideLightboxSocalPlace1;
document.getElementById("socalplace-img2").onclick = unhideLightboxSocalPlace2;
document.getElementById("socalplace-img3").onclick = unhideLightboxSocalPlace3;
document.getElementById("socalplace-img4").onclick = unhideLightboxSocalPlace4;
document.getElementById("socalplace-img5").onclick = unhideLightboxSocalPlace5;
document.getElementById("socalfood-img1").onclick = unhideLightboxSocalFood1;
document.getElementById("socalfood-img2").onclick = unhideLightboxSocalFood2;
document.getElementById("socalfood-img3").onclick = unhideLightboxSocalFood3;



function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay3').classList.add('hide');
	document.getElementById('lightbox-overlay4').classList.add('hide');

	document.getElementById(lightboxID).classList.add('hide');
}


function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');

	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}


document.getElementById('lightbox-overlay3').onclick = closeAllLightboxes;
document.getElementById('lightbox-overlay4').onclick = closeAllLightboxes;

