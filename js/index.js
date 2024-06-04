// import { CardComponent } from "../components/CardComponent.js";
// import { products } from "../data/products.js";
// let renderArea = document.querySelector("#renderArea");

// // RENDER PRODUCT
// products.map((product) => (renderArea.innerHTML += CardComponent(product)));

import { NewCardComponent } from "../components/NewCardComponent.js";
let renderArea = document.querySelector("#renderArea");

const Base_Url = "http://127.0.0.1:5500/data/products.json";
fetch(Base_Url)
  .then((res) => res.json())
  .then((data) => {
    let products = data;
    products.map(
      (product) => (renderArea.innerHTML += NewCardComponent(product))
    );
  }); //json() = convert js to object
