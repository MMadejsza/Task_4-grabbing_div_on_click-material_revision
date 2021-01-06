const container = document.querySelector(".container");
const square = create("div", "class", "square");
container.appendChild(square);


let squareX = 150;
let squareY = 100;
square.style.left = `${squareX}px`;
square.style.top = `${squareY}px`;

const mouseDown = () => {

}
const mouseMove = () => {

}
const mouseUp = () => {

}





function create(tagName, attributeType, aValue) {
    const tag = document.createElement(tagName);
    tag.setAttribute(attributeType, aValue);
    return tag;
}