const container = document.querySelector(".container");

function create(tagName, attributeType, aValue) {
    const tag = document.createElement(tagName);
    tag.setAttribute(attributeType, aValue);
    return tag;
}