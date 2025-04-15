// Theme Toggle Function
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    const isDark = body.getAttribute("data-theme") === "dark";

    body.setAttribute("data-theme", isDark ? "light" : "dark");
    icon.classList.toggle("fa-moon", !isDark);
    icon.classList.toggle("fa-sun", isDark);

    // Save preference to localStorage
    localStorage.setItem("theme", isDark ? "light" : "dark");
}

// Modal Functions (Not currently used in provided HTML)
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content (Not currently used)
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Highlight Active Navigation Link on Scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".navbar a");
    const scrollPosition = window.scrollY + 100;

    // Reset all links
    navLinks.forEach(link => link.classList.remove("active"));

    // Find the section in view and highlight the corresponding nav link
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionBottom = section.offsetTop + section.offsetHeight;

        if (scrollPosition >= section.offsetTop && scrollPosition < sectionBottom) {
            const id = section.getAttribute("id");
            const activeLink = document.querySelector(`.navbar a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
            break;
        }
    }
});

// Check for Saved Theme Preference on Load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.setAttribute("data-theme", savedTheme);

    const icon = document.getElementById('theme-icon');
    icon.className = savedTheme === "dark" ? "fas fa-moon" : "fas fa-sun";
});