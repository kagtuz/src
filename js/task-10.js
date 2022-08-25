function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const addButton = document.querySelector("[data-create]");
const delButton = document.querySelector("[data-destroy]");
const divElts = document.querySelector("#boxes");

addButton.addEventListener("click", addButtonHandler);
function addButtonHandler() {
  createBoxes(input.value);
}

delButton.addEventListener("click", () => {
  document.querySelectorAll(".box").forEach((e) => e.remove());
  input.value = "";
});

function createBoxes(number) {
  for (var divs = [], i = 0, size = 30; i < number; i++, size += 10) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.classList.add("box");
    div.style.height = `${size}px`;
    div.style.width = `${size}px`;
    divs.push(div);
    console.log(div);
  }
  divElts.append(...divs);

}