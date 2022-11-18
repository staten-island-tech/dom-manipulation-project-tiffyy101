const DOMSelectors = {
    text: document.getElementById("text"),
    form: document.getElementById("form"),
    box: document.getElementById("box"),
    button: document.getElementById("btn"),
    flavor: document.getElementById("flavor"),
    topping1: document.getElementById("topping1"),
    topping2: document.getElementById("topping2"),
    url: document.getElementById("url"),
};
console.log(DOMSelectors);

function background(background){
    background.style.backgroundColor = "lightblue";
}
    background(DOMSelectors.button);

DOMselectors.form.addEventListener("submit", function (event) {
    event.preventDefault(event);
    input();
  });
  function input() {
    DOMselectors.display.insertAdjacentHTML(
      "beforeend",
  
      `<div class="display-card">
          <img class="display-img" src=${DOMselectors.flavor.value} />
          <h2 class="display-artist">${DOMselectors.topping1.value}</h2>
          <h3 class="display-album">${DOMselectors.topping2.value}</h3>
          <h4 class="display-album">${DOMselectors.url.value}</h4>
          <button class="remove btn">remove</button>
        </div>`
    );
  } 
