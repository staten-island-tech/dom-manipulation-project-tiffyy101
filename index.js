const DOMSelctors = {
    button: document.getElementById("btn"),
    box: document.getElementById("container-box"),
    input: document.querySelector('#input'),
};

DOMSelectors.button.addEventListener("click", function(){
    let input = DOMSelectors.input.value;
    DOMSelectors.box.insertAdjacentHTML("beforehand", '<p>${input}</p>');
    DOMSelectors.input.value = "";
});