document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("submit", function (event) {
      if (event.target.tagName === "FORM") {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
  
        if (!data.name || !data.email || !data.date) {
          alert("Please fill out all required fields.");
          return;
        }
  
        console.log("Form Data Submitted:", data);
        alert("Thank you! Your request has been submitted.");
        form.reset();
      }
    });
  });
  
