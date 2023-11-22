var ulElement = document.querySelector("#container ul");
var secondLiElement = ulElement.querySelector("li:nth-child(2)");

var newLiElement = document.createElement("li");
newLiElement.textContent = "Пункт 4";

ulElement.appendChild(newLiElement);

function changeColor() {
  var colorDiv = document.getElementById("colorDiv");
  var randomColor = getRandomColor();
  colorDiv.style.backgroundColor = randomColor;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function displayWindowSize() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  var sizeDisplay = document.getElementById("sizeDisplay");
  sizeDisplay.innerHTML =
    "Ширина окна: " + windowWidth + "px, Высота окна: " + windowHeight + "px";
}

window.onload = displayWindowSize;

window.onresize = displayWindowSize;

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Действие по умолчанию предотвращено!");
  alert("Действие по умолчанию предотвращено!");
});
