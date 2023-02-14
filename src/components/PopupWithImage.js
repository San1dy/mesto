import { Popup } from "./Popup.js";

 class PopupWithImage extends Popup {
    //в конструктор присылаем селектор попап
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popupItem.querySelector('.popup__img');
        this._popupName = this._popupItem.querySelector('.popup__text');
    }
//данный метод перезаписывает родительский метод open
    open(link, name) {
        this._popupImage.src = link;
        this._popupName.textContent = name;
        this._popupImage.alt = name;
        super.open();
    }
}

export { PopupWithImage };