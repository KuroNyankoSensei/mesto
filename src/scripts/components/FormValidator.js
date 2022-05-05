export class FormValidator {
    constructor(settings, form) {
        this._form = form
        this._settings = settings
    }

    _submitForm(event) {
        event.preventDefault();
    }

    _showError(input, errorText) {
        this._errorContainer = this._form.querySelector(`#error-${input.id}`);
        input.classList.add(this._settings.inputErrorClass);
        this._errorContainer.classList.add(this._settings.errorVisibleClass);
        this._errorContainer.textContent = errorText;
    }

    _hideError(input) {
        this._errorContainer = this._form.querySelector(`#error-${input.id}`);
        input.classList.remove(this._settings.inputErrorClass);
        this._errorContainer.classList.remove(this._settings.errorVisibleClass);
        this._errorContainer.textContent = '';
    }



    _setEventListeners() {
        this._button = this._form.querySelector(this._settings.buttonSelector);
        this._inputs = this._form.querySelectorAll(this._settings.inputSelector);
        this._inputs.forEach(input => {
            input.addEventListener('input', () => {
                this._validateInput(input);
            });
            this.toggleButton();
        });
    }

    toggleButton() {
        const isFormValid = this._form.checkValidity();

        if (isFormValid) {
            this._button.classList.remove(this._settings.inactiveButtonClass);
            this._button.removeAttribute('disabled');
        } else {
            this._button.classList.add(this._settings.inactiveButtonClass);
            this._button.setAttribute('disabled', '');
        }
    }

    _validateInput(input) {
        const isValid = input.validity.valid;
        const errorText = input.validationMessage;

        if (isValid) {
            this._hideError(input);
        } else {
            this._showError(input, errorText);
        }

        this.toggleButton();
    }

    resetValidation() {
        this._inputs.forEach((input) => {
            this._hideError(input)
        });

    }

    enableValidation() {
        this._form.addEventListener('submit', this._submitForm);
        this._setEventListeners();
    }
}