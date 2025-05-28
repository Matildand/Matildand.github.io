// const singlet = document.querySelector("#singlet");
// console.log(singlet);
// let draggedSing = null;

// singlet.addEventListener("dragstart", function () {
//   draggedSing = singlet;
// });

// const dropBoxT = document.querySelector(".droptop");
// dropBoxT.innerHTML = "";

// dropBoxT.addEventListener("dragover", function (e) {
//   e.preventDefault();
// });

// dropBoxT.addEventListener("drop", function () {
//   const clone = draggedSing;
//   dropBoxT.appendChild(clone);
// });

const myTops = [
  { id: 1, name: "Singlet", src: "WSinglet.png", styleid: "sing" },
  { id: 2, name: "Tshirt", src: "PTshirt.png", styleid: "shirt" },
  { id: 3, name: "Shoulder", src: "Glong.png", styleid: "should" },
];

// function populate() {
//   const topContainer = document.querySelector(".toprow");
//   let newContent = "";
//   for (let i = 0; i < myTops.length; i++) {
//     newContent += `

//               <div id="${myTops[i].styleid}" draggable="true">
//                 <img
//                   class="top"
//                   id="${myTops[i].name}"
//                   src="${myTops[i].src}"
//                   alt="${myTops[i].name}"
//                   width="75px"
//                 />
//               </div>

//  `;
//   }
//   topContainer.innerHTML = newContent;
// }
// populate();
const tops = document.querySelectorAll(".top");
console.log(tops);

let draggedTops = null;

const dropBoxT = document.querySelector(".droptop");
dropBoxT.innerHTML = "";
for (let i = 0; i < tops.length; i++) {
  tops[i].addEventListener("dragstart", function () {
    // if (tops[i].classList.contains("selected")) {
    console.log(tops[i].classList);
    // }
    draggedTops = tops[i];
    dropBoxT.innerHTML = "";
    // tops[i].classList.add("selected");
    // populate();
  });
}

dropBoxT.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropBoxT.addEventListener("drop", function () {
  if (draggedTops && !dropBoxT.querySelector(".tops")) {
    // const cloneT = draggedTops.cloneNode(true);
    const cloneT = draggedTops;
    // draggedTops.classList.add("selected");
    dropBoxT.appendChild(cloneT);
    // populate();
  }
});

const myLegs = [
  { id: 1, name: "Skirt", src: "Pskirt.png" },
  { id: 2, name: "Short", src: "BShort.png" },
  { id: 3, name: "Pant", src: "BPants.png" },
];

const legs = document.querySelectorAll(".leg");
console.log(legs);

let draggedLegs = null;

const dropBoxL = document.querySelector(".droppant");
dropBoxL.innerHTML = "";
for (let i = 0; i < legs.length; i++) {
  legs[i].addEventListener("dragstart", function () {
    draggedLegs = legs[i];
    dropBoxL.innerHTML = "";
  });
}

dropBoxL.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropBoxL.addEventListener("drop", function () {
  if (draggedLegs && !dropBoxL.querySelector(".legs")) {
    const cloneL = draggedLegs;
    dropBoxL.appendChild(cloneL);
  }
});

const skin1 = document.querySelector("#mini-box1");
console.log(skin1);

skin1.addEventListener("click", function () {
  document.getElementById("girl").src = "1Model.png";
});

const skin2 = document.querySelector("#mini-box2");
console.log(skin2);

skin2.addEventListener("click", function () {
  document.getElementById("girl").src = "2Model.png";
});

const skin3 = document.querySelector("#mini-box3");
console.log(skin2);

skin3.addEventListener("click", function () {
  document.getElementById("girl").src = "3Model.png";
});

const skin4 = document.querySelector("#mini-box4");
console.log(skin4);

skin4.addEventListener("click", function () {
  document.getElementById("girl").src = "4Model.png";
});

const singletC = document.querySelector("#singlet");
console.log(singletC);
const singletList = [
  "WSinglet.png",
  "PSinglet.png",
  "BSinglet.png",
  "GSinglet.png",
];
let currentIndex = 0;

singletC.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % singletList.length;
  singletC.src = singletList[currentIndex];
});

const tShirtC = document.querySelector("#tshirt");
console.log(singletC);
const tShirtList = ["PTshirt.png", "BTshirt.png", "GTshirt.png", "WTshirt.png"];

tShirtC.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % tShirtList.length;
  tShirtC.src = tShirtList[currentIndex];
});
