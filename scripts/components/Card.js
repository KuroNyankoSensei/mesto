export class Card {
    constructor(data, templateSelector, handleImageClick) {
        this._cardTemplate = document.querySelector(templateSelector).content;
        this._name = data.name;
        this._link = data.link;

        this._handleImageClick = handleImageClick

    }

    _handleLikeButton = () => {
        this._likeButton.classList.toggle('photos__like-button_active');
    }

    _handleDeleteButton = () => {
        const card = this._deleteButton.closest('.photos__list-item');
        card.remove();
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', this._handleLikeButton);
        this._deleteButton.addEventListener('click', this._handleDeleteButton);
        this._cardImage.addEventListener('click', this._handleImageClick);
    }

    createCard() {
        this._cardElement = this._cardTemplate.cloneNode(true);
        this._cardImage = this._cardElement.querySelector('.photos__image');
        const cardTitle = this._cardElement.querySelector('.photos__title');
        this._likeButton = this._cardElement.querySelector('.photos__like-button');
        this._deleteButton = this._cardElement.querySelector('.photos__delete-button');

        cardTitle.textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;

        this._setEventListeners();

        return this._cardElement;
    }
}


