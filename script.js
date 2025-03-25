const header = document.querySelector("header");

function headerChange() {
    header.innerText = "My Info";
}

header.addEventListener("mouseenter", headerChange);

const a = document.querySelectorAll(".a");

function changeColor() {
    a.forEach(item => {
        item.style.color = "blue";

    });
}

document.querySelector("#text-color").addEventListener("click", changeColor);

