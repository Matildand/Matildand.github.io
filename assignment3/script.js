// To clear away the instructions from over the game
// retreiving the objects of the button and the instruction cover
const play = document.querySelector("#playbutton");
console.log(play);
const cover = document.querySelector(".instructions");
console.log(cover);

play.addEventListener("click", function () {
  // to clear away the cover
  cover.style.display = "none";
});

//retreiving the tops via their class to get them all at once
const tops = document.querySelectorAll(".top");
console.log(tops);

let draggedTops = null;
let droppedId = null;

//retreiving the dropbox for the tops
const dropBoxT = document.querySelector(".droptop");
//ensuring its empty
dropBoxT.innerHTML = "";

//adding an event listener to all items in the Nodelist which is defined by all objects containing the class top
for (let i = 0; i < tops.length; i++) {
  // for all objects on dragstart they become a draggedTops, and the dropzone clears of any clothes that maybe have been previously added.
  tops[i].addEventListener("dragstart", function () {
    console.log(tops[i].classList);
    draggedTops = tops[i];
    dropBoxT.innerHTML = "";
  });
}

// ensures that when the action isnt completed it is cancelled
dropBoxT.addEventListener("dragover", function (e) {
  e.preventDefault();
});

// actions when something is dropped into the top drop zone
dropBoxT.addEventListener("drop", function () {
  // ensures that only items with the class of top can be dropped into the zone
  if (draggedTops && !dropBoxT.querySelector(".top")) {
    // collects the data-id of the object
    const newId = draggedTops.dataset.id;

    // checks to see if any objects with the class top have previously been added to the drop zone and as such has been hidden in the clothes rack
    if (droppedId !== null) {
      const previousTop = document.querySelector(
        `.top[data-id="${droppedId}"]`
      );
      // if found one, this ensures that it becomes visable again in the list
      if (previousTop) {
        previousTop.style.display = "block";
      }
      // and clears from the drop zone
      dropBoxT.innerHTML = "";
    }
    // to have the new image appear in the drop zone a clone is made and placed in the zone, leaving the original image in the list
    const clone = draggedTops.cloneNode(true);
    dropBoxT.appendChild(clone);

    // this adds a styling to the original image in the list to make it invisible once the clone is dropped
    draggedTops.style.display = "none";

    // recreates a record so when a new item is added later, it knows what to make reappear.
    droppedId = newId;

    // Because the clones are created to be applied to the model, the eventlisteners added to the original objects arent also tranferred over,
    // resulting in the colour cycling not working after the clothes are applied to the model.

    // by adding this code it recoonnects the eventlisteners again per item

    // checks to see if the data-id is 1, refferring to the singlet item. then copies the function written below to add the cycling.
    if (clone.dataset.id === "1") {
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
    // checks to see if the data-id is 2, reffering to the tshirts
    if (clone.dataset.id === "2") {
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
      let index = 0;
      const longList = ["GLong.png", "WLong.png", "PLong.png", "BLong.png"];

      clone.addEventListener("click", function () {
        index = (index + 1) % longList.length;
        clone.src = longList[index];
      });
    }
  }
});

// repeated same code as above for legs, sometimes adding an L to the end of element names to seperate them
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
  if (draggedLegs && !dropBoxL.querySelector(".leg")) {
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

    const cloneL = draggedLegs.cloneNode(true);
    dropBoxL.appendChild(cloneL);

    draggedLegs.style.display = "none";

    droppedIdL = newIdL;

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

// collects the mini-box from the html
const skin1 = document.querySelector("#mini-box1");
console.log(skin1);
// on click the image with the id = girl is changed to the new image
skin1.addEventListener("click", function () {
  document.getElementById("girl").src = "1Model.png";
});

// repeated for each skin tone
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

// the colour cycling functions

// Singlet
// retreives the object with the id = singlet
const singletC = document.querySelector("#singlet");
console.log(singletC);
// creates a list of all possible colour variants
const singletList = [
  // i tried to have the list for each item start with its default colour, to ensure that it would appear to begin at the start of the cycle
  // rather than repeating the first colour before some have appeared once
  "WSinglet.png",
  "PSinglet.png",
  "BSinglet.png",
  "GSinglet.png",
];
// starts the list at zero
let currentIndex = 0;

singletC.addEventListener("click", function () {
  // on click the index moves throgh each number of the cycle, starting again once its gets to the end
  currentIndex = (currentIndex + 1) % singletList.length;
  // and changing the image to reflect the new item
  singletC.src = singletList[currentIndex];
});

// repeated for each item of clothing

// Tshirt
const tShirtC = document.querySelector("#tshirt");
console.log(singletC);
// for the tops, because they all have the same colour variants i tried to have their lists follow the same colour order just with different starting positions,
// so it would be easier for users to get to a specific colour they wanted
const tShirtList = ["PTshirt.png", "BTshirt.png", "GTshirt.png", "WTshirt.png"];

tShirtC.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % tShirtList.length;
  tShirtC.src = tShirtList[currentIndex];
});

// Long sleeve
const longC = document.querySelector("#long");
console.log(longC);
const longList = ["GLong.png", "WLong.png", "PLong.png", "BLong.png"];

longC.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % longList.length;
  longC.src = longList[currentIndex];
});

// Skirt
const miniC = document.querySelector("#mini");
console.log(miniC);
// although the pants have more variety in colour as i tried to have realistic options, i still tried to keep a similar order of
// colour - naturalcolour - black - brown
const miniList = ["PSkirt.png", "WSkirt.png", "BSkirt.png", "BrSkirt.png"];

miniC.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % miniList.length;
  miniC.src = miniList[currentIndex];
});

// Shorts
const shortC = document.querySelector("#shorts");
console.log(shortC);
// in the shorts and cargo pants this manefested as
// green - blue - black - brown
// as the blue of denim i felt counted as a natural colour, and closest to the white option of the skirt
const shortList = ["BlShort.png", "BShort.png", "BrShort.png", "GShort.png"];

shortC.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % shortList.length;
  shortC.src = shortList[currentIndex];
});

// Cargo pants
const cargoC = document.querySelector("#cargo");
console.log(cargoC);
const cargoList = ["BPants.png", "BrPants.png", "GPants.png", "BlPants.png"];
cargoC.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % cargoList.length;
  cargoC.src = cargoList[currentIndex];
});

// Reset button
// retreives the object from the html
const reset = document.querySelector(".bottom-bar");
console.log(reset);
reset.addEventListener("click", function () {
  // on click clears both top and bottom drop boxes
  dropBoxT.innerHTML = "";
  dropBoxL.innerHTML = "";
  // and makes any hidden obejcts visable again
  draggedTops.style.display = "block";
  draggedLegs.style.display = "block";
  // in showing people my WIP, it was mentioned a few times why the reset button doesnt also reset any skin tone options that may have been altered
  // i purposly didnt add this in as i wanted to avoid making any kind of implicit comment on 'default' skin tones
  // also the need for a reset button comes from the lack of ability otherwise to get all the clothes back to the rack at once, whereas the skin tone can be
  // adjusted at anytime
});
