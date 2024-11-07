document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    
    // Get form data
    const name = this.querySelector('input[name="entry.40364876"]').value.trim();
    const email = this.querySelector('input[name="entry.1274072223"]').value.trim();
    const subject = this.querySelector('input[name="entry.1274072224"]').value.trim();
    const message = this.querySelector('textarea[name="entry.1274072225"]').value.trim();

    // Show loading state
    submitBtn.innerHTML = '<span>Envoi en cours...</span>';
    submitBtn.disabled = true;

    try {
        // Create form data object
        const formData = new FormData();
        formData.append('entry.40364876', name);      // Name field
        formData.append('entry.1274072223', email);   // Email field
        formData.append('entry.1274072224', subject); // Subject field
        formData.append('entry.1274072225', message); // Message field

        // Send to Google Form
        const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfULwAQgbY4HpHbvg9/formResponse', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData)
        });

        // Success message
        alert('Message envoyé avec succès!');
        this.reset();
        
    } catch (error) {
        console.error('Error:', error);
        alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
        // Reset button state
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
}); 