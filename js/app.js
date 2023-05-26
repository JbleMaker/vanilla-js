const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

const handleClick = (event) => {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN);
  paintGreeting(username);
};

const paintGreeting = (username) => {
  greeting.classList.remove(HIDDEN);
  greeting.innerText = `Hello ${username}`;
};

const savedUSERNAME = localStorage.getItem(USERNAME_KEY);

if (savedUSERNAME === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", handleClick);
} else {
  paintGreeting(savedUSERNAME);
}
