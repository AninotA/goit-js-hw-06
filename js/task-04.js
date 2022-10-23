// const handleClick = () => {
//   console.log("click event listener callback");
// };
// counterValue.addEventListener("click", handleClick);

let counterValue = 0;
const btnDown = document.querySelector('[data-action="decrement"]');
const btnUp = document.querySelector('[data-action="increment"]');

const span = document.querySelector("#value");

const decrement = () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    document.getElementById("value").textContent = counterValue;
  };

  btnDown.addEventListener('click', decrement);
  btnUp.addEventListener('click', increment);

  console.log(counterValue);
  console.log(btnDown);
  console.log(btnUp);