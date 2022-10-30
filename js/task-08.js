const form = document.querySelector(".login-form");

// const formLogin = {};

// const email = form[0];
// const password = form[1];

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // formLogin.email = email.value;
  // formLogin.password = password.value;

  if (
    !form.elements.email.value.length ||
    !form.elements.password.value.length
  ) {
    alert(`всі поля повинні бути заповнені`);
  } else {
    const newObj = {};

    newObj.email = form.elements.email.value;
    newObj.password = form.elements.password.value;
    console.log(newObj);
  }

  // if (email.value === "" || password.value === "") {
  //   alert(`всі поля повинні бути заповнені`);
  // }else {
  //   const formElements = event.currentTarget;
  //   const mailValue = formElements.email.value;
  //   const passwordValue = formElements.password.value;

  //   console.log(formElements);
  //   console.log("Mail:", mailValue);
  //   console.log("Password:", passwordValue);
  // }
  form.reset();
}

// console.log(event);
//   return form.reset();
//   // console.log(`email: ${email.value}, password: ${password.value}`);
