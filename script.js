const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links')

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

// Social Media Redirection
document.querySelector('.visit-btn').addEventListener('click', () => {
    window.open('https://github.com/Amadou-ai', '_blank');
});

// Contact Form Handling
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs');
        return;
    }

    // Here you would typically send the form data to a backend service
    // For now, we'll just log to console and show a success message
    console.log('Form Submitted', { name, email, message });
    alert('Merci pour votre message! Je vous répondrai bientôt.')

    // Clear the form
    this.reset();
});