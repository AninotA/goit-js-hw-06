
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const input = document.querySelector('input');
const add = document.querySelector('.create');
const des = document.querySelector('.destroy');
const boxes = document.querySelector('#boxes');
let size = 30;
add.addEventListener('click', onClick);
des.addEventListener('click', onDestroy);

function onClick() {
    const total = input.value;
    // https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
    const markup = [];
    for (let i = 1; i <= total; i += 1) {
        size += 10;
        const div = document.createElement('div');
        div.style.width = size + 'px';
        div.style.height = size + "px";
        div.style.backgroundColor = getRandomHexColor()
        markup.push(div)
    }
    boxes.append(...markup)
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

function onDestroy() {
    // while (boxes.firstChild) {
    //     boxes.firstChild.remove();
    //   }
    input.value = "";
    boxes.innerHTML = "";
    size = 30
}



// const arr = ['реклама', 'гойда', 'мопед', 'купи'];

// setInterval(() => {
//     const random = Math.round(Math.random() * 3)
//    console.log(arr[random]);
//     input.value = arr[random]
// }, 500)