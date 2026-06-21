const products = [
  { id: 1, name: "Product 1", price: 3, image: "https://placehold.co/300" },
  { id: 2, name: "Product 2", price: 5, image: "https://placehold.co/300" },
  { id: 3, name: "Product 3", price: 1, image: "https://placehold.co/300" }
];

const products = [
  { id: 1, name: "Product 1", price: 3, image: "https://placehold.co/300" },
  { id: 2, name: "Product 2", price: 5, image: "https://placehold.co/300" },
  { id: 3, name: "Product 3", price: 1, image: "https://placehold.co/300" }
];

function getParam(param) {
  const paramString = window.location.search;
  const params = new URLSearchParams(paramString);
  return params.get(param);
}

function productTemplate(product) {
  return `<section class="product">
  <img src="${product.image}" alt="${product.name}">
  <div class="product__details">
    <h2>${product.name}</h2>
    <p>Price: $${product.price}</p>
    </div>
    </section>`;
}

function getProductDetails() {
  const id = getParam("productId");
  if (id) {
    const product = products.find((p) => p.id == id);
    if (product) {
      output("main", productTemplate(product));
    }
  }
}

function output(selector, markup) {
  const element = document.querySelector(selector);
  // using insertAdjacentHTML allows us to insert the new markup at the bottom of main...without losing the title that was already in there.
  element.insertAdjacentHTML("beforeEnd", markup);
}

getProductDetails();