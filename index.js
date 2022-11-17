const DOMSelectors = {
    button: document.getElementById("button"),
    label: document.getElementById("name"),
    input: document.getElementById("text"),
    list: document.querySelectorAll(".list"),
    output: document.getElementById("output")
};

console.log(DOMSelectors.input);
console.log(DOMSelectors.button);
console.log(DOMSelectors.label);
console.log(DOMSelectors.list);

const text = document.getElementById("text");
const output = document.getElementById("output");

text.addEventListener('submit', (event) => output.textContent = `You pressed "${event.key}".`);

function backgroundandText (background, text) {
    background.style.backgroundColor = "yellow";
    text.style.fontSize = "20px";
}

DOMSelectors.form.addEventListener('submit', function() {
    document.textContent.style.color = 'brown';
});
