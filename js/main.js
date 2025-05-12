let clickIcon = document.querySelector("header nav .icons");
let disUL = document.querySelector("header nav ul");

clickIcon.onclick = function () {
    disUL.classList.toggle("active");
};