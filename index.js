const DOMSelectors = {
    box: document.getElementById("box"),
    text: document.getElementById("text"),
    button: document.getElementById("btn"),
    fruit: document.getElementById("fruit"),
    iceCream: document.getElementById("iceCream"),
    drink: document.getElementById("drink"),
    url: document.getElementById("url"),
};
console.log(DOMSelectors);

function background(background){
    background.style.backgroundColor = "red";
    text.innerHTML = "it is now a diff color";
}

background(DOMSelectors.text);
