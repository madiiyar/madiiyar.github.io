let tabs = document.querySelectorAll(".tabs h3");
console.log(tabs);
let tabContents = document.querySelectorAll(".tab-content div");
console.log(tabContents);
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});
