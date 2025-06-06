const myCards = [
  { id: 1, name: "Queen", src: "queen.png" },
  { id: 2, name: "King", src: "king.png" },
  { id: 3, name: "Jack", src: "jack.png" },
];

let cardComposition = "";
for (let i = 0; i < myCards.length; i++) {
  cardComposition += `
    <div class="card-container">
            <div class="card" draggable="true">
              <div class="card-face"><img src="cloud.png" alt="Back" /></div>
              <div class="card-face flip">
                <img src="${myCards[i].src}" alt="${myCards[i].name}" />
              </div>
            </div>
          </div>
    `;
}

const deck = document.querySelector(".deck");
console.log(deck);
deck.innerHTML = cardComposition;

for (let i = 0; i < cardComposition.length; i++) {
  cards[i].addEventListener("dragstart", function () {
    draggedCard = cards[i];
  });
}
