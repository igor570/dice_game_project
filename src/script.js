const heading = document.querySelector(".heading");
const playerRoll = Math.floor(Math.random() * 6) + 1;
const playerRoll2 = Math.floor(Math.random() * 6) + 1;
const dice = `assets/images/dice${playerRoll}.png`;
const dice2 = `assets/images/dice${playerRoll2}.png`;

const imgElement = document.querySelector("#diceImage");
const imgElement2 = document.querySelector("#diceImage2");

const player1Result = (imgElement.src = dice);
const player2Result = (imgElement2.src = dice2);

if (playerRoll > playerRoll2) {
  heading.innerHTML = "Player 1 has Won";
} else if (playerRoll === playerRoll2) {
  heading.innerHTML = "Players have tied";
} else {
  heading.innerHTML = "Player 2 has Won";
}
