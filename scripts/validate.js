function submitForm(event) {
    event.preventDefault();

    console.log('form submitted');
}

function showError(input, errorContainer, errorText, { inputErrorClass, errorVisibleClass }) {
    input.classList.add(inputErrorClass);
    errorContainer.classList.add(errorVisibleClass);
    errorContainer.textContent = errorText;
}

function hideError(input, errorContainer, { inputErrorClass, errorVisibleClass }) {
    input.classList.remove(inputErrorClass);
    errorContainer.classList.remove(errorVisibleClass);
    errorContainer.textContent = '';
}

function toggleButton(form, { buttonSelector, inactiveButtonClass }) {
    const button = form.querySelector(buttonSelector);
    const isFormValid = form.checkValidity();
    console.log('isFormValid');

    if (isFormValid) {
        button.classList.remove(inactiveButtonClass);
        button.removeAttribute('disabled');
    } else {
        button.classList.add(inactiveButtonClass);
        button.setAttribute('disabled', '');
    }
}

function validateInput(form, input, classes) {
    const errorContainer = form.querySelector(`#error-${input.id}`);

    let isValid = input.validity.valid;
    let errorText = input.validationMessage;

    if (isValid) {
        hideError(input, errorContainer, classes);
    } else {
        showError(input, errorContainer, errorText, classes);
    }

    toggleButton(form, classes);
}

function enableValidation({ formSelector, inputSelector, ...rest }) {
    console.log('enable validation');
    const forms = document.querySelectorAll(formSelector);

    forms.forEach(form => {
        form.addEventListener('submit', submitForm);

        const inputs = form.querySelectorAll(inputSelector);

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                validateInput(form, input, rest);
            });
        });

        toggleButton(form, rest);
    });
}


enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorSelector: '.error-message',
    buttonSelector: '.popup__save-button',
    inputErrorClass: 'popup__input_invalid',
    errorVisibleClass: 'error-message_visible',
    inactiveButtonClass: 'popup__save-button_disabled'
});
