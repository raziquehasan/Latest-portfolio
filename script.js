// Initialize AOS
AOS.init();

// Menu toggle fix (your nav links container has class "nav-links", not id)
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Dark mode toggle
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", darkToggle.checked);
});

// Contact form submission handling
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Simple validation check (HTML5 validation is already there)
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  // Optional: Email format validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please enter a valid email address.";
    return;
  }

  // If valid, simulate sending message (replace this with real backend later)
  formMessage.style.color = "#00e676"; // bright green
  formMessage.textContent = "Sending message...";

  // Simulate async sending with a timeout
  setTimeout(() => {
    formMessage.textContent = "Thank you for your message! I will get back to you soon.";
    contactForm.reset();
  }, 1500);
});
