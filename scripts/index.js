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

//Buttons
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = popupProfileEdit.querySelector('.popup__close-button');
const addCardButton = document.querySelector('.profile__add-button');
const addCardCloseButton = popupAddCard.querySelector('.popup__close-button');
const closeImageButton = popupImage.querySelector('.popup__close-button');

function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
};

//Forms
const editFormElement = popupProfileEdit.querySelector('.popup__form');
const addFormElement = popupAddCard.querySelector('.popup__form');

//Profile
const nameInput = popupProfileEdit.querySelector('.popup__input_type_name');
const jobInput = popupProfileEdit.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  togglePopup(popupProfileEdit)
});
profileCloseButton.addEventListener('click', () => togglePopup(popupProfileEdit));
editFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  togglePopup(popupProfileEdit);
});

//List template
const list = document.querySelector('.photos__list');
const cardTemplate = document.querySelector('.card-template').content;
const popupCardImage = document.querySelector('.popup__image');
const popupCardTitle = document.querySelector('.popup__image-description');

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
    togglePopup(popupImage);
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

//Add card
const placeNameInput = popupAddCard.querySelector('.popup__input_type_place-name');
const linkInput = popupAddCard.querySelector('.popup__input_type_link');

addCardButton.addEventListener('click', () => togglePopup(popupAddCard));
addCardCloseButton.addEventListener('click', () => togglePopup(popupAddCard));

addFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  renderPlaceCard({
    name: placeNameInput.value,
    link: linkInput.value
  });
  togglePopup(popupAddCard);
});

//Close modal image
closeImageButton.addEventListener('click', () => togglePopup(popupImage));