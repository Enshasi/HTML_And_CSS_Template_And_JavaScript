//skills => progress fill

let skilles = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".prog span");

//Count
let myCount = document.querySelectorAll(".box .one");
let section = document.querySelector(".section_box");
let states = false;

// myCount.forEach((abd) => startCounter(abd));

window.onscroll = function() {
    if (window.scrollY >= section.offsetTop) {
        if (!states) {
            myCount.forEach((abd) => startCounter(abd));
        }
        states = true;
    }

    if (window.scrollY >= skilles.offsetTop) {
        spans.forEach((el) => {
            el.style.width = el.dataset.progress;
        });
    }
};

function startCounter(el) {
    let data_count = el.dataset.goal;
    let count = setInterval(function() {
        el.textContent++;
        if (el.textContent === data_count) {
            clearInterval(count);
        }
    }, 2000 / data_count);
}

// startCounter(myCount[0]);

//..................................................................
//change imge and class active
let shuffle = document.querySelectorAll(".shuffle li");
let image = document.querySelectorAll(".box img");

shuffle.forEach((el) => {
    el.addEventListener("click", addActive);
    el.addEventListener("click", changeImage);
});

function addActive() {
    shuffle.forEach((ele) => {
        ele.classList.remove("active");
        this.classList.add("active");
    });
}

function changeImage() {
    image.forEach((img) => {
        img.style.display = "none";
    });

    document.querySelectorAll(this.dataset.car).forEach((el) => {
        el.style.display = "block";
        console.log(this.dataset.car);
    });
}
//..................................................................
//Show And hide  the menu
let menu = document.querySelector(".toggle-menu");
let links = document.querySelector(".links");
menu.onclick = function() {
    links.classList.toggle("lin");
};
//..................................................................
let linksScroll = document.querySelectorAll("header .links li > a");
// console.log(linksScroll);
linksScroll.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(`#${e.target.dataset.scroll}`).scrollIntoView({
            behavior: "smooth",
        });
        // console.log(`#${e.target.dataset.scroll}`);
    });
});