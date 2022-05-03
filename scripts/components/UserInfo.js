export class UserInfo {
    constructor({ profileNameSelector, profileJobSelector }) {
        this._nameELement = document.querySelector(profileNameSelector)
        this._jobElement = document.querySelector(profileJobSelector)

    }

    getUserInfo() {
        return {
            name: this._nameELement.textContent,
            job: this._jobElement.textContent
        }

    }

    setUserInfo(title, job) {
        this._nameELement.textContent = title;
        this._jobElement.textContent = job

    }

}