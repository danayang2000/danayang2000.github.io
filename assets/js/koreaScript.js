
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

	document.getElementById('lightbox-overlay1').classList.remove('hide');
	document.getElementById('lightbox-overlay2').classList.remove('hide');


	document.getElementById(lightboxID).classList.remove('hide');

}



function unhideLightboxKoreaPlace1() {
	unhideLightbox("koreaplace1");
}
function unhideLightboxKoreaPlace2() {
	unhideLightbox("koreaplace2");
}
function unhideLightboxKoreaPlace3() {
	unhideLightbox("koreaplace3");
}
function unhideLightboxKoreaPlace4() {
	unhideLightbox("koreaplace4");
}
function unhideLightboxKoreaPlace5() {
	unhideLightbox("koreaplace5");
}
function unhideLightboxKoreaPlace6() {
	unhideLightbox("koreaplace6");
}
function unhideLightboxKoreaPlace7() {
	unhideLightbox("koreaplace7");
}
function unhideLightboxKoreaPlace8() {
	unhideLightbox("koreaplace8");
}
function unhideLightboxKoreaFood1() {
	unhideLightbox("koreafood1");
}
function unhideLightboxKoreaFood2() {
	unhideLightbox("koreafood2");
}
function unhideLightboxKoreaFood3() {
	unhideLightbox("koreafood3");
}
function unhideLightboxKoreaFood4() {
	unhideLightbox("koreafood4");
}
function unhideLightboxKoreaFood5() {
	unhideLightbox("koreafood5");
}
function unhideLightboxKoreaFood6() {
	unhideLightbox("koreafood6");
}
function unhideLightboxKoreaFood7() {
	unhideLightbox("koreafood7");
}
function unhideLightboxKoreaFood8() {
	unhideLightbox("koreafood8");
}

document.getElementById("koreaplace-img1").onclick = unhideLightboxKoreaPlace1;
document.getElementById("koreaplace-img2").onclick = unhideLightboxKoreaPlace2;
document.getElementById("koreaplace-img3").onclick = unhideLightboxKoreaPlace3;
document.getElementById("koreaplace-img4").onclick = unhideLightboxKoreaPlace4;
document.getElementById("koreaplace-img5").onclick = unhideLightboxKoreaPlace5;
document.getElementById("koreaplace-img6").onclick = unhideLightboxKoreaPlace6;
document.getElementById("koreaplace-img7").onclick = unhideLightboxKoreaPlace7;
document.getElementById("koreaplace-img8").onclick = unhideLightboxKoreaPlace8;
document.getElementById("koreafood-img1").onclick = unhideLightboxKoreaFood1;
document.getElementById("koreafood-img2").onclick = unhideLightboxKoreaFood2;
document.getElementById("koreafood-img3").onclick = unhideLightboxKoreaFood3;
document.getElementById("koreafood-img4").onclick = unhideLightboxKoreaFood4;
document.getElementById("koreafood-img5").onclick = unhideLightboxKoreaFood5;
document.getElementById("koreafood-img6").onclick = unhideLightboxKoreaFood6;
document.getElementById("koreafood-img7").onclick = unhideLightboxKoreaFood7;
document.getElementById("koreafood-img8").onclick = unhideLightboxKoreaFood8;


 
function closeLightbox(lightboxID) {

	document.getElementById('lightbox-overlay1').classList.add('hide');
	document.getElementById('lightbox-overlay2').classList.add('hide');


	document.getElementById(lightboxID).classList.add('hide');
}


function closeAllLightboxes() {

	var lightboxElements = document.getElementsByClassName('lightbox');

	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}


document.getElementById('lightbox-overlay1').onclick = closeAllLightboxes;
document.getElementById('lightbox-overlay2').onclick = closeAllLightboxes;

