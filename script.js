// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Welcome message button
document.getElementById("welcomeButton").addEventListener("click", () => {
  document.getElementById("welcomeMessage").textContent =
    "Welcome to Crescent University! We are glad you are exploring your future with us.";
});

// Demo admission form: validates required fields and displays a local confirmation.
// This static assignment does not send data to a server.
document.getElementById("admissionForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("fullName").value.trim();
  const program = document.getElementById("program").value;
  document.getElementById("formMessage").textContent =
    `Thank you, ${name}! Your inquiry for ${program} has been recorded in this demo.`;
  event.target.reset();
});
