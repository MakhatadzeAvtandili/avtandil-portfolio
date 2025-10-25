document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const formContent = document.querySelector(".form-content");
  const successMessage = document.querySelector(".success-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const submitButton = form.querySelector(".submit-btn");

    submitButton.disabled = true;
    submitButton.querySelector("span").textContent = "Sending...";

    fetch("send_mail.php", {
      method: "POST",
      body: formData,
    })
      .then((response) =>
        response.text().then((text) => ({ ok: response.ok, text }))
      )
      .then(({ ok, text }) => {
        if (ok) {
          showSuccessAnimation();
        } else {
          throw new Error(text);
        }
      })
      .catch((error) => {
        showStatusMessage(error.message, "error");
        submitButton.disabled = false;
        submitButton.querySelector("span").textContent = "Send Message";
      });
  });

  function showSuccessAnimation() {
    formContent.style.opacity = "0";
    formContent.style.visibility = "hidden";
    successMessage.classList.add("active");
  }

  function showStatusMessage(message, type) {
    formStatus.textContent = message;
    formStatus.className = type;
    setTimeout(() => {
      formStatus.textContent = "";
      formStatus.className = "";
    }, 5000);
  }
});
