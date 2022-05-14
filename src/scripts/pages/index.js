import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { api } from '../components/Api.js';
import {
  profileEditButton,
  cardAddButton,
  avatarEditButton,
  cardSaveButton,
  profileSaveButton,
  avatarSaveButton,
  cardDeleteConfirmButton,
  profileEditFormElement,
  cardAddFormElement,
  avatarEditFormElement,
  nameInput,
  jobInput,
  profileName,
  profileAbout,
  profileAvatar,
  validationConfig
} from '../utils/constants.js';

import '../../pages/index.css';

const getUserProfile = api.getProfile()
  .then((userData) => {
    return userData
  })
  .catch((err) => {
    console.log(err)
  })

const getCard = api.getInitialCards()
  .then((cardData) => {
    return cardData
  })
  .catch((err) => {
    console.log(err)
  })

const userInfo = new UserInfo({
  profileNameSelector: profileName,
  profileJobSelector: profileAbout,
  avatarSelector: profileAvatar
});

//validation
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
      userInfo.setUserInfo(res)
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

  const { name, about } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = about;
  editProfilePopup.open();
  profileEditValidator.resetValidation();
});

//edit avatar
const handleAvatarFormSubmit = (avatarData) => {
  avatarSaveButton.textContent = 'Сохранение...'
  const { avatar } = avatarData
  api.editProfileAvatar(avatar)
    .then(res => {
      userInfo.setUserInfo(res)
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
      const card = createCard(res)
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

const createCard = (data) => {
  const card = new Card(
    data,
    '.card-template',
    () => {
      imagePopup.open(data.name, data.link)
    },
    userInfo.getId(),
    (data) => {
      deletePopup.open()
      deletePopup.changeSubmitHandler(() => {
        cardDeleteConfirmButton.textContent = 'Удаление...'
        api.deleteCard(data)
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
    (data) => {
      if (card.isLiked()) {
        api.deleteLike(data)
          .then(res => {
            card.setLikes(res)
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api.addLike(data)
          .then(res => {
            card.setLikes(res)
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  );
  return card.createCard();
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

Promise.all([
  getUserProfile,
  getCard
])
  .then(([userData, cardData]) => {

    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
      avatar: userData.avatar
    })
    userInfo.setId(userData._id)
    section.renderItems(cardData)

  })
  .catch((err) => {
    console.log(err);
  })
