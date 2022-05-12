import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { api } from '../components/Api.js';

import '../../pages/index.css';

let userId

api.getProfile()
  .then(res => {
    userInfo.setUserInfo(res)
    userId = res._id
  })
  .catch((err) => {
    console.log(err);
  });



api.getInitialCards()
  .then(cardList => {
    cardList.forEach(data => {
      const card = createCard({
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        userId: userId,
        ownerId: data.owner._id
      })
      section.addItem(card)
    })
  })
  .catch((err) => {
    console.log(err);
  });



//Popups
const popupProfileEdit = document.querySelector('.popup_type_profile-edit');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupEditAvatar = document.querySelector('.popup_type_avatar-edit');

//Buttons
const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');
const avatarEditButton = document.querySelector('.profile__avatar-save-button')

//save buttons
const cardSaveButton = popupAddCard.querySelector('#addCard-button')
const profileSaveButton = popupProfileEdit.querySelector('#profileSave-button')
const avatarSaveButton = popupEditAvatar.querySelector('#avatarEdit-button')

//delete button
const cardDeleteConfirmButton = document.querySelector('#cardDelete-button')

//Forms
const profileEditFormElement = popupProfileEdit.querySelector('.popup__form');
const cardAddFormElement = popupAddCard.querySelector('.popup__form');
const avatarEditFormElement = popupEditAvatar.querySelector('.popup__form');

//Profile
const nameInput = popupProfileEdit.querySelector('.popup__input_type_name');
const jobInput = popupProfileEdit.querySelector('.popup__input_type_job');

//user info selector
const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__job')
const profileAvatar = document.querySelector('.profile__avatar')


const userInfo = new UserInfo({
  profileNameSelector: profileName,
  profileJobSelector: profileAbout,
  avatarSelector: profileAvatar
});

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
const avatarEditValidator = new FormValidator(validationConfig, avatarEditFormElement)

profileEditValidator.enableValidation();
cardAddValidator.enableValidation();
avatarEditValidator.enableValidation();


//edit profile
const handleProfileFormSubmit = (userData) => {
  profileSaveButton.textContent = 'Сохранение...'
  const { name, job } = userData;
  api.editProfile(name, job)
    .then(res => {
      userInfo.setUserInfo(name, job)
      editProfilePopup.close()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      profileSaveButton.textContent = 'Сохранить'
    })
}

profileEditButton.addEventListener('click', () => {

  const { name, job } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = job;
  editProfilePopup.open();
  profileEditValidator.resetValidation();
});

//edit avatar
const handleAvatarFormSubmit = (avatarData) => {
  avatarSaveButton.textContent = 'Сохранение...'
  const { avatar } = avatarData
  api.editProfileAvatar(avatar)
    .then(res => {
      userInfo.setUserInfo(avatar)
      editAvatarPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarSaveButton.textContent = 'Сохранить'
    })
}

avatarEditButton.addEventListener('click', () => {
  editAvatarPopup.open();
  avatarEditValidator.resetValidation();
})


//add card
const handleCardFormSubmit = (data) => {
  cardSaveButton.textContent = 'Создание...'
  api.addCard(data['place-name'], data.link)
    .then(res => {
      const card = createCard({
        name: res.name,
        link: res.link,
        likes: res.likes,
        id: res._id,
        userId: userId,
        ownerId: res.owner._id
      })
      section.addItem(card)
      addCardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      cardSaveButton.textContent = 'Создать'
    })

}

cardAddButton.addEventListener('click', () => {
  addCardPopup.open();
  cardAddValidator.resetValidation();
});


//create card
const createCard = (data) => {
  const card = new Card(
    data,
    '.card-template',
    () => {
      imagePopup.open(data.name, data.link)
    },
    (id) => {
      deletePopup.open()
      deletePopup.changeSubmitHandler(() => {
        cardDeleteConfirmButton.textContent = 'Удаление...'
        api.deleteCard(id)
          .then(() => {
            card.deleteCard()
            deletePopup.close()
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            cardDeleteConfirmButton.textContent = 'Удалить'
          })
      })
    },
    (id) => {
      if (card.isLiked()) {
        api.deleteLike(id)
          .then(res => {
            card.setLikes(res.likes)
          })
          .catch((err) => {
            console.log(err);
          });
      } else {

        api.addLike(id)
          .then(res => {
            card.setLikes(res.likes)
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  );
  const cardElement = card.createCard();
  return cardElement;
}

// render card
const renderPlaceCard = (data) => {
  const card = createCard(data);
  section.addItem(card);
};

const section = new Section({ items: [], renderer: renderPlaceCard }, '.photos__list');
const imagePopup = new PopupWithImage('.popup_type_image');
const editProfilePopup = new PopupWithForm('.popup_type_profile-edit', handleProfileFormSubmit);
const addCardPopup = new PopupWithForm('.popup_type_add-card', handleCardFormSubmit);
const deletePopup = new PopupWithForm('.popup_type_delete-confirm');
const editAvatarPopup = new PopupWithForm('.popup_type_avatar-edit', handleAvatarFormSubmit);

imagePopup.setEventListeners();
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
deletePopup.setEventListeners();
editAvatarPopup.setEventListeners();

section.renderItems();

