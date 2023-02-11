import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
    //принимает в конструктор селектор попап и колблек сабмита формы
    constructor({ popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupFormItem = this._popupItem.querySelector('.popup__form');
        this._popupList = Array.from(this._popupFormItem.querySelectorAll('.popup__input'));
    }
//метод собирает данные всех полей формы
    _getInputValues() {
        const formValues = {};
        this._popupList.forEach(input => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }
//добавляем обработчик клика и обработчик самбита формы
    setEventListeners() {
        super.setEventListeners();
        this._popupFormItem.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }
//метод закрытия попапа
    close() {
        super.close();
        this._popupFormItem.reset();
    }
}
//экспортруем класс PopupWithForm
export { PopupWithForm };