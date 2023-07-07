const heading = document.querySelector(".heading");
const dice = `assets/images/dice${Math.floor(Math.random() * 6) + 1}.png`;
const dice2 = `assets/images/dice${Math.floor(Math.random() * 6) + 1}.png`;

const imgElement = document.querySelector("#diceImage");
const imgElement2 = document.querySelector("#diceImage2");

const player1Result = (imgElement.src = dice);
const player2Result = (imgElement2.src = dice2);

if (player1Result > player2Result) {
  heading.innerHTML = "Player 1 has Won";
} else if (player1Result === player2Result) {
  heading.innerHTML = "Players have tied";
} else {
  heading.innerHTML = "Player 2 has Won";
}
