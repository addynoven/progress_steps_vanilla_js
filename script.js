const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");
let active = null;
const progress_line = document.querySelector(".progress");
let current_active = 1;
console.log(circles);
next.addEventListener("click", () => {
    if (current_active < circles.length) {
        current_active++;
    } else {
        current_active = circles.length;
    }
    console.log(current_active);
    update();
});
prev.addEventListener("click", () => {
    if (current_active > 1) {
        current_active--;
    } else {
        current_active = 1;
    }
    console.log(current_active);
    update();
});

function update() {
    if (current_active === 1) {
        prev.disabled = true;
    } else if (current_active === 4) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
    circles.forEach((ele, idx) => {
        if (current_active >= idx + 1) {
            ele.classList.add("active");
        } else {
            ele.classList.remove("active");
        }
    });
    active = document.querySelectorAll(".active");
    progress_line.style.width =
        ((active.length - 1) / (circles.length - 1)) * 100 + "%";
}
