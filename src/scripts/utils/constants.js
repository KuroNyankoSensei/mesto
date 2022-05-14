//Popups
const popupProfileEdit = document.querySelector('.popup_type_profile-edit');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupEditAvatar = document.querySelector('.popup_type_avatar-edit');

//Buttons
export const profileEditButton = document.querySelector('.profile__edit-button');
export const cardAddButton = document.querySelector('.profile__add-button');
export const avatarEditButton = document.querySelector('.profile__avatar-save-button')

//save buttons
export const cardSaveButton = popupAddCard.querySelector('#addCard-button')
export const profileSaveButton = popupProfileEdit.querySelector('#profileSave-button')
export const avatarSaveButton = popupEditAvatar.querySelector('#avatarEdit-button')

//delete button
export const cardDeleteConfirmButton = document.querySelector('#cardDelete-button')

//Forms
export const profileEditFormElement = popupProfileEdit.querySelector('.popup__form');
export const cardAddFormElement = popupAddCard.querySelector('.popup__form');
export const avatarEditFormElement = popupEditAvatar.querySelector('.popup__form');

//Profile
export const nameInput = popupProfileEdit.querySelector('.popup__input_type_name');
export const jobInput = popupProfileEdit.querySelector('.popup__input_type_job');

//user info selector
export const profileName = document.querySelector('.profile__name')
export const profileAbout = document.querySelector('.profile__job')
export const profileAvatar = document.querySelector('.profile__avatar')

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorSelector: '.error-message',
    buttonSelector: '.popup__save-button',
    inputErrorClass: 'popup__input_invalid',
    errorVisibleClass: 'error-message_visible',
    inactiveButtonClass: 'popup__save-button_disabled'
};