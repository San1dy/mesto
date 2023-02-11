class UserInfo {
    //конструктор принимает объект с 2 селектарами, имени и информации пользователя
    constructor({ username, job}) {
        this._username = document.querySelector(username);
        this._job = document.querySelector(job);
        console.log(this._username);
    }
//метод возвращает обьект с данными пользователя
    getUserInfo() {
        console.log(this._username.textContent);
        return {
            username: this._username.textContent,
            job: this._job.textContent
        };
    }
//метод который принимает новые данные пользователя и добавляет их на страницу
    setUserInfo({username, job}) {
        this._username.textContent = username;
        this._job.textContent = job;
        console.log(this._username.textContent);
    }
}

//экспортируем класс UserInfo
export { UserInfo };