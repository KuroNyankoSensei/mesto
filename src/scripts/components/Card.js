export class Card {
    constructor(data, templateSelector, handleImageClick, userId, handleDeleteClick, handleLikeClick) {
        this._cardTemplate = document.querySelector(templateSelector).content;
        this._name = data.name;
        this._link = data.link;
        this._cardId = data._id;
        this._userId = userId;
        this._ownerId = data.owner._id;
        this._likes = data.likes.length;
        this._isLike = data.likes.some(item => item._id == this._userId)

        this._handleImageClick = handleImageClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeClick = handleLikeClick;

        this._cardElement = this._cardTemplate.cloneNode(true);

        this._cardImage = this._cardElement.querySelector('.photos__image');
        this._cardTitle = this._cardElement.querySelector('.photos__title');
        this._likeButton = this._cardElement.querySelector('.photos__like-button');
        this._deleteButton = this._cardElement.querySelector('.photos__delete-button');
        this._likeCountElement = this._cardElement.querySelector('.photos__like-count');

    }

    deleteCard() {
        const card = this._deleteButton.closest('.photos__list-item');
        card.remove();
    }

    getCardId() {
        return this._cardId
    }

    isLiked() {
        return this._isLike
    }

    setLikes(item) {
        this._likeCountElement.textContent = item.likes.length
        this._isLike = !this._isLike
        if (this._isLike) {
            this._likeButton.classList.add('photos__like-button_active')
        } else {
            this._likeButton.classList.remove('photos__like-button_active')
        }
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            console.log('like', this._cardId)
            this._handleLikeClick(this._cardId)
        });
        this._deleteButton.addEventListener('click', () => {
            console.log('delete', this._cardId);
            this._handleDeleteClick(this._cardId);
        });
        this._cardImage.addEventListener('click', this._handleImageClick);
    }

    createCard() {
        this._cardTitle.textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._likeCountElement.textContent = this._likes;

        if (this._ownerId !== this._userId) {
            this._deleteButton.style.display = 'none'
        };

        if (this._isLike) {
            this._likeButton.classList.add('photos__like-button_active');
        }

        this._setEventListeners();

        return this._cardElement;
    }
}


