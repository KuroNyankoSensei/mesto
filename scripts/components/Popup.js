export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    setEventListeners() {
        const overlay = this._popup.querySelector('.popup__overlay');
        const popupCloseButton = this._popup.querySelector('.popup__close-button');

        this._popup.addEventListener('click', (e) => {
            if (e.target === overlay || e.target === popupCloseButton) {
                this.close()
            }
        })
    }
}