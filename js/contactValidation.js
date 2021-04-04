const contactForm = document.querySelector(".form-contact");

const contactFormName = document.querySelector("#name");
const contactFormNameError = document.querySelector("#name-error");
let contactFormNameHasAnError = false;

const contactFormEmail = document.querySelector("#email");
const contactFormEmailError = document.querySelector("#email-error");
let contactFormEmailHasAnError = false;

const contactFormMessage = document.querySelector("#message");
const contactFormMessageError = document.querySelector("#message-error");
let contactFormMessageHasAnError = false;

const contactFormSubmitMessage = document.querySelector("#submit-message");

contactForm.addEventListener("submit", formValidation);

function formValidation() {
    event.preventDefault();

    const nameValue = contactFormName.value;

    if (validateLength(nameValue, 2) === true) {
        contactFormNameError.style.display = "none";
        contactFormNameHasAnError = false;
    } else {
        contactFormNameError.style.display = "block";
        contactFormNameHasAnError = true;
    }

    const emailValue = contactFormEmail.value;

    if (validateEmail(emailValue)) {
        contactFormEmailError.style.display = "none";
        contactFormEmailHasAnError = false;
    } else {
        contactFormEmailError.style.display = "block";
        contactFormEmailHasAnError = true;
    }

    const messageValue = contactFormMessage.value;

    if (validateLength(messageValue, 10) === true) {
        contactFormMessageError.style.display = "none";
        contactFormMessageHasAnError = false;
    } else {
        contactFormMessageError.style.display = "block";
        contactFormMessageHasAnError = true;
    }

    if (contactFormNameHasAnError === true || contactFormEmailHasAnError === true || contactFormMessageHasAnError === true) {
        contactFormSubmitMessage.style.display = "none";
    } else {
        contactFormSubmitMessage.style.display = "block";
        contactFormName.value = "";
        contactFormEmail.value = "";
        contactFormMessage.value = "";
        console.log("message was submitted");
    }

}

function validateLength(value, checkLength) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= checkLength) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(emailValue) {
    const emailSymbol = /\S+@\S+\.\S+/;

    if (emailSymbol.test(emailValue)) {
        return true;
    } else {
        return false;
    }
}