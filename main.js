const container = document.querySelector(".container");
const square = create("div", "class", "square");
container.appendChild(square);


let squareX = 150;
let squareY = 100;
square.style.left = `${squareX}px`;
square.style.top = `${squareY}px`;

square.addEventListener("mousedown", () => {
    console.log('mouseDown');
    square.classList.toggle("squareClicked");
})
square.addEventListener("mousemove", () => {
    console.log('mousemove');

})
square.addEventListener("mouseup", () => {
    console.log('mouseup');
    square.classList.toggle("squareClicked");
})

function create(tagName, attributeType, aValue) {
    const tag = document.createElement(tagName);
    tag.setAttribute(attributeType, aValue);
    return tag;
}