window.addEventListener("load", assetVises);

function assetVises() {
  document.querySelector("#click_lyd").addEventListener("click", afspilClickLyd);
  document.querySelector("#ohh_shit_lyd").addEventListener("click", afspilOhhShitLyd);
  document.querySelector("#taber_lyd").addEventListener("click", afspilTaberLyd);
  document.querySelector("#vaeeeeeee_lyd").addEventListener("click", afspilVaeeeeeeeLyd);
  document.querySelector("#woohoo_lyd").addEventListener("click", afspilWoohooLyd);
  document.querySelector("#woow_lyd").addEventListener("click", afspilWoow);
}

function afspilClickLyd() {
  document.querySelector("#clicklyd").play();
}

function afspilOhhShitLyd() {
  document.querySelector("#ohh_shit").play();
}

function afspilTaberLyd() {
  document.querySelector("#taberlyd").play();
}

function afspilVaeeeeeeeLyd() {
  document.querySelector("#vaeeeeeee").play();
}

function afspilWoohooLyd() {
  document.querySelector("#woohoo").play();
}

function afspilWoow() {
  document.querySelector("#woow").play();
}
