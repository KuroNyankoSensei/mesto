import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

import '../../pages/index.css';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Popups
const popupProfileEdit = document.querySelector('.popup_type_profile-edit');
const popupAddCard = document.querySelector('.popup_type_add-card');


//Buttons
const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');

//Forms
const profileEditFormElement = popupProfileEdit.querySelector('.popup__form');
const cardAddFormElement = popupAddCard.querySelector('.popup__form');

//Profile
const nameInput = popupProfileEdit.querySelector('.popup__input_type_name');
const jobInput = popupProfileEdit.querySelector('.popup__input_type_job');

//validation
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorSelector: '.error-message',
  buttonSelector: '.popup__save-button',
  inputErrorClass: 'popup__input_invalid',
  errorVisibleClass: 'error-message_visible',
  inactiveButtonClass: 'popup__save-button_disabled'
};

const profileEditValidator = new FormValidator(validationConfig, profileEditFormElement)
const cardAddValidator = new FormValidator(validationConfig, cardAddFormElement)

profileEditValidator.enableValidation();
cardAddValidator.enableValidation();


//edit profile
const handleProfileFormSubmit = (data) => {
  const { name, job } = data;
  userInfo.setUserInfo(name, job);
  editProfilePopup.close();
}
profileEditButton.addEventListener('click', () => {

  const { name, job } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = job;
  editProfilePopup.open();
  profileEditValidator.resetValidation();
});


//add card
const handleCardFormSubmit = (data) => {
  const card = createCard({
    name: data['place-name'],
    link: data.link
  })
  section.addItem(card)
  addCardPopup.close();
}

cardAddButton.addEventListener('click', () => {
  addCardPopup.open();
  cardAddValidator.resetValidation();
});


//create card
const createCard = (data) => {
  const card = new Card(data, '.card-template', () => {
    imagePopup.open(data.name, data.link)
  });
  const cardElement = card.createCard();
  return cardElement;
}

const renderPlaceCard = (data) => {
  const card = createCard(data);
  section.addItem(card);
};

const section = new Section({ items: initialCards, renderer: renderPlaceCard }, '.photos__list');
const imagePopup = new PopupWithImage('.popup_type_image');
const editProfilePopup = new PopupWithForm('.popup_type_profile-edit', handleProfileFormSubmit);
const addCardPopup = new PopupWithForm('.popup_type_add-card', handleCardFormSubmit);
imagePopup.setEventListeners();
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
section.renderItems();

const userInfo = new UserInfo({ profileNameSelector: '.profile__name', profileJobSelector: '.profile__job' });