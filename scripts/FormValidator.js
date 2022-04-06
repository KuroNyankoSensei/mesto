export class FormValidator {
    constructor(settings, form) {
        this._form = form
        this._settings = settings
    }

    _submitForm(event) {
        event.preventDefault();
    }

    _showError(input, errorText) {
        input.classList.add(this._settings.inputErrorClass);
        this._errorContainer.classList.add(this._settings.errorVisibleClass);
        this._errorContainer.textContent = errorText;
    }

    _hideError(input) {
        input.classList.remove(this._settings.inputErrorClass);
        this._errorContainer.classList.remove(this._settings.errorVisibleClass);
        this._errorContainer.textContent = '';
    }

    _setEventListeners() {
        const inputs = this._form.querySelectorAll(this._settings.inputSelector);
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                this._validateInput(input);
            });
            this._toggleButton();
        });

    }

    _toggleButton() {
        const button = this._form.querySelector(this._settings.buttonSelector);
        const isFormValid = this._form.checkValidity();

        if (isFormValid) {
            button.classList.remove(this._settings.inactiveButtonClass);
            button.removeAttribute('disabled');
        } else {
            button.classList.add(this._settings.inactiveButtonClass);
            button.setAttribute('disabled', '');
        }
    }

    _validateInput(input) {
        this._errorContainer = this._form.querySelector(`#error-${input.id}`);

        let isValid = input.validity.valid;
        let errorText = input.validationMessage;

        if (isValid) {
            this._hideError(input);
        } else {
            this._showError(input, errorText);
        }

        this._toggleButton();
    }

    enableValidation() {
        this._form.addEventListener('submit', this._submitForm);

        this._setEventListeners();
    }

}