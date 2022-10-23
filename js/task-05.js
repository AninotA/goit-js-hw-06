const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const texStart = output.textContent;

// const onInput = ({ currentTarget }) => {
//   textOutput.textContent = currentTarget.value;

//   if (textOutput.textContent === "") {
//     textOutput.textContent = "Anonymous";
//   }
// };

// console.log(onInput);

textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    output.textContent = event.currentTarget.value;
    return;
  }
  output.textContent = texStart;
});
console.log(textInput);
