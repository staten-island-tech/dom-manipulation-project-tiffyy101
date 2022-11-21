const DOMSelectors = {
  text: document.getElementById("text"),
  form: document.getElementById("form"),
  box: document.getElementById("box"),
  button: document.getElementById("btn"),
  flavor: document.getElementById("flavor"),
  topping1: document.getElementById("topping1"),
  topping2: document.getElementById("topping2"),
  choice: document.getElementById("choice"),
  display: document.getElementById("display"),
  clear: document.querySelector("clear"),
};
console.log(DOMSelectors);

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  let flavor = DOMSelectors.flavor.value;
  let topping1 = DOMSelectors.topping1.value;
  let topping2 = DOMSelectors.topping2.value;
  let choice = DOMSelectors.choice.value;
  console.log(DOMSelectors);
  creation();
  clear();
  function creation() {
    DOMSelectors.button.insertAdjacentHTML(
      `afterend`,
      `<div class="iceCreamMaker">
      <h2>You have created a ${flavor} ice cream with ${topping1} and ${topping2}!</h2>
      <h3>${choice}</h3>
       <button class="clear">Clear</button>
  </div>`
    );
    DOMSelectors.flavor.value = "";
    DOMSelectors.topping1.value = "";
    DOMSelectors.topping2.value = "";
  }
})

function clear() {
  document.getElementById('form').reset();
}