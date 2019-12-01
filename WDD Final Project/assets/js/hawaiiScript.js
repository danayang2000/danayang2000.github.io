
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

	document.getElementById('lightbox-overlay7').classList.remove('hide');
	document.getElementById('lightbox-overlay8').classList.remove('hide');


	document.getElementById(lightboxID).classList.remove('hide');

}



function unhideLightboxHawaiiPlace1() {
	unhideLightbox("hawaiiplace1");
}
function unhideLightboxHawaiiPlace2() {
	unhideLightbox("hawaiiplace2");
}
function unhideLightboxHawaiiPlace3() {
	unhideLightbox("hawaiiplace3");
}
function unhideLightboxHawaiiPlace4() {
	unhideLightbox("hawaiiplace4");
}
function unhideLightboxHawaiiPlace5() {
	unhideLightbox("hawaiiplace5");
}
function unhideLightboxHawaiiPlace6() {
	unhideLightbox("hawaiiplace6");
}
function unhideLightboxHawaiiPlace7() {
	unhideLightbox("hawaiiplace7");
}


function unhideLightboxHawaiiFood1() {
	unhideLightbox("hawaiifood1");
}
function unhideLightboxHawaiiFood2() {
	unhideLightbox("hawaiifood2");
}
function unhideLightboxHawaiiFood3() {
	unhideLightbox("hawaiifood3");
}
function unhideLightboxHawaiiFood4() {
	unhideLightbox("hawaiifood4");
}
function unhideLightboxHawaiiFood5() {
	unhideLightbox("hawaiifood5");
}
function unhideLightboxHawaiiFood6() {
	unhideLightbox("hawaiifood6");
}
function unhideLightboxHawaiiFood7() {
	unhideLightbox("hawaiifood7");
}
function unhideLightboxHawaiiFood8() {
	unhideLightbox("hawaiifood8");
}


document.getElementById("hawaiiplace-img1").onclick = unhideLightboxHawaiiPlace1;
document.getElementById("hawaiiplace-img2").onclick = unhideLightboxHawaiiPlace2;
document.getElementById("hawaiiplace-img3").onclick = unhideLightboxHawaiiPlace3;
document.getElementById("hawaiiplace-img4").onclick = unhideLightboxHawaiiPlace4;
document.getElementById("hawaiiplace-img5").onclick = unhideLightboxHawaiiPlace5;
document.getElementById("hawaiiplace-img6").onclick = unhideLightboxHawaiiPlace6;
document.getElementById("hawaiiplace-img7").onclick = unhideLightboxHawaiiPlace7;

document.getElementById("hawaiifood-img1").onclick = unhideLightboxHawaiiFood1;
document.getElementById("hawaiifood-img2").onclick = unhideLightboxHawaiiFood2;
document.getElementById("hawaiifood-img3").onclick = unhideLightboxHawaiiFood3;
document.getElementById("hawaiifood-img4").onclick = unhideLightboxHawaiiFood4;
document.getElementById("hawaiifood-img5").onclick = unhideLightboxHawaiiFood5;
document.getElementById("hawaiifood-img6").onclick = unhideLightboxHawaiiFood6;
document.getElementById("hawaiifood-img7").onclick = unhideLightboxHawaiiFood7;
document.getElementById("hawaiifood-img8").onclick = unhideLightboxHawaiiFood8;





function closeLightbox(lightboxID) {

	document.getElementById('lightbox-overlay7').classList.add('hide');
	document.getElementById('lightbox-overlay8').classList.add('hide');

	document.getElementById(lightboxID).classList.add('hide');
}

function closeAllLightboxes() {
 
	var lightboxElements = document.getElementsByClassName('lightbox');


	for (var i = 0; i < lightboxElements.length; i++) {

		var id = lightboxElements[i].id;

		closeLightbox(id);
	}
}

document.getElementById('lightbox-overlay7').onclick = closeAllLightboxes;
document.getElementById('lightbox-overlay8').onclick = closeAllLightboxes;

