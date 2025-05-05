// Prevent the form from doing a full page reload
document
  .getElementById('contactForm')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! We will be in touch shortly.');
    this.reset();
  });

// Initialize Calendly inline widget — replace with your actual URL
Calendly.initInlineWidget({
  url: 'https://calendly.com/yourusername/intro-call',
  parentElement: document.getElementById('calendly-schedule')
});
