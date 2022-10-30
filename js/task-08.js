const form = document.querySelector(".login-form");

// const formLogin = {};

const email = form[0];
const password = form[1];

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (email.value === "" || password.value === "") {
    alert(`всі поля повинні бути заповнені`);
  } else {
    const formElements = event.currentTarget;
    const mailValue = formElements.email.value;
    const passwordValue = formElements.password.value;

    console.log(formElements);
    console.log("Mail:", mailValue);
    console.log("Password:", passwordValue);
  }
  form.reset();
}

// console.log(event);
//   return form.reset();
//   // console.log(`email: ${email.value}, password: ${password.value}`);
