const container = document.querySelector(".container");
const square = create("div", "class", "square");
container.appendChild(square);


let squareX = 150;
let squareY = 100;
square.style.left = `${squareX}px`;
square.style.top = `${squareY}px`;
let drawBrakePoint = false;

square.addEventListener("mousedown", () => {
    console.log('mouseDown');
    square.classList.toggle("squareClicked");
    drawBrakePoint = !drawBrakePoint;
})
square.addEventListener("mousemove", (event) => {
    console.log('mousemove');
    if (drawBrakePoint) {
        squareX = event.clientX;
        squareY = event.clientY;
        square.style.left = `${squareX - 50}px`;
        square.style.top = `${squareY - 50}px`;
    }
})
square.addEventListener("mouseup", () => {
    console.log('mouseup');
    square.classList.toggle("squareClicked");
    drawBrakePoint = !drawBrakePoint;
})

function create(tagName, attributeType, aValue) {
    const tag = document.createElement(tagName);
    tag.setAttribute(attributeType, aValue);
    return tag;
}