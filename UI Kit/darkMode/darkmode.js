function darkMode() {
  let element = document.body;
  let content = document.getElementById("DarkMode");
  element.className = "dark-mode";
  content.innerText = "Dark Mode is ON";
}
function lightMode() {
  let element = document.body;
  let content = document.getElementById("DarkMode");
  element.className = "light-mode";
  content.innerText = "Dark Mode is OFF";
}