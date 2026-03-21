const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
}

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        formMessage.textContent = "Děkujeme, zpráva byla připravena k odeslání.";
        contactForm.reset();
    });
}