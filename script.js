const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.sendForm('service_9cdx5co', 'template_lkzosrj', form, 'YOUR_USER_ID')
        .then(response => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Thank you for your message!');
            form.reset(); // Clear form
        }, error => {
            console.log('FAILED...', error);
            alert('Something went wrong. Please try again.');
        });
});
