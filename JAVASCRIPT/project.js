const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const date = document.getElementById("date");
form.addEventListener("submit", (e) => {
  console.log("submitted");
  e.preventDefault();
  chekinputs();
});
function chekinputs() {
  const namevalue = username.value.trim();
  const emailvalue = email.value.trim();
  const passwordvalue = password.value.trim();
  const datevalue = date.value.trim();

  if (namevalue === "") {
    setErrorFor(username, "name cannot be blank ");
  } else {
    setSuccesFor(username);
  }

  if (emailvalue === "") {
    setErrorFor(email, "email cannot be blank ");
  } else {
    setSuccesFor(email);
  }

  if (passwordvalue === "") {
    setErrorFor(password, "password cannot be blank ");
  } else {
    setSuccesFor(password);
  }
  if (datevalue === "") {
    setErrorFor(date, "date cannot be blank ");
  } else {
    setSuccesFor(date);
  }
}

const form1 = document.getElementById("form1");
const username1 = document.getElementById("username1");
const email1 = document.getElementById("email1");
const message1 = document.getElementById("message");
form1.addEventListener("submit", (e) => {
  console.log("submitted");
  e.preventDefault();
  chekinputsreg();
});
function chekinputsreg() {
  const username1value = username1.value.trim();
  const email1value = email1.value.trim();
  const message1dvalue = message1.value.trim();
  if (username1value === "") {
    setErrorFor(username1, "name cannot be blank ");
  } else {
    setSuccesFor(username1);
  }

  if (email1value === "") {
    setErrorFor(email1, "email cannot be blank ");
  } else {
    setSuccesFor(email1);
  }

  if (message1dvalue === "") {
    setErrorFor(message1, "password cannot be blank ");
  } else {
    setSuccesFor(message1);
  }
}
function setErrorFor(input) {
  //   const formcontrol = input.parentElement;
  //   input.className = "error";
  if (input.className.includes("success")) {
    input.classList.remove("success");
  }

  input.classList.add("error");
}
function setSuccesFor(input) {
  //   const formcontrol = input.parentElement;
  //   input.className = "success";
  if (input.className.includes("error")) {
    input.classList.remove("error");
  }

  input.classList.add("success");
}
