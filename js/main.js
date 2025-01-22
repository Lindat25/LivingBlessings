// Custom JavaScript (script.js)
document
  .getElementById("admissionForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(this);

    // Simulate form submission (You can replace this with an actual API call or integration with a service like EmailJS)
    setTimeout(() => {
      alert(
        "Your admission request has been submitted successfully! We will contact you shortly."
      );
      this.reset(); // Reset form fields after submission
    }, 1000);
  });
