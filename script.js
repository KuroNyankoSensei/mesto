const popupOpenButton = document.querySelector('.profile__edit-button');
const popupForm = document.querySelector('.popup');
const popupCloseButton = popupForm.querySelector('.popup__close-button');

const openPopup = (popup) => {
  popupForm.classList.add('popup_opened');
};

const closePopup = (popup) => {
  popupForm.classList.remove('popup_opened');
};

popupOpenButton.addEventListener('click', () => {
  openPopup(popupForm)
});
popupCloseButton.addEventListener('click', () => {
  closePopup(popupForm)
});

const formElement = popupForm.querySelector('.popup__form'); 
const nameInput = popupForm.querySelector('.popup__name'); 
const jobInput = popupForm.querySelector('.popup__job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupForm);
}

formElement.addEventListener('submit', formSubmitHandler);