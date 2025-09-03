// ===== Contact Form Script =====
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  formMsg.textContent = "✅ Thank you! Your message has been received.";
  form.reset();
});
