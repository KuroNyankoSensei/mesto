export class Card {
    constructor(data, templateSelector, handleImageClick, handleDeleteClick, handleLikeClick) {
        this._cardTemplate = document.querySelector(templateSelector).content;
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data.id;
        this._userId = data.userId;
        this._ownerId = data.ownerId;

        this._handleImageClick = handleImageClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeClick = handleLikeClick;

    }

    deleteCard() {
        const card = this._deleteButton.closest('.photos__list-item');
        card.remove();
    }

    _viewLikes() {
        if (this.isLiked()) {
            this._likeButton.classList.add('photos__like-button_active');
        } else {
            this._likeButton.classList.remove('photos__like-button_active');
        }

    }

    setLikes(newLikes) {
        this._likes = newLikes;
        this._likeCountElement.textContent = this._likes.length;
        this._viewLikes();
    }

    isLiked() {
        return this._likes.some(item => item._id === this._userId)
    }
    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            console.log('like', this._id)
            this._handleLikeClick(this._id)
        });
        this._deleteButton.addEventListener('click', () => {
            console.log('delete', this._id);
            this._handleDeleteClick(this._id);
        });
        this._cardImage.addEventListener('click', this._handleImageClick);
    }

    createCard() {
        this._cardElement = this._cardTemplate.cloneNode(true);

        this._cardImage = this._cardElement.querySelector('.photos__image');
        const cardTitle = this._cardElement.querySelector('.photos__title');
        this._likeButton = this._cardElement.querySelector('.photos__like-button');
        this._deleteButton = this._cardElement.querySelector('.photos__delete-button');
        this._likeCountElement = this._cardElement.querySelector('.photos__like-count');

        cardTitle.textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;

        if (this._ownerId !== this._userId) {
            this._deleteButton.style.display = 'none'
        };
        this._viewLikes();
        this.setLikes(this._likes);
        this._setEventListeners();

        return this._cardElement;
    }
}


