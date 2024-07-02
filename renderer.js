window.addEventListener("DOMContentLoaded", () => {
  window.api.menuEvent((value) => {
    document.querySelector("span").innerHTML = value;
  });
});
