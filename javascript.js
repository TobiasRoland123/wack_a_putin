window.addEventListener("load", sidenVises);

let ranTal;
let antalLivTilbage;
let points;

const zelenskyj1 = document.querySelector("#zelenskyj_container1");
const putin1 = document.querySelector("#putin_container1");

// ************************ alt hvad der sker når siden loades   *****************************

function sidenVises() {
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
}

// når spillet startes:

function startGame() {
  console.log("startGame");
  antalLivTilbage = 3;
  points = 0;

  document.querySelector("#point_count").textContent = points;
  document.querySelector("#instruktioner_container").classList.add("hide");
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");

  document.querySelector("#time_sprite").classList.remove("time_animation");
  document.querySelector("#genstart2").classList.remove("click_me");
  document.querySelector("#genstart1").classList.remove("click_me");
  document.querySelector("#liv1").classList.remove("gray");
  document.querySelector("#liv2").classList.remove("gray");
  document.querySelector("#liv3").classList.remove("gray");

  zelenskyj1.classList = "";
  putin1.classList = "";
  document.querySelector("#zelenskyj_box1").classList = "";
  document.querySelector("#putin_box1").classList = "";

  zelenskyj1.offsetLeft;

  // starter timeren
  document.querySelector("#time_sprite").classList.add("time_animation");

  //   ***********************************         zelenskyj1    ***************************************
  // zelenskyj1 bliver tildelt apear animation
  ranTal = Math.floor(Math.random() * 5) + 1;
  zelenskyj1.classList.add("apeargood", "delay" + ranTal);

  // zelenskyj1 bliver placeret tilfældigt
  ranTal = Math.floor(Math.random() * 9) + 1;
  document.querySelector("#zelenskyj_box1").classList.add("zel_pos" + ranTal);

  // giv zelenskyj1 tilfældig hastighed
  ranTal = Math.floor(Math.random() * 5) + 1;
  zelenskyj1.classList.add("speed" + ranTal);

  //  *****************************       Putin1    ********************************'
  // apear aniamtion bliver tildelt Putin med Random delay
  ranTal = Math.floor(Math.random() * 5) + 1;
  putin1.classList.add("apearbad", "delay" + ranTal);

  // putin bliver placeret tilfældigt
  ranTal = Math.floor(Math.random() * 9) + 1;
  document.querySelector("#putin_box1").classList.add("put_pos" + ranTal);

  // giv Putin tilfældig hastighed
  ranTal = Math.floor(Math.random() * 5) + 1;
  putin1.classList.add("speed" + ranTal);

  //  *****************    lyttere     *************************

  // lytter efter cklick på figurer
  zelenskyj1.addEventListener("mousedown", zelenskyjClick);
  putin1.addEventListener("mousedown", putinClick);

  // stopper spillet når tid slut
  document.querySelector("#time_sprite").addEventListener("animationend", stopSpillet);

  // set random position efter den er kommet frem og gået væk igen
  zelenskyj1.addEventListener("animationiteration", resetZelenskyj);
  // zelenskyj2.addEventListener("animationiteration", resetZelenskyj);
  putin1.addEventListener("animationiteration", resetPutin);
}

// *******************************      playKnap      *************************************
// lytter efter click på playknap
document.querySelector("#play").addEventListener("click", pressPlay);

// hvad der sker når man trykker play
function pressPlay() {
  document.querySelector("#clicklyd").play();
  console.log("playGame");
  document.querySelector("#play").classList.add("click");
  document.querySelector("#load_sprite").classList.add("load_animation");
}

// lytter på at animationen på knap er færdig
document.querySelector("#play").addEventListener("animationend", instrukton_read);

function instrukton_read() {
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#instruktioner_container").classList.add("instruktion_animation");
  document.querySelector("#instruktioner_container").offsetLeft;
  document.querySelector("#load_sprite").addEventListener("animationend", startGame);
}

// ******************          alt der sker når man trykker på Zelenskyj    ************************
function zelenskyjClick() {
  console.log("bad Click");

  // afspil lyd når der clickes
  if (Math.random() < 0.5) {
    document.querySelector("#ohh_shit").play();
  } else {
    document.querySelector("#vaeeeeeee").play();
  }

  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", zelenskyjClick);

  // figuren stopper pauser apear animation
  this.classList.add("pause_ani");

  //tilføjer forsvindings animation på figuren
  this.firstElementChild.classList.add("disapeargood");

  // lytter efter animationend på forsvind animation
  this.addEventListener("animationend", resetZelenskyj);

  // trækker et liv fra og gør det gråt
  document.querySelector("#liv" + antalLivTilbage--).classList.add("gray");
}

// ******************   zelenskyj bliver reset   *********************
function resetZelenskyj() {
  // fjerner alle classes fra container og sprite
  this.classList = "";
  this.firstElementChild.classList = "";
  document.querySelector("#zelenskyj_box1").classList = "";
  // tvinger til at udføre det næste
  this.offsetLeft;

  // tilføj apear animation og random delay
  ranTal = Math.floor(Math.random() * 5) + 1;
  this.classList.add("apeargood", "delay" + ranTal);

  // tilføj random position
  ranTal = Math.floor(Math.random() * 9) + 1;
  document.querySelector("#zelenskyj_box1").classList.add("zel_pos" + ranTal);

  // tilføj random hastighed.
  ranTal = Math.floor(Math.random() * 5) + 1;
  this.classList.add("speed" + ranTal);

  //Lyt efter klik på element
  this.addEventListener("mousedown", zelenskyjClick);

  // hvis man har 0 eller færre liv aktiverer stopSpillet fundtionen.
  if (antalLivTilbage <= 0) {
    console.log("you lose");
    stopSpillet();
  }
}

// *********************     alt der sker når man trykker på putin    *********************
function putinClick() {
  console.log("good click");

  // afspil lyd når der clickes
  if (Math.random() < 0.5) {
    document.querySelector("#woow").play();
  } else {
    document.querySelector("#woohoo").play();
  }

  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", putinClick);

  // et point bliver lagt til
  points++;

  // point boiver printet
  document.querySelector("#point_count").textContent = points;

  // apear animation bliver pauset
  this.classList.add("pause_ani");

  // tilføjer forsvind animation
  this.firstElementChild.classList.add("disapearbad");

  // lytter efter forsvind animation slutter
  this.addEventListener("animationend", resetPutin);
}

// **************************    putin bliver reset      ***********************

function resetPutin() {
  // fjerner alle classes fra container og sprite
  this.classList = "";
  this.firstElementChild.classList = "";
  document.querySelector("#putin_box1").classList = "";

  // tvinger til at udføre det næste
  this.offsetLeft;

  // tilføj apear animation og random delay
  ranTal = Math.floor(Math.random() * 5) + 1;
  this.classList.add("apearbad", "delay" + ranTal);

  // tilføj random position
  ranTal = Math.floor(Math.random() * 9) + 1;
  document.querySelector("#putin_box1").classList.add("put_pos" + ranTal);

  // tilføj random hastighed.
  ranTal = Math.floor(Math.random() * 5) + 1;
  this.classList.add("speed" + ranTal);

  //Lyt efter klik på element
  this.addEventListener("mousedown", putinClick);
}

function stopSpillet() {
  console.log("stopSillet");
  putin1.classList = "";
  document.querySelector("#putin_box1").classList = "";
  zelenskyj1.classList = "";
  document.querySelector("#zelenskyj_box1").classList = "";
  if (antalLivTilbage <= 0) {
    youLose();
  } else if (points >= 5) {
    youWin();
  } else {
    youLose();
  }
}

function youWin() {
  console.log("YouWIn");
  // lytter på genstartknap2
  document.querySelector("#woohoo").play();
  document.querySelector("#genstart2").classList.add("click_me");
  document.querySelector("#genstart2").addEventListener("click", startGame);
  document.querySelector("#level_complete").classList.remove("hide");
  document.querySelector("#vinder_text").textContent = "Du har vundet og fået " + points + " points";
}

function youLose() {
  console.log("You Lose");
  // lytter på genstartknap1
  document.querySelector("#taberlyd").play();
  document.querySelector("#genstart1").classList.add("click_me");
  document.querySelector("#genstart1").addEventListener("click", startGame);
  document.querySelector("#game_over").classList.remove("hide");
  document.querySelector("#taber_text").textContent = "Du har tabt og fået " + points + " points";
}
