//fetching the audio and button so they are clickable
const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

//to play sound
const playButton = document.querySelector("#play-button");
console.log(playButton);

const topHeading = document.querySelector("#top-heading");
console.log(topHeading);

playButton.addEventListener("click", playAudio);
function playAudio() {
  airportAudio.play();
  myNewHeading = "Audio is currently playing";
  topHeading.textContent = myNewHeading;
}

//----
//to pause sound
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAudio);
function pauseAudio() {
  myNewHeading = "Audio is paused";
  airportAudio.pause();
  topHeading.textContent = myNewHeading;
}

//pop sound play
const popSound = document.querySelector("#pop-audio");
console.log(popSound);
const popButton = document.querySelector("#pop-button");
console.log(popButton);

popButton.addEventListener("click", popAudio);
function popAudio() {
  popSound.play();
}
