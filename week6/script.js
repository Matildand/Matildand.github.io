let myButton = document.querySelector("#my-button");
myButton.addEventListener("click", toggleMe);
let myImg = document.querySelector("#myImage");
let helloMsg = document.querySelector("#hello");
myImg.addEventListener("mouseover", addMe);
myImg.addEventListener("mouseout", removeMe);
function addMe() {
  myImg.classList.add("round");
}
function removeMe() {
  myImg.classList.remove("round");
}
function toggleMe() {
  let myName = myImg.dataset.catname;
  helloMsg.textContent = "Hi I am " + myName;
  myImg.classList.toggle("round");
}

let allParagraphs = document.querySelectorAll("p");
//allParagraphs.forEach(changeColor);

function changeColor(item) {
  //console.log(item);
  item.style.backgroundColor = "limegreen";
  // item.textContent = "New text content";
}
console.log(allParagraphs);

const myStatus = document.getElementById("status");
console.log(myStatus);
myStatus.addEventListener("mouseover", function () {
  myStatus.style.backgroundColor = "lightgreen";
});
myStatus.addEventListener("mouseout", function () {
  myStatus.style.backgroundColor = "lightblue";
});

// const header = document.querySelector("header");
// // console.log(header.innerHTML);
// let course = "OART1013";
// // header.innerHTML += `<h3> this is ${course} </h3>`;
// const topHeading = document.querySelector("h1");
// const body = document.querySelector("body");
// const myButton = document.querySelector("#my-button");
// console.log(myButton);

// myButton.addEventListener("click", handleClick);

// const myCat = document.querySelector("#my-cat");
// console.log(myCat);

// myCat.addEventListener("mouseenter", addMe);
// myCat.addEventListener("mouseleave", removeMe);

// function addMe() {
//   myCat.classList.add("round");
// }

// function removeMe() {
//   myCat.classList.remove("round");
// }

// function handleClick() {
//   console.log("Hey did you just click me???");
//   // topHeading.textContent = "This is a new heading";
//   myCat.classList.toggle("round");
//   topHeading.classList.toggle("blue-color");
//   body.classList.toggle("beige-color");
// }

// // console.log(header.innerHTML);
// // console.log(topHeading);
// // console.log(topHeading.textContent);
// // topHeading.textContent = "This is a new heading";
// // topHeading.style.color = "crimson";
// const allParas = document.querySelectorAll("p");
// // console.log(allParas);
// // console.log(allParas.textContent);
// for (let i = 0; i < allParas.length; i++) {
//   //   console.log(allParas[i].textContent);
//   allParas[i].style.border = "1px solid green";
//   allParas[i].style.backgroundColor = "beige";
// }

// const myFirstSub = document.querySelector("#first-subheading");
// // console.log(myFirstSub);
// // console.log(myFirstSub.textContent);
