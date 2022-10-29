const form = document.querySelector(".login-form");

const email = form[0];
const password = form[1];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (email.value === "" || password.value === "") {
    alert(`всі поля повинні бути заповнені`);
  } else {
    const elements = event.currentTarget;
    const mailValue = elements.email.value;
    const passwordValue = elements.password.value;
    console.log("Mail:", mailValue);
    console.log("Password:", passwordValue);
  }
  console.log(event);
  return form.reset();
  // console.log(`email: ${email.value}, password: ${password.value}`);
});

