const popupOpenButton = document.querySelector('.profile__edit-button');
const popupForm = document.querySelector('.popup');
const popupCloseButton = popupForm.querySelector('.popup__close-button');
const formElement = popupForm.querySelector('.popup__form'); 
const nameInput = popupForm.querySelector('.popup__input_type_name'); 
const jobInput = popupForm.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const openPopup = (popup) => {
  popupForm.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
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

function formSubmitHandler (evt) {
    evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupForm);
}

formElement.addEventListener('submit', formSubmitHandler);