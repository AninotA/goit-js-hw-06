const inputSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputSize.addEventListener("input", onInputChange);

function onInputChange(event) {
    text.style.fontSize = event.currentTarget.value + "px";
    console.log(text);
}
