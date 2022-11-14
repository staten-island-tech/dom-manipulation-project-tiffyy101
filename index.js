const DOMSelctors = {
    button: document.getElementById("btn"),
    box: document.getElementById("pink-box"),
    input: document.querySelector('#input'),
};

DOMSelectors.box.addEventListener("click", function () {
    let input = DOMSelectors.input.value;
    console.log(input);
    DOMSelectors.box.insertAdjacentHTML("beforebegin", '<h1>Favorite');
    DOMSelectors.input.value = "";
});