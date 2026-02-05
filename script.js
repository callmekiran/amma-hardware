function openWhatsApp() {
  window.open("https://wa.me/919995040555?text=Hello%20I%20want%20to%20order");
}
function openWhatsApp() {
  window.open("https://wa.me/919995040555?text=Hello Amma Hardware, I want to enquire about your products");
}

// ===============================
// IMAGE POPUP SCRIPT
// ===============================

const popup = document.createElement("div");
popup.className = "popup";
popup.innerHTML = `
  <span class="close">&times;</span>
  <img src="" alt="Popup Image">
`;
document.body.appendChild(popup);

const popupImg = popup.querySelector("img");
const closeBtn = popup.querySelector(".close");

// Attach click to all product images
document.querySelectorAll(".product img").forEach(img => {
  img.addEventListener("click", e => {
    e.stopPropagation();
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

// Close when clicking X
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Close when clicking background
popup.addEventListener("click", e => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
