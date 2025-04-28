// Heart being filled in on click
const likeBtn = document.getElementById("like-btn");

const likeUnlikeImg = document.getElementById("like-unlike-img");

let toggled = false;
function toggleLiked() {
  // adding so that the button can be unliked
  // !toggled meaning the oposite state than what its currently in
  // ! are used for booleans as they only have two states
  toggled = !toggled;
  //so when the button is pressed it just switches to the oposite state no matter the starting state
  if (toggled) {
    likeUnlikeImg.src = "https://img.icons8.com/ios-filled/50/filled-like.png";
  } else {
    likeUnlikeImg.src = "https://img.icons8.com/ios/50/like--v1.png";
  }
}

// Share button playing an alert
const shareBtn = document.getElementById("share");

// i chose to make the share button connect to an alert rather than an actual social media site or
// something similar, because i felt it would be a fitting function that wasnt having the button
// open to real life social media.
function shareAlert() {
  // originally i tried to do a window.alert function straight into the html file
  // but that would only allow me to do numbers for some reason so i made it a script function
  alert("Share this tutorial and craft with your friends!!");
}

//Video player custom controls
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

// Chapters button
// i discovered the playFrom(seconds) function to create buttons that would play the video from
// a specific timestamp
// this function connects to the onclick function of the buttons in html
function playFrom(seconds) {
  // allows the computer to know what unit the numbers are in so it can jump to the right time
  video.currentTime = seconds;
  // so it plays automatically when the button is presssed
  video.play();
}

// Back to top buttom
// I learnt this from W3 schools
let topbtn = document.getElementById("topBtn");
function topFunction() {
  // code for safari
  document.body.scrollTop = 0;
  // code for other browsers
  // = 0 meaning the very top of the document
  document.documentElement.scrollTop = 0;
}

//Full screen Button (move to ordered place)

// Add other functionalities here
