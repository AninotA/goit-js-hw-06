const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const texStart = output.textContent;

textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = texStart;
  }
});
console.log(textInput);
