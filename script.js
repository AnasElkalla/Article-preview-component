const popUp = document.querySelector(".pop");
const share = document.querySelector("button");
share.addEventListener("click", () => {
  //   popUp.style.display = "flex";
  popUp.classList.toggle("active");
  share.classList.toggle("active-button");
});
