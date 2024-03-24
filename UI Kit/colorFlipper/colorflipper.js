const btn = document.querySelector(".btn");
const hexCode = document.querySelector(".hexCode");

const randomColorCode = ["#BBA6DD", "#FFB88A", "#FBC2C2", "#B4CFA4", "#A0C5E3"];

btn.addEventListener("click", () => {
  const random =
    randomColorCode[Math.floor(Math.random() * randomColorCode.length)];
  document.body.style.background = random;

  hexCode.textContent = random;
});