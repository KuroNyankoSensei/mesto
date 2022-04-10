import { openPopup, closePopup } from './utils.js';
import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
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
const popupList = document.querySelectorAll('.popup');

//Buttons
const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');

//Forms
const profileEditFormElement = popupProfileEdit.querySelector('.popup__form');
const cardAddFormElement = popupAddCard.querySelector('.popup__form');

//Profile
const nameInput = popupProfileEdit.querySelector('.popup__input_type_name');
const jobInput = popupProfileEdit.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

//List template
const cardsContainer = document.querySelector('.photos__list');

//Add card
const placeNameInput = popupAddCard.querySelector('.popup__input_type_place-name');
const linkInput = popupAddCard.querySelector('.popup__input_type_link');

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

//close popup
popupList.forEach(element => {
  const overlay = element.querySelector('.popup__overlay');
  const popupCloseButtons = element.querySelector('.popup__close-button');
  overlay.addEventListener('click', () => closePopup(element));
  popupCloseButtons.addEventListener('click', () => closePopup(element));
});

//edit profile
function inputInfo() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

};
profileEditButton.addEventListener('click', () => {
  inputInfo();
  openPopup(popupProfileEdit);
});
profileEditFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfileEdit);
});

//add card
cardAddButton.addEventListener('click', () => {
  cardAddValidator.toggleButton();
  openPopup(popupAddCard);
});
cardAddFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  closePopup(popupAddCard);
  renderPlaceCard({
    name: placeNameInput.value,
    link: linkInput.value
  });
  cardAddFormElement.reset();
});

//create card
const createCard = (data) => {
  const card = new Card(data, '.card-template');
  const cardElement = card.createCard();
  return cardElement;
}

const renderPlaceCard = (data) => {
  const card = createCard(data);
  cardsContainer.prepend(card);
};

initialCards.forEach(renderPlaceCard);