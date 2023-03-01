//Funciones

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)]
}

let body = document.body
let cardContainer = document.getElementById("card-container");
let card = document.getElementById("card");

const cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const pintas = ["♦", "♥", "♠", "♣"];

card.style.display = "flex";
card.style.justifyContent = "space-around";
card.style.padding = "10px";
card.style.borderRadius = "20px";
card.style.border = "1px solid black";
card.style.height = "400px";
card.style.width = "300px"; // View Width
card.style.backgroundColor = "white";

body.style.backgroundColor = "green";

let color = "black"
let randomValue = randomElement(cardValues)
let randomPinta = randomElement(pintas)
if (randomPinta === "♦" || randomPinta === "♥") { color = "red" }


let cardTitleUp = document.createElement("h1");
cardTitleUp.innerHTML = randomPinta;
cardTitleUp.style.color = color
cardTitleUp.style.display = "flex";
cardTitleUp.style.justifyContent = "end";
cardTitleUp.style.fontSize = "50px";
cardTitleUp.style.paddingBottom = "2px"


let cardFigure = document.createElement("h1");
cardFigure.innerHTML = randomValue;
cardFigure.style.color = color;
cardFigure.style.marginTop = "140px";
cardFigure.style.fontSize = "100px";
cardFigure.style.paddingTop = "-200px";


let cardTitleDown = document.createElement("h1");
cardTitleDown.innerHTML = randomPinta;
cardTitleDown.style.transform = "rotate(180deg)";
cardTitleDown.style.color = color
cardTitleDown.style.fontSize = "50px";
cardTitleDown.style.paddingBottom = "5px";
cardTitleDown.style.justifyContent = "end";


card.appendChild(cardTitleUp);

card.appendChild(cardFigure);

card.appendChild(cardTitleDown);

