import { openPopup } from './utils.js'
export class Card {
    constructor(data) {
        this._cardTemplate = document.querySelector('.card-template').content;
        this._name = data.name
        this._link = data.link

    }

    _handleLikeButton = () => {
        this._likeButton.classList.toggle('photos__like-button_active');
    }

    _handleDeleteButton = () => {
        const card = this._deleteButton.closest('.photos__list-item');
        card.remove();
    }

    _handlePreviewPicture = () => {
        const popupCardImage = document.querySelector('.popup__image');
        const popupCardTitle = document.querySelector('.popup__image-description');
        const popupImage = document.querySelector('.popup_type_image');

        popupCardImage.src = this._link;
        popupCardImage.alt = this._name;
        popupCardTitle.textContent = this._name;

        openPopup(popupImage);
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', this._handleLikeButton);
        this._deleteButton.addEventListener('click', this._handleDeleteButton);
        this._cardImage.addEventListener('click', this._handlePreviewPicture);
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


