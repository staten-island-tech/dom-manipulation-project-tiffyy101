const DOMSelectors = {
  text: document.getElementById("text"),
  form: document.getElementById("form"),
  box: document.getElementById("box"),
  button: document.getElementById("btn"),
  flavor: document.getElementById("flavor"),
  topping1: document.getElementById("topping1"),
  topping2: document.getElementById("topping2"),
  choice: document.getElementById("choice"),
  display: document.getElementById("display")
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
  remove();
  function creation() {
    DOMSelectors.button.insertAdjacentHTML(
      `afterend`,
      `<div class="iceCreamMaker">
      <h2>You have created a ${flavor} ice cream with ${topping1} and ${topping2} in a nice ${choice}!</h2>
      <button class="remove">Clear</button>
  </div>`
    );
    DOMSelectors.flavor.value = "";
    DOMSelectors.topping1.value = "";
    DOMSelectors.topping2.value = "";
  }
})

function remove() {
  let remove = document.querySelectorAll(".remove");
  remove.forEach((el) => {
    el.addEventListener("click", function (el) {
      this.parentElement.remove();
  document.getElementById('form').reset();
    });
  });
}
