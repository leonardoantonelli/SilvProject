var toggleBtn = document.getElementById("toggle-btn");
toggleBtn.onclick = function () {
  this.classList.toggle("toggle-btn--dark");
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    document.getElementById("demo").innerHTML =
      '<img class="divisorio" src="./assets/img/home/marro.png">';
  } else {
    document.getElementById("demo").innerHTML =
      '<img class="divisorio" src="./assets/img/home/63a8a2c7f3ba3771f8ebba51_Untitled design - 2022-12-25T141922.307.webp">';
  }
};
