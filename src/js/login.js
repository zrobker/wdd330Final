import { loadHeaderFooter, getParam } from "./utils.mjs";
import { login } from "./auth.mjs";

loadHeaderFooter();

const redirect = getParam("redirect");

document.getElementById("loginBtn").addEventListener("click", (e) => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  login({ email, password }, redirect);
});
