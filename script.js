const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const calloutForm = document.querySelector("#callout-form");
const formStatus = document.querySelector("#form-status");

if (calloutForm && formStatus) {
  calloutForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const requiredFields = Array.from(calloutForm.querySelectorAll("[required]"));
    const missingField = requiredFields.find((field) => !field.value.trim());

    if (missingField) {
      formStatus.textContent = "Please add the required details so Richard can follow up properly.";
      formStatus.classList.add("is-error");
      missingField.focus();
      return;
    }

    calloutForm.reset();
    formStatus.textContent = "Thanks. Your call-out request is ready and Richbright Home Services will be in touch.";
    formStatus.classList.remove("is-error");
  });
}
