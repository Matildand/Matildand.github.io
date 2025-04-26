const likeBtn = document.getElementById("like-btn");

const likeUnlikeImg = document.getElementById("like-unlike-img");

let toggled = false;
function toggleLiked() {
  toggled = !toggled;

  if (toggled) {
    likeUnlikeImg.src = "https://img.icons8.com/ios-filled/50/filled-like.png";
  } else {
    likeUnlikeImg.src = "https://img.icons8.com/ios/50/like--v1.png";
  }
}

const shareBtn = document.getElementById("share");

function shareAlert() {
  alert("Share this tutorial and craft with your friends!!");
}

const video = document.querySelector("#custom-video-player");

const playPauseBtn = document.querySelector("#play-pause-btn");

const playPauseImg = document.querySelector("#play-pause-img");

const progressBar = document.querySelector("#progress-bar-fill");

video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);

function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

function playFrom(seconds) {
  video.currentTime = seconds;
  video.play();
}

let topbtn = document.getElementById("topBtn");
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Add other functionalities here
