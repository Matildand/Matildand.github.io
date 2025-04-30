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

// jump to instructions button.
const jumpBtn = document.querySelector("#btnwide");
console.log(jumpBtn);

jumpBtn.addEventListener("click", tutFunction);

function tutFunction() {
  //scrolls the page to the target element
  const target = document.querySelector(".media-player");
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
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
// the currentTime function creates buttons that play the video from a specific timestamp
// this function connects to the onclick function of the buttons in html
function playFrom(seconds) {
  // allows the computer to know what unit the numbers are in so it can jump to the right time
  video.currentTime = seconds;
  // so it plays automatically when the button is presssed
  video.play();
  // so the pause button appears when the video is played from the chapter buttons
  playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
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

//Full screen Button from week 8 examples
const fullscreenButton = document.querySelector("#fullscreen");
console.log(fullscreenButton);
fullscreenButton.addEventListener("click", goFullscreen);

function goFullscreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// code for caption box, repeated 18 times for each step button
const textBox = document.querySelector("#textbox");
console.log(textBox);
const st1 = document.querySelector("#st1");
console.log(st1);
const ch1 = document.querySelector("#ch1");
console.log(ch1);
st1.addEventListener("click", changeText);
function changeText() {
  //by changing the text to the id i was able to only have the steps written out once in the html
  const newText = document.getElementById("ch1").textContent;
  document.getElementById("textbox").textContent = newText;
}

const st2 = document.querySelector("#st2");
console.log(st2);
const ch2 = document.querySelector("#ch2");
console.log(ch2);
st2.addEventListener("click", changeText2);
function changeText2() {
  const newText = document.getElementById("ch2").textContent;
  document.getElementById("textbox").textContent = newText;
}

const st3 = document.querySelector("#st3");
console.log(st3);
const ch3 = document.querySelector("#ch3");
console.log(ch3);
st3.addEventListener("click", changeText3);
function changeText3() {
  const newText = document.getElementById("ch3").textContent;
  document.getElementById("textbox").textContent = newText;
}

const st4 = document.querySelector("#st4");
console.log(st4);
const ch4 = document.querySelector("#ch4");
console.log(ch4);
st4.addEventListener("click", changeText4);
function changeText4() {
  const newText = document.getElementById("ch4").textContent;
  document.getElementById("textbox").textContent = newText;
}

const st5 = document.querySelector("#st5");
console.log(st5);
const ch5 = document.querySelector("#ch5");
console.log(ch5);
st5.addEventListener("click", changeText5);
function changeText5() {
  const newText = document.getElementById("ch5").textContent;
  document.getElementById("textbox").textContent = newText;
}

const st6 = document.querySelector("#st6");
console.log(st6);
const ch6 = document.querySelector("#ch6");
console.log(ch6);
st6.addEventListener("click", changeText6);
function changeText6() {
  const newText = document.getElementById("ch6").textContent;
  document.getElementById("textbox").textContent = newText;
}

const st7 = document.querySelector("#st7");
console.log(st7);
const ch7 = document.querySelector("#ch7");
console.log(ch7);
st7.addEventListener("click", changeText7);
function changeText7() {
  const newText = document.getElementById("ch7").textContent;
  document.getElementById("textbox").textContent = newText;
}

const st8 = document.querySelector("#st8");
console.log(st8);
const ch8 = document.querySelector("#ch8");
console.log(ch8);
st8.addEventListener("click", changeText8);
function changeText8() {
  const newText = document.getElementById("ch8").textContent;
  document.getElementById("textbox").textContent = newText;
}

const st9 = document.querySelector("#st9");
console.log(st9);
const ch9 = document.querySelector("#ch9");
console.log(ch9);
st9.addEventListener("click", changeText9);
function changeText9() {
  const newText = document.getElementById("ch9").textContent;
  document.getElementById("textbox").textContent = newText;
}

const st10 = document.querySelector("#st10");
console.log(st10);
const ch10 = document.querySelector("#ch10");
console.log(ch10);
st10.addEventListener("click", changeText10);
function changeText10() {
  const newText = document.getElementById("ch10").textContent;
  document.getElementById("textbox").textContent = newText;
}

const st11 = document.querySelector("#st11");
console.log(st11);
const ch11 = document.querySelector("#ch11");
console.log(ch11);
st11.addEventListener("click", changeText11);
function changeText11() {
  const newText = document.getElementById("ch11").textContent;
  document.getElementById("textbox").textContent = newText;
}

const st12 = document.querySelector("#st12");
console.log(st12);
const ch12 = document.querySelector("#ch12");
console.log(ch12);
st12.addEventListener("click", changeText12);
function changeText12() {
  const newText = document.getElementById("ch12").textContent;
  document.getElementById("textbox").textContent = newText;
}

const st13 = document.querySelector("#st13");
console.log(st13);
const ch13 = document.querySelector("#ch13");
console.log(ch13);
st13.addEventListener("click", changeText13);
function changeText13() {
  const newText = document.getElementById("ch13").textContent;
  document.getElementById("textbox").textContent = newText;
}

const st14 = document.querySelector("#st14");
console.log(st14);
const ch14 = document.querySelector("#ch14");
console.log(ch14);
st14.addEventListener("click", changeText14);
function changeText14() {
  const newText = document.getElementById("ch14").textContent;
  document.getElementById("textbox").textContent = newText;
}

const st15 = document.querySelector("#st15");
console.log(st15);
const ch15 = document.querySelector("#ch15");
console.log(ch15);
st15.addEventListener("click", changeText15);
function changeText15() {
  const newText = document.getElementById("ch15").textContent;
  document.getElementById("textbox").textContent = newText;
}

const st16 = document.querySelector("#st16");
console.log(st16);
const ch16 = document.querySelector("#ch16");
console.log(ch16);
st16.addEventListener("click", changeText16);
function changeText16() {
  const newText = document.getElementById("ch16").textContent;
  document.getElementById("textbox").textContent = newText;
}

const st17 = document.querySelector("#st17");
console.log(st17);
const ch17 = document.querySelector("#ch17");
console.log(ch17);
st17.addEventListener("click", changeText17);
function changeText17() {
  const newText = document.getElementById("ch17").textContent;
  document.getElementById("textbox").textContent = newText;
}

const st18 = document.querySelector("#st18");
console.log(st18);
const ch18 = document.querySelector("#ch18");
console.log(ch18);
st18.addEventListener("click", changeText18);
function changeText18() {
  const newText = document.getElementById("ch18").textContent;
  document.getElementById("textbox").textContent = newText;
}
