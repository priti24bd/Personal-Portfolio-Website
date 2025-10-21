// Update year automatically
document.getElementById('year').textContent = new Date().getFullYear();


// Simple form handler
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');


form?.addEventListener('submit', (e) => {
e.preventDefault();
status.textContent = 'Sending...';


setTimeout(() => {
status.textContent = 'Message sent successfully! (Demo only)';
form.reset();
}, 1000);
});
