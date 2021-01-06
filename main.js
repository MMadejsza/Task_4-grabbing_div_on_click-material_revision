const container = document.querySelector(".container");
const square = create("div", "class", "square");
container.appendChild(square);


let squareX = 150;
let squareY = 100;
let squareInsertX;
let squareInsertY;
square.style.left = `${squareX}px`;
square.style.top = `${squareY}px`;
let drawBrakePoint = false;

square.addEventListener("mousedown", (event) => {
    square.classList.toggle("squareClicked");
    drawBrakePoint = !drawBrakePoint;
    squareInsertX = event.offsetX;
    squareInsertY = event.offsetY;

})
square.addEventListener("mousemove", (event) => {
    if (drawBrakePoint) {
        squareX = event.clientX - squareInsertX;
        squareY = event.clientY - squareInsertY;
        square.style.left = `${squareX}px`;
        square.style.top = `${squareY}px`;
    }
})
square.addEventListener("mouseup", () => {
    square.classList.toggle("squareClicked");
    drawBrakePoint = !drawBrakePoint;
})

function create(tagName, attributeType, aValue) {
    const tag = document.createElement(tagName);
    tag.setAttribute(attributeType, aValue);
    return tag;
}