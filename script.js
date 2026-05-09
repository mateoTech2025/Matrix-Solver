
function buttonClick() {
    alert("The button is click")
};

const btn = document.getElementById("number-btn");

btn.addEventListener("click", buttonClick, {once: false})

console.log("HEllo world!");
