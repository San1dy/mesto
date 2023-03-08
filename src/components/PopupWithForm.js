import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
    //принимает в конструктор селектор попап и колблек сабмита формы
    constructor({ popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupFormItem = this._popupItem.querySelector('.popup__form');
        this._popupList = this._popupFormItem.querySelectorAll('.popup__input');
        this._submitButton = this._popupFormItem.querySelector('.popup__submit');
        this._submitButtonText = this._submitButton.textContent;
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
//Изменяем состояние кнопки во время загрузки
    loading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Сохранение...'
        } else {
            this._submitButton.textContent = this._submitButtonText;
        }
    }
}
//экспортруем класс PopupWithForm
export { PopupWithForm };