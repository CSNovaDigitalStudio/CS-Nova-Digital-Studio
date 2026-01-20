// Simple form message (placeholder)
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});

function openPreview(url) {
  document.getElementById("previewFrame").src = url;
  document.getElementById("previewModal").style.display = "block";
}

function closePreview() {
  document.getElementById("previewFrame").src = "";
  document.getElementById("previewModal").style.display = "none";
}

// HAMBURGER MENU TOGGLE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
