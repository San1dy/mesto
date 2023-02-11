class Card {
	constructor(data, templateSelector, handleImageClick) {
		this._name = data.name;
		this._link = data.link;
		this._templateSelector = templateSelector;
		this._handleImageClick = handleImageClick;
    }

	_getTemplate(){
		return document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
	}


//метод создания карточки
	createCard() {
		this._elementCard = this._getTemplate();
		this._elementMask = this._elementCard.querySelector('.element__mask');
    	this._elementText = this._elementCard.querySelector('.element__text');
    	this._elementMask.src = this._link;
  		this._elementMask.alt = this._name;
  		this._elementText.textContent = this._name;
		this._setEventListeners();
		return this._elementCard;
	}

// Метод лайка
	_toggleLike(evt) {
			evt.target.classList.toggle('element__group_active');
	}

// Метод удаления карточки на икноку корзинки
	_deleteCard(evt) {
			evt.target.closest('.element').remove();
	}

	//Сейчас долен передаваться данный метод как функция с класса Popup
	//Метод открытия картинки в отдельном попапе
	//_handleImageClick () {
		//popupText.textContent = this._nameCard;
		//popupImg.src = this._linkCard;
		//popupImg.alt = this._nameCard;
		//openPopup(popupTypeImg);
		//}

//обработчики удаления::лайка::клика по картинке
	_setEventListeners = () => {
		this._elementCard.querySelector('.element__group').addEventListener('click', this._toggleLike);
		this._elementCard.querySelector('.element__delete').addEventListener('click', this._deleteCard);
		this._elementMask.addEventListener('click', () => this._handleImageClick(this._link, this._name));
	}

}
//экспорт класса
export {Card};