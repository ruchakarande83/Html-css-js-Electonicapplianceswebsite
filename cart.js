function addToCart(button) {
  let card = button.parentElement;
  let name = card.querySelector("h3").innerText;
  let price = card.querySelector("p").innerText;
  let image = card.querySelector("img").src;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price, image });
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart!");
}
