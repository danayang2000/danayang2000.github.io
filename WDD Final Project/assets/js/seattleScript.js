
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

	document.getElementById('lightbox-overlay9').classList.remove('hide');
	document.getElementById('lightbox-overlay10').classList.remove('hide');


	document.getElementById(lightboxID).classList.remove('hide');

}



function unhideLightboxSeattlePlace1() {
	unhideLightbox("seattleplace1");
}
function unhideLightboxSeattlePlace2() {
	unhideLightbox("seattleplace2");
}
function unhideLightboxSeattlePlace3() {
	unhideLightbox("seattleplace3");
}

function unhideLightboxSeattleFood1() {
	unhideLightbox("seattlefood1");
}
function unhideLightboxSeattleFood2() {
	unhideLightbox("seattlefood2");
}
function unhideLightboxSeattleFood3() {
	unhideLightbox("seattlefood3");
}

document.getElementById("seattleplace-img1").onclick = unhideLightboxSeattlePlace1;
document.getElementById("seattleplace-img2").onclick = unhideLightboxSeattlePlace2;
document.getElementById("seattleplace-img3").onclick = unhideLightboxSeattlePlace3;
document.getElementById("seattlefood-img1").onclick = unhideLightboxSeattleFood1;
document.getElementById("seattlefood-img2").onclick = unhideLightboxSeattleFood2;
document.getElementById("seattlefood-img3").onclick = unhideLightboxSeattleFood3;



function closeLightbox(lightboxID) {

	document.getElementById('lightbox-overlay9').classList.add('hide');
	document.getElementById('lightbox-overlay10').classList.add('hide');

	document.getElementById(lightboxID).classList.add('hide');
}


function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');

	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}

document.getElementById('lightbox-overlay9').onclick = closeAllLightboxes;
document.getElementById('lightbox-overlay10').onclick = closeAllLightboxes;

