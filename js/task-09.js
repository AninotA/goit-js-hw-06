function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bgColor = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", changeColor);

function changeColor() {
  
  

  const color = getRandomHexColor();
  document.body.setAttribute("style", `background-color: ${color}`);
  textColor.textContent = color;
}
console.log(getRandomHexColor());