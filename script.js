let button = document.getElementById("btn");
let p = document.getElementById("prgph");

button.addEventListener("click", showMessage);

function showMessage() {
    if (p.textContent === "") {
        p.textContent = "Hello! This is my first project!";
    } else {
        p.textContent = "";
    }
}

