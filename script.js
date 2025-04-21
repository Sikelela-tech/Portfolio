// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.setAttribute('data-theme', document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        e.preventDefault();
    }
});

// Loading Spinner
window.addEventListener('load', function() {
    const spinner = document.getElementById('loading-spinner');
    spinner.classList.remove('active');
});
