import { FormValidator } from './FormValidator.js';

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
const popupImage = document.querySelector('.popup_type_image');
const popupList = document.querySelectorAll('.popup');

//Buttons
const profileEditButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');
const saveAddCardButton = document.querySelector('#addCard-button');

//Forms
const editFormElement = popupProfileEdit.querySelector('.popup__form');
const addFormElement = popupAddCard.querySelector('.popup__form');

//Profile
const nameInput = popupProfileEdit.querySelector('.popup__input_type_name');
const jobInput = popupProfileEdit.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

//List template
const list = document.querySelector('.photos__list');
const cardTemplate = document.querySelector('.card-template').content;
const popupCardImage = document.querySelector('.popup__image');
const popupCardTitle = document.querySelector('.popup__image-description');

//Add card
const placeNameInput = popupAddCard.querySelector('.popup__input_type_place-name');
const linkInput = popupAddCard.querySelector('.popup__input_type_link');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorSelector: '.error-message',
  buttonSelector: '.popup__save-button',
  inputErrorClass: 'popup__input_invalid',
  errorVisibleClass: 'error-message_visible',
  inactiveButtonClass: 'popup__save-button_disabled'
};

const editProfileValidator = new FormValidator(validationConfig, editFormElement)
const addCardValidator = new FormValidator(validationConfig, addFormElement)

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

//open close popup
function closeEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpen = document.querySelector('.popup_opened');
    console.log('esc close');
    closePopup(popupOpen);
  }
}
popupList.forEach(element => {
  const overlay = element.querySelector('.popup__overlay');
  const closeButtons = element.querySelector('.popup__close-button');
  overlay.addEventListener('click', () => closePopup(element));
  closeButtons.addEventListener('click', () => closePopup(element));
});
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);

};
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc);
};

//edit profile
function inputInfo() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};
profileEditButton.addEventListener('click', () => inputInfo());
profileEditButton.addEventListener('click', () => openPopup(popupProfileEdit));
editFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfileEdit);
});

//add card
addCardButton.addEventListener('click', () => openPopup(popupAddCard));
addFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  renderPlaceCard({
    name: placeNameInput.value,
    link: linkInput.value
  });
  saveAddCardButton.classList.add('popup__save-button_disabled');
  saveAddCardButton.setAttribute('disabled', '');
  addFormElement.reset();
  closePopup(popupAddCard);
});

//create card
function createCard(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.photos__image');
  const cardTitle = cardElement.querySelector('.photos__title');
  const deleteButton = cardElement.querySelector('.photos__delete-button');

  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  cardElement.querySelector('.photos__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('photos__like-button_active');
  });

  deleteButton.addEventListener('click', () => {
    const card = deleteButton.closest('.photos__list-item');
    card.remove();
  });

  cardImage.addEventListener('click', () => {
    openPopup(popupImage);
    popupCardImage.src = cardData.link;
    popupCardImage.alt = cardData.name;
    popupCardTitle.textContent = cardData.name;
  });

  return cardElement;
}

const renderPlaceCard = (data) => {
  const card = createCard(data);
  list.prepend(card)
};

initialCards.forEach(renderPlaceCard);