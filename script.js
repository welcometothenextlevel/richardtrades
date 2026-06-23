const quoteForm = document.querySelector("#quote-form");
const formStatus = document.querySelector("#form-status");

if (quoteForm && formStatus) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const requiredFields = quoteForm.querySelectorAll("[required]");
    const missingField = Array.from(requiredFields).find((field) => !field.value.trim());

    if (missingField) {
      formStatus.textContent = "Please fill in the required details and we will get the quote moving.";
      formStatus.classList.add("is-error");
      missingField.focus();
      return;
    }

    quoteForm.reset();
    formStatus.textContent = "Thanks, your quote request is ready. [Business Name] will contact you shortly.";
    formStatus.classList.remove("is-error");
  });
}
