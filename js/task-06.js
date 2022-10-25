const input = document.querySelector("#validation-input");

// input.addEventListener("blur", onInputChange);

// function onInputChange(event) {

//   if (event.currentTarget.value.length == input.dataset.length) {
//     input.classList.add("valid");
//     // console.log(input.classList)
//   }
//    else {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//   }
//   console.log(event.currentTarget.value.length);
//   console.log(input.classList);
// }


// input.addEventListener("blur", () => {
//   if (input.value.length == input.dataset.length) {
//     return input.classList.add("valid");
//   }
//   return input.classList.add("invalid");
// });



input.addEventListener("blur", onValidInput);

function onValidInput() {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }

  console.log(event.currentTarget.value.length);
//   console.log(input.dataset.length);
}
