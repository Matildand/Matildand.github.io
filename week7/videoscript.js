const starVideo = document.querySelector("#star-video");
console.log(starVideo);

const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playVideo);
function playVideo() {
  starVideo.play();
}

//----
//to pause sound
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseVideo);
function pauseVideo() {
  starVideo.pause();
}

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", playPauseVideo);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function playPauseVideo() {
  if (starVideo.paused || starVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    starVideo.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    starVideo.pause();
  }
}
