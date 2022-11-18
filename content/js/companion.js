const container = document.querySelector(".tab");
const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

container.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  const element = document.getElementById(id);
  if (id) {
    buttons.forEach((item) => {
      item.classList.remove("btn-active");
    });
    e.target.classList.add("btn-active");
    e.target.querySelector("img").classList.add("active");

    contents.forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  }
});
