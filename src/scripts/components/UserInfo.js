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

    getId() {
        return this._id
    }

    setId(id) {
        this._id = id
    }

    setUserInfo({ name, about, avatar }) {
        this._nameELement.textContent = name;
        this._jobElement.textContent = about;
        this._avatarElement.src = avatar;
    }

}