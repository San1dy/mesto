class Popup {
    constructor(popupSelector) {
        this._popupItem = document.querySelector(popupSelector);
    }
//метод открытия попапов
    open(){
        this._popupItem.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
      }
//метод закрытия попапов
    close(){
        this._popupItem.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
      }
//метод закрытия на ESC
    _handleEscClose = (evt) => {
        //event.preventDefault();
        if (evt.key === 'Escape') {
          this.close();
        }
      }
//метод закрытия попапа на крестик, а так же на темный фон вокруг картинки
    setEventListeners() {
    this._popupItem.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
        this.close();
      }
    })
  }
}
//экспортруем данный класс
export {Popup};