// ================================
// NaturaGlow - JavaScript
// ================================

// =================================
// Mobile Navigation
// =================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Close menu after clicking a navigation link
    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
        });
    });
}


// ================================
// Dynamic Footer Year
// ================================

const currentYear = new Date().getFullYear();

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {

    footerYear.innerHTML =
        `&copy; ${currentYear} NaturaGlow. All rights reserved.`;

}


// ================================
// Contact Form Validation
// ================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const name =
            document.getElementById("name").value.trim();
        const email =
            document.getElementById("email").value.trim();
        const subject =
            document.getElementById("subject").value.trim();
        const message =
            document.getElementById("message").value.trim();

        // Error elements
        const nameError =
            document.getElementById("name-error");
        const emailError =
            document.getElementById("email-error");
        const subjectError =
            document.getElementById("subject-error");
        const messageError =
            document.getElementById("message-error");
        const successMessage =
            document.getElementById("form-success");

        // Clear previous messages
        nameError.textContent = "";
        emailError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        let isValid = true;


        // ================================
        // Name Validation
        // ================================

        if (name === "") {
            nameError.textContent =
                "Please enter your name.";
            isValid = false;
        }
        else if (name.length < 2) {
            nameError.textContent =
                "Name must contain at least 2 characters.";
            isValid = false;
        }

        // ================================
        // Email Validation
        // ================================

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            emailError.textContent =
                "Please enter your email address.";
            isValid = false;
        }
        else if (!emailPattern.test(email)) {
            emailError.textContent =
                "Please enter a valid email address.";
            isValid = false;
        }

        // ================================
        // Subject Validation
        // ================================

        if (subject === "") {
            subjectError.textContent =
                "Please enter a subject.";
            isValid = false;
        }
        else if (subject.length < 3) {
            subjectError.textContent =
                "Subject must contain at least 3 characters.";
            isValid = false;
        }

        // ================================
        // Message Validation
        // ================================

        if (message === "") {
            messageError.textContent =
                "Please enter your message.";
            isValid = false;
        }
        else if (message.length < 10) {
            messageError.textContent =
                "Message must contain at least 10 characters.";
            isValid = false;
        }

        // ================================
        // Successful Submission
        // ================================

        if (isValid) {
            successMessage.textContent =
                "Thank you! Your message has been submitted successfully.";
            contactForm.reset();
        }
    });

}


