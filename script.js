// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Form Validation (Basic Example)
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.border = "2px solid red"; // Highlight invalid fields
        } else {
            input.style.border = "1px solid #ccc"; // Reset border for valid fields
        }
    });

    if (!isValid) {
        e.preventDefault(); // Prevent form submission if validation fails
        alert("Please fill in all fields correctly.");
    }
});

// Add more custom JS here if needed
