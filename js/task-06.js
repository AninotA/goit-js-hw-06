const input = document.querySelector("#validation-input");

// input.addEventListener("blur", onInputChange);

// function onInputChange(event) {

//   if (event.currentTarget.value.length == input.dataset.length) {
//     input.classList.remove("invalid");
//     input.classList.add("valid");
  
//   }
//    else {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//   }
//   console.log(event.currentTarget.value.length);
//   console.log(input.classList);
// }



input.addEventListener("blur", onValidInput);

function onValidInput() {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }

  console.log(event.currentTarget.value.length);

}
