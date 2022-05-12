class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;

    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    editProfile(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name,
                about
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    editProfileAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name,
                link
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers,

        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "DELETE",
            headers: this._headers,

        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    addLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "PUT",
            headers: this._headers,

        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }


}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-40',
    headers: {
        authorization: '4d38d8be-24a9-4081-8c13-cbcda6fce11c',
        'Content-Type': 'application/json'
    }
});