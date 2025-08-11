function showForm(method) {
  document.getElementById("upi-form").style.display = "none";
  document.getElementById("card-form").style.display = "none";

  if (method === "upi") {
    document.getElementById("upi-form").style.display = "block";
  } else if (method === "card") {
    document.getElementById("card-form").style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".payment-form button").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Payment Done Successfully!");
      localStorage.removeItem("selectedProduct"); // Clear stored data
      window.location.href = "appliances.html"; // Redirect to product page
    });
  });
});
