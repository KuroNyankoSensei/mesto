(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=n,this._settings=e}var n,r;return n=t,(r=[{key:"_submitForm",value:function(e){e.preventDefault()}},{key:"_showError",value:function(e,t){this._errorContainer=this._form.querySelector("#error-".concat(e.id)),e.classList.add(this._settings.inputErrorClass),this._errorContainer.classList.add(this._settings.errorVisibleClass),this._errorContainer.textContent=t}},{key:"_hideError",value:function(e){this._errorContainer=this._form.querySelector("#error-".concat(e.id)),e.classList.remove(this._settings.inputErrorClass),this._errorContainer.classList.remove(this._settings.errorVisibleClass),this._errorContainer.textContent=""}},{key:"_setEventListeners",value:function(){var e=this;this._button=this._form.querySelector(this._settings.buttonSelector),this._inputs=this._form.querySelectorAll(this._settings.inputSelector),this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._validateInput(t)})),e.toggleButton()}))}},{key:"toggleButton",value:function(){this._form.checkValidity()?(this._button.classList.remove(this._settings.inactiveButtonClass),this._button.removeAttribute("disabled")):(this._button.classList.add(this._settings.inactiveButtonClass),this._button.setAttribute("disabled",""))}},{key:"_validateInput",value:function(e){var t=e.validity.valid,n=e.validationMessage;t?this._hideError(e):this._showError(e,n),this.toggleButton()}},{key:"resetValidation",value:function(){var e=this;this._inputs.forEach((function(t){e._hideError(t)}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",this._submitForm),this._setEventListeners()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._items=r,this._renderer=o}var t,r;return t=e,(r=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardTemplate=document.querySelector(n).content,this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t.id,this._userId=t.userId,this._ownerId=t.ownerId,this._handleImageClick=r,this._handleDeleteClick=o,this._handleLikeClick=i}var t,n;return t=e,(n=[{key:"deleteCard",value:function(){this._deleteButton.closest(".photos__list-item").remove()}},{key:"_viewLikes",value:function(){this.isLiked()?this._likeButton.classList.add("photos__like-button_active"):this._likeButton.classList.remove("photos__like-button_active")}},{key:"setLikes",value:function(e){this._likes=e,this._likeCountElement.textContent=this._likes.length,this._viewLikes()}},{key:"isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){console.log("like",e._id),e._handleLikeClick(e._id)})),this._deleteButton.addEventListener("click",(function(){console.log("delete",e._id),e._handleDeleteClick(e._id)})),this._cardImage.addEventListener("click",this._handleImageClick)}},{key:"createCard",value:function(){this._cardElement=this._cardTemplate.cloneNode(!0),this._cardImage=this._cardElement.querySelector(".photos__image");var e=this._cardElement.querySelector(".photos__title");return this._likeButton=this._cardElement.querySelector(".photos__like-button"),this._deleteButton=this._cardElement.querySelector(".photos__delete-button"),this._likeCountElement=this._cardElement.querySelector(".photos__like-count"),e.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._ownerId!==this._userId&&(this._deleteButton.style.display="none"),this._viewLikes(),this.setLikes(this._likes),this._setEventListeners(),this._cardElement}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this,t=this._popup.querySelector(".popup__overlay"),n=this._popup.querySelector(".popup__close-button");this._popup.addEventListener("click",(function(r){r.target!==t&&r.target!==n||e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._caption=t._popup.querySelector(".popup__image-description"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=t,this._image.alt=e,this._caption.textContent=e,l(d(a.prototype),"open",this).call(this)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function E(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._inputs=function(e){if(Array.isArray(e))return v(e)}(r=n._form.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"changeSubmitHandler",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;b(w(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}},{key:"close",value:function(){b(w(a.prototype),"close",this).call(this),this._form.reset()}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.profileNameSelector,r=t.profileJobSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameELement=n,this._jobElement=r,this._avatarElement=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameELement.textContent,about:this._jobElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;this._nameELement.textContent=t,this._jobElement.textContent=n,this._avatarElement.src=r}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O,P=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"editProfileAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-40",headers:{authorization:"4d38d8be-24a9-4081-8c13-cbcda6fce11c","Content-Type":"application/json"}});P.getProfile().then((function(e){z.setUserInfo(e),O=e._id})).catch((function(e){console.log(e)})),P.getInitialCards().then((function(e){e.forEach((function(e){var t=W({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:O,ownerId:e.owner._id});X.addItem(t)}))})).catch((function(e){console.log(e)}));var I=document.querySelector(".popup_type_profile-edit"),q=document.querySelector(".popup_type_add-card"),T=document.querySelector(".popup_type_avatar-edit"),x=document.querySelector(".profile__edit-button"),U=document.querySelector(".profile__add-button"),B=document.querySelector(".profile__avatar-save-button"),R=q.querySelector("#addCard-button"),A=I.querySelector("#profileSave-button"),V=T.querySelector("#avatarEdit-button"),D=document.querySelector("#cardDelete-button"),N=I.querySelector(".popup__form"),J=q.querySelector(".popup__form"),H=T.querySelector(".popup__form"),F=I.querySelector(".popup__input_type_name"),M=I.querySelector(".popup__input_type_job"),z=new j({profileNameSelector:document.querySelector(".profile__name"),profileJobSelector:document.querySelector(".profile__job"),avatarSelector:document.querySelector(".profile__avatar")}),$={formSelector:".popup__form",inputSelector:".popup__input",errorSelector:".error-message",buttonSelector:".popup__save-button",inputErrorClass:"popup__input_invalid",errorVisibleClass:"error-message_visible",inactiveButtonClass:"popup__save-button_disabled"},G=new t($,N),K=new t($,J),Q=new t($,H);G.enableValidation(),K.enableValidation(),Q.enableValidation(),x.addEventListener("click",(function(){var e=z.getUserInfo(),t=e.name,n=e.job;F.value=t,M.value=n,Z.open(),G.resetValidation()})),B.addEventListener("click",(function(){ne.open(),Q.resetValidation()})),U.addEventListener("click",(function(){ee.open(),K.resetValidation()}));var W=function(e){var t=new i(e,".card-template",(function(){Y.open(e.name,e.link)}),(function(e){te.open(),te.changeSubmitHandler((function(){D.textContent="Удаление...",P.deleteCard(e).then((function(){t.deleteCard(),te.close()})).catch((function(e){console.log(e)})).finally((function(){D.textContent="Удалить"}))}))}),(function(e){t.isLiked()?P.deleteLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)})):P.addLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)}))}));return t.createCard()},X=new r({items:[],renderer:function(e){var t=W(e);X.addItem(t)}},".photos__list"),Y=new _(".popup_type_image"),Z=new S(".popup_type_profile-edit",(function(e){A.textContent="Сохранение...";var t=e.name,n=e.job;P.editProfile(t,n).then((function(e){z.setUserInfo(t,n),Z.close()})).catch((function(e){console.log(e)})).finally((function(){A.textContent="Сохранить"}))})),ee=new S(".popup_type_add-card",(function(e){R.textContent="Создание...",P.addCard(e["place-name"],e.link).then((function(e){var t=W({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:O,ownerId:e.owner._id});X.addItem(t),ee.close()})).catch((function(e){console.log(e)})).finally((function(){R.textContent="Создать"}))})),te=new S(".popup_type_delete-confirm"),ne=new S(".popup_type_avatar-edit",(function(e){V.textContent="Сохранение...";var t=e.avatar;P.editProfileAvatar(t).then((function(e){z.setUserInfo(t),ne.close()})).catch((function(e){console.log(e)})).finally((function(){V.textContent="Сохранить"}))}));Y.setEventListeners(),Z.setEventListeners(),ee.setEventListeners(),te.setEventListeners(),ne.setEventListeners(),X.renderItems()})();