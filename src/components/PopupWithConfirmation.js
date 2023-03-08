import { Popup } from "./Popup.js";

class PopupWithConfirmation extends Popup {
    constructor ({ popupSelector, handleDeleteCard }) {
        super(popupSelector);
        this._handleDeleteCard = handleDeleteCard;
        this._submit = this._popupItem.querySelector('.popup__submit');
    }

    //Добавляем информацию о конкретной карточке в момент открытия поапа
    open(cardElement, cardId) {
        this._cardElement = cardElement;
        this._cardId = cardId;
        super.open();
    }

    // слушатель сабмита формы
    setEventListeners() {
        super.setEventListeners();
        this._submit.addEventListener('click', (event) => {
            event.preventDefault();
            this._handleDeleteCard(this._cardElement, this._cardId);
        })
    }
}

//экспортруем класс PopupWithConfirmation
export { PopupWithConfirmation };