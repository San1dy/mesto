class UserInfo {
    //конструктор принимает объект с 2 селектарами, имени и информации пользователя
    constructor({ username, job, avatar}) {
        this._username = document.querySelector(username);
        this._job = document.querySelector(job);
        this._avatar = document.querySelector(avatar);
    }
//метод возвращает обьект с данными пользователя
    getUserInfo() {
        return {
            username: this._username.textContent,
            job: this._job.textContent,
            avatar: this._avatar.src
        };
    }
//метод который принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(data) {
        this._username.textContent = data.name;
        this._job.textContent = data.about;
        this._avatar.src = data.avatar;
    }
}

//экспортируем класс UserInfo
export { UserInfo };