const icon = document.querySelector("#icon");
const password = document.querySelector("#password");

icon.innerText = "🙈";

icon.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    icon.innerText = "🐵";
  } else {
    password.type = "password";
    icon.innerText = "🙈";
  }
});

const btn = document.querySelector("#btn");

const darkLightMode = () => {
  let mode = localStorage.getItem("mode");

  if (mode === "light") {
    btn.innerText = "🤍";
    document.body.style.backgroundColor = "pink";
  } else if (mode === "dark") {
    btn.innerText = "💗";
    document.body.style.backgroundColor = "white";
  }
};
darkLightMode();

btn.addEventListener("click", () => {
  let mode = localStorage.getItem("mode");

  if (mode === "light") {
    localStorage.setItem("mode", "dark");
  } else if (mode === "dark") {
    localStorage.setItem("mode", "light");
  }
  darkLightMode();
});
