// ================================
// Hotel Rajdhani Website
// JavaScript File
// ================================

// Mobile Navigation Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
}

// ================================
// Booking Form Validation
// ================================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const room = document.getElementById("destination").value;

        const formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || phone === "" || room === "") {

            formMessage.style.color = "red";
            formMessage.textContent = "Please fill all the required fields.";

            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.style.color = "red";
            formMessage.textContent = "Please enter a valid email address.";

            return;
        }

        const phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {

            formMessage.style.color = "red";
            formMessage.textContent = "Please enter a valid 10-digit mobile number.";

            return;
        }

        formMessage.style.color = "green";
        formMessage.textContent =
            "Thank you! Your room booking request has been submitted successfully.";

        bookingForm.reset();

    });

}

// ================================
// Room Price Calculator
// ================================

function calculateCost() {

    const room = document.getElementById("packageSelect");
    const rooms = document.getElementById("peopleCount");
    const result = document.getElementById("costResult");

    if (!room || !rooms || !result) return;

    const price = Number(room.value);
    const quantity = Number(rooms.value);

    if (quantity <= 0) {

        result.style.color = "red";
        result.textContent = "Please enter a valid number of rooms.";

        return;
    }

    const total = price * quantity;

    result.style.color = "green";
    result.textContent =
        "Estimated Total Price: ₹" + total.toLocaleString("en-IN");

}

// ================================
// Gallery Filter
// ================================

function filterGallery(category) {

    const items = document.querySelectorAll(".gallery-item");

    items.forEach(function (item) {

        if (category === "all" || item.classList.contains(category)) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

}