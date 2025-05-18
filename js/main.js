// Start Selecting Elements
let scrollAnchor = document.querySelector(".scroll-to-top");
let header = document.querySelector("header");
// let headerUnderline = document.querySelector("header .container::before");
let clickIcon = document.querySelector("header nav .icons");
let disUL = document.querySelector("header nav ul");
scrollAnchor.style.visibility = "hidden";
scrollAnchor.style.opacity = "0";
let services = document.querySelector(".services");
let bigStatDiv = document.querySelector(".stat");
let statDivs = document.querySelectorAll(".stat .box div");
let filterUlLis = document.querySelectorAll(".portfolio ul.selection li");
let filterDivs = document.querySelectorAll(".portfolio .image-select");
// console.log(document.querySelector(`.portfolio .image-select${filterUlLis[0].dataset.img}`));
// End Selecting Elements
clickIcon.onclick = function () {
    disUL.classList.toggle("active");
};
let enabled = true;
window.onscroll = function () {
    if (enabled) {
        if (window.scrollY >= bigStatDiv.offsetTop) {
            function countup(el) {
                for (let i = 0; i < el.length; ++i) {
                    function counting() {
                        el[i].textContent++;
                        if (el[i].textContent === el[i].getAttribute("data")) {
                            clearInterval(counter);
                        }
                    }
                    let counter = setInterval(counting, 1, el);
                }
            }
            countup(statDivs);
            enabled = false;
        }
    }
    if (window.scrollY >= 600) {
        scrollAnchor.style.display = "flex";
        scrollAnchor.style.visibility = "visible";
        scrollAnchor.style.opacity = "1";
        scrollAnchor.style.cursor = "pointer";
    } else {
        scrollAnchor.style.display = "flex";
        scrollAnchor.style.visibility = "hidden";
        scrollAnchor.style.opacity = "0";
        scrollAnchor.style.cursor = "initial";
    }
    if (scrollY >= services.offsetTop) {
        header.style.backgroundColor = "rgb(15 116 143 / 0.7)";
    } else {
        header.style.backgroundColor = "transparent";
    }
}
filterUlLis.forEach((li) => {
    li.onclick = function () {
        filterUlLis.forEach((li) => {
            li.classList.remove("active");
            this.classList.add("active");
        })
        filterDivs.forEach((div) => {
            div.style.display = "none";
        })
        let targetDivs = document.querySelectorAll(`.portfolio .image-select${this.dataset.img}`);
        targetDivs.forEach((div) => {
            div.style.display = "block";
        })
    }
});