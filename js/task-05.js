const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
const texStart = textOutput.textContent;

// const onInput = ({ currentTarget }) => {
//   textOutput.textContent = currentTarget.value;

//   if (textOutput.textContent === "") {
//     textOutput.textContent = "Anonymous";
//   }
// };
textInput.addEventListener("input", event => {
    if (event.currentTarget.value) {
        textOutput.textContent = event.currentTarget.value;
        return;
    }

});
