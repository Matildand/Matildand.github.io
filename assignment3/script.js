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

const tops = document.querySelectorAll(".top");
console.log(tops);

let draggedTops = null;
let droppedId = null;

const dropBoxT = document.querySelector(".droptop");
dropBoxT.innerHTML = "";

for (let i = 0; i < tops.length; i++) {
  tops[i].addEventListener("dragstart", function () {
    console.log(tops[i].classList);
    // }
    draggedTops = tops[i];
    dropBoxT.innerHTML = "";
  });
}

dropBoxT.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropBoxT.addEventListener("drop", function () {
  if (draggedTops && !dropBoxT.querySelector(".tops")) {
    const newId = draggedTops.dataset.id;

    if (droppedId !== null) {
      const previousTop = document.querySelector(
        `.top[data-id="${droppedId}"]`
      );
      if (previousTop) {
        previousTop.style.display = "block";
      }
      dropBoxT.innerHTML = "";
    }
    // Clone and drop the dragged image
    const clone = draggedTops.cloneNode(true);
    dropBoxT.appendChild(clone);

    // Hide the original image in the list
    draggedTops.style.display = "none";

    // Save the current dropped ID
    droppedId = newId;
    // Re-attach color cycling logic if it's a singlet
    if (clone.dataset.id === "1") {
      // or clone.id === "singlet" if using id
      let index = 0;
      const singletList = [
        "WSinglet.png",
        "PSinglet.png",
        "BSinglet.png",
        "GSinglet.png",
      ];

      clone.addEventListener("click", function () {
        index = (index + 1) % singletList.length;
        clone.src = singletList[index];
      });
    }
    if (clone.dataset.id === "2") {
      // or clone.id === "singlet" if using id
      let index = 0;
      const tShirtList = [
        "PTshirt.png",
        "BTshirt.png",
        "GTshirt.png",
        "WTshirt.png",
      ];

      clone.addEventListener("click", function () {
        index = (index + 1) % tShirtList.length;
        clone.src = tShirtList[index];
      });
    }
    if (clone.dataset.id === "3") {
      // or clone.id === "singlet" if using id
      let index = 0;
      const longList = ["GLong.png", "WLong.png", "PLong.png", "BLong.png"];

      clone.addEventListener("click", function () {
        index = (index + 1) % longList.length;
        clone.src = longList[index];
      });
    }
  }
});

const myLegs = [
  { id: 4, name: "Skirt", src: "Pskirt.png" },
  { id: 5, name: "Short", src: "BShort.png" },
  { id: 6, name: "Pant", src: "BPants.png" },
];

const legs = document.querySelectorAll(".leg");
console.log(legs);

let draggedLegs = null;
let droppedIdL = null;

const dropBoxL = document.querySelector(".droppant");
dropBoxL.innerHTML = "";

for (let i = 0; i < legs.length; i++) {
  legs[i].addEventListener("dragstart", function () {
    console.log(legs[i].classList);
    // }
    draggedLegs = legs[i];
    dropBoxL.innerHTML = "";
  });
}

dropBoxL.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropBoxL.addEventListener("drop", function () {
  if (draggedLegs && !dropBoxL.querySelector(".legs")) {
    const newIdL = draggedLegs.dataset.id;

    if (droppedIdL !== null) {
      const previousLeg = document.querySelector(
        `.leg[data-id="${droppedIdL}"]`
      );
      if (previousLeg) {
        previousLeg.style.display = "block";
      }
      dropBoxL.innerHTML = "";
    }
    // Clone and drop the dragged image
    const cloneL = draggedLegs.cloneNode(true);
    dropBoxL.appendChild(cloneL);

    // Hide the original image in the list
    draggedLegs.style.display = "none";

    // Save the current dropped ID
    droppedIdL = newIdL;
    // Re-attach color cycling logic if it's a singlet
    if (cloneL.dataset.id === "4") {
      let index = 0;
      const miniList = [
        "PSkirt.png",
        "BSkirt.png",
        "BrSkirt.png",
        "WSkirt.png",
      ];

      cloneL.addEventListener("click", function () {
        index = (index + 1) % miniList.length;
        cloneL.src = miniList[index];
      });
    }
    if (cloneL.dataset.id === "5") {
      // or clone.id === "singlet" if using id
      let index = 0;
      const shortList = [
        "BlShort.png",
        "BShort.png",
        "BrShort.png",
        "GShort.png",
      ];

      cloneL.addEventListener("click", function () {
        index = (index + 1) % shortList.length;
        cloneL.src = shortList[index];
      });
    }
    if (cloneL.dataset.id === "6") {
      let index = 0;
      const cargoList = [
        "BlPants.png",
        "BPants.png",
        "BrPants.png",
        "GPants.png",
      ];

      cloneL.addEventListener("click", function () {
        index = (index + 1) % cargoList.length;
        cloneL.src = cargoList[index];
      });
    }
  }
});

// const legs = document.querySelectorAll(".leg");
// console.log(legs);

// let draggedLegs = null;

// const dropBoxL = document.querySelector(".droppant");
// dropBoxL.innerHTML = "";
// for (let i = 0; i < legs.length; i++) {
//   legs[i].addEventListener("dragstart", function () {
//     draggedLegs = legs[i];
//     dropBoxL.innerHTML = "";
//   });
// }

// dropBoxL.addEventListener("dragover", function (e) {
//   e.preventDefault();
// });

// dropBoxL.addEventListener("drop", function () {
//   if (draggedLegs && !dropBoxL.querySelector(".legs")) {
//     const cloneL = draggedLegs;
//     dropBoxL.appendChild(cloneL);
//   }
// });

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

const longC = document.querySelector("#long");
console.log(longC);
const longList = ["GLong.png", "WLong.png", "PLong.png", "BLong.png"];

longC.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % longList.length;
  longC.src = longList[currentIndex];
});

const miniC = document.querySelector("#mini");
console.log(miniC);
const miniList = ["PSkirt.png", "BSkirt.png", "BrSkirt.png", "WSkirt.png"];

miniC.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % miniList.length;
  miniC.src = miniList[currentIndex];
});

const shortC = document.querySelector("#shorts");
console.log(shortC);
const shortList = ["BlShort.png", "BShort.png", "BrShort.png", "GShort.png"];

shortC.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % shortList.length;
  shortC.src = shortList[currentIndex];
});

const cargoC = document.querySelector("#cargo");
console.log(cargoC);
const cargoList = ["BlPants.png", "BPants.png", "BrPants.png", "GPants.png"];
cargoC.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % cargoList.length;
  cargoC.src = cargoList[currentIndex];
});
