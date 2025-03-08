// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

if (window.innerWidth <= 752) {
  // 47em ~ 752px if 1em=16px (adjust as needed)
  const heroBoxes = document.querySelector(".hero-boxes");
  if (heroBoxes) {
    heroBoxes.parentNode.removeChild(heroBoxes);
  }
  // Similarly, remove the empty div if necessary.
}

document.addEventListener("DOMContentLoaded", function () {
  // For the Contact Us form
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Gather form data from Contact Us form
      const data = {
        name: document.getElementById("full-name").value,
        subject: document.getElementById("subject").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
      };

      // Replace with your actual API Gateway endpoint for Contact Us
      const contactAPI =
        "https://2qafq955uk.execute-api.us-east-1.amazonaws.com/prod/contact-us";

      fetch(contactAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((result) => {
          console.log("Raw response from fetch:", result);
          let parsedResult = result.body ? JSON.parse(result.body) : result;
          console.log("Parsed response:", parsedResult);
          if (parsedResult.result === "Success") {
            // Redirect to thank you page
            window.location.href = "thankyou.html";
          } else {
            throw new Error(
              "Unexpected response format: " + JSON.stringify(parsedResult)
            );
          }
        })
        .catch((err) => {
          console.error("Error:", err);
          alert("There was an error sending your message.");
        });
    });
  }

  // For the Request a Quote form
  const requestForm = document.querySelector(".request-form");
  if (requestForm) {
    requestForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Gather form data from Request a Quote form
      const data = {
        name: document.getElementById("full-name").value,
        email: document.getElementById("email").value,
        "type-of-service": document.getElementById("type-of-service").value,
        mobile: document.getElementById("mobile").value,
        message: document.getElementById("message").value,
      };

      // Replace with your actual API Gateway endpoint for Request a Quote
      const requestAPI =
        "https://2qafq955uk.execute-api.us-east-1.amazonaws.com/prod/request";

      fetch(requestAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((result) => {
          console.log("Raw response from fetch:", result);
          let parsedResult = result.body ? JSON.parse(result.body) : result;
          console.log("Parsed response:", parsedResult);
          if (parsedResult.result === "Success") {
            // Redirect to thank you page
            window.location.href = "thankyou.html";
          } else {
            throw new Error(
              "Unexpected response format: " + JSON.stringify(parsedResult)
            );
          }
        })
        .catch((err) => {
          console.error("Error:", err);
          alert("There was an error sending your request.");
        });
    });
  }
});
