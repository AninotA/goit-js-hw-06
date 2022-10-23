const txtInput = document.querySelector("#validation-input");


txtInput.addEventListener('blur', () => {
    if (txtInput.ariaValueMax.length === Number(txtInput.dataset.length)) {
        return txtInput.classList.add('valid');
    }
    return txtInput.classList.add('invalid');
});

// console.log(event.currentTarget.value.length);
console.log(txtInput.dataset.length);