document.addEventListener("DOMContentLoaded", function() {
    const subscribeForm = document.getElementById("subscribeForm");
    const emailInput = document.getElementById("email");
    const messageContainer = document.getElementById("messageContainer");
  
    // Regex for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
    subscribeForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      const emailValue = emailInput.value.trim();
  
      // Clear any previous messages and reset input styles
      messageContainer.innerHTML = '';
      emailInput.classList.remove('red-border'); // Reset the border color
  
      // Check if the email is empty
      if (!emailValue) {
        messageContainer.innerHTML = '<p class="error-message">Email cannot be empty!</p>';
        emailInput.classList.add('red-border'); // Add the red border class
        return;
      }
  
      // Check if the email is valid
      if (!emailRegex.test(emailValue)) {
        messageContainer.innerHTML = '<p class="error-message">Please provide a valid email address.</p>';
        emailInput.classList.add('red-border'); // Add the red border class
        return;
      }
  
      // If email is valid, show success message
      messageContainer.innerHTML = '<p class="success-message">Thank you! You will be notified soon.</p>';
  
      // Clear the input after successful submission
      emailInput.value = '';
      emailInput.classList.remove('red-border'); // Remove the red border if the input is cleared
    });
  });
  