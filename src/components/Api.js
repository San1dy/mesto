class Api {
    constructor (options) {
        this._baseUr1 = options.baseUr1;
        this._headers = options.headers;
    }
    // метод проверяет пришел ли ответ от сервера
    _parseResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    // метод получения карточек с сервера
    getCardsServer() {
        return fetch(`${this._baseUr1}/cards`, {
            headers: this._headers
        })
        .then(res => this._parseResponse(res));
    }

    // метод добавления новой карточки на сервер 
    addCard(data) {
        return fetch(`${this._baseUr1}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
        .then(res => this._parseResponse(res));
    }

    // метод удаления карточки с сервера  
    deleteCard(cardId) {
        return fetch(`${this._baseUr1}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(res => this._parseResponse(res));
    }

    // метод устанвки лайка
    clickLike(cardId) {
        return fetch(`${this._baseUr1}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(res => this._parseResponse(res));
    }

    // метод удаления лайка
    deleteLike(cardId) {
        return fetch(`${this._baseUr1}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(res => this._parseResponse(res));
    }

    // метод делает запрос серверу и получает данные профиля
    getUserInfo() {
        return fetch(`${this._baseUr1}/users/me`, {
            headers: this._headers
        })
        .then(res => this._parseResponse(res));
    }

    // метод изменяет данные профиля на сервере
    editUserInfo(data) {
        return fetch(`${this._baseUr1}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.username,
                about: data.job
            })
        })
        .then(res => this._parseResponse(res));
    }

    // метод изменяет аватар на сервере
    editAvatar(data) {
        return fetch (`${this._baseUr1}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.link
            })
        })
        .then(res => this._parseResponse(res));
    }
}

//экспорт класса API
export {Api};