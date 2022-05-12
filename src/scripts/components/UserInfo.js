export class UserInfo {
    constructor({ profileNameSelector, profileJobSelector, avatarSelector }) {
        this._nameELement = profileNameSelector
        this._jobElement = profileJobSelector
        this._avatarElement = avatarSelector

    }

    getUserInfo() {
        return {
            name: this._nameELement.textContent,
            about: this._jobElement.textContent,
        }

    }

    setUserInfo({ name, about, avatar }) {
        this._nameELement.textContent = name;
        this._jobElement.textContent = about;
        this._avatarElement.src = avatar;

    }

}