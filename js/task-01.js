const navElement = document.querySelector('#categories');
const item = navElement.querySelectorAll('.item');

console.log(`Number of categories: ${item.length}`);
// console.log("");


Array.prototype.forEach.call(item, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsLength}`);
});

    // console.log("Category:", element.querySelector('h2').textContent);
    // console.log("Elements:", element.querySelectorAll('ul li').length);



// for (let i = 0; i < item.length; i++) {
//     console.log("Category: " + listItem[i].querySelector('h2').textContent);
//     console.log("Elements: " + listItem[i].querySelectorAll('ul li').length);
//     console.log("");
// }

