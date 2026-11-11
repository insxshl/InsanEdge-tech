// InsanEdge.tech — edit these values before publishing.
const CONFIG = {
  whatsappNumber: "91XXXXXXXXXX", // Example: 919876543210 (country code + number, no + or spaces)
  instagramUrl: "https://www.instagram.com/insanedge.tech/",
  email: "hello@insanedge.tech"
};

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll("[data-package]").forEach(link => {
  link.addEventListener("click", () => {
    const serviceSelect = document.querySelector('select[name="service"]');
    serviceSelect.value = "Social media management";
    document.querySelector('textarea[name="message"]').value =
      `I'm interested in the ${link.dataset.package} social media management package. Please share the next steps.`;
  });
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = [
    "Hello InsanEdge.tech! I'd like to enquire about your services.",
    "",
    `Name: ${form.get("name")}`,
    `Business: ${form.get("business") || "Not provided"}`,
    `Phone: ${form.get("phone")}`,
    `Service: ${form.get("service")}`,
    `Details: ${form.get("message") || "Not provided"}`
  ].join("\n");

  if (!/^91\d{10}$/.test(CONFIG.whatsappNumber)) {
    alert("Please add your WhatsApp number in script.js first. Use country code + number, for example 919876543210.");
    return;
  }
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});
