const DOMSelectors = {
    form: document.getElementById("form"),
    box: document.getElementById("box"),
    button: document.getElementById("btn"),
    fruit: document.getElementById("fruit"),
    iceCream: document.getElementById("iceCream"),
    drink: document.getElementById("drink"),
    url: document.getElementById("url"),
};
console.log(DOMSelectors);

function background(background){
    background.style.backgroundColor = "lightblue";
}

DOMSelectors.form.addEventListener("submit", function(submit){
    background(DOMSelectors.button),
})
