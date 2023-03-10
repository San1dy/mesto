class Card {
	constructor({data, templateSelector, userId, handleSetLike, handleDeleteLike }, handleImageClick, handleDeleteImageClick) {
		this._name = data.name;
		this._link = data.link;
		this._likes = data.likes;
		this._cardId = data._id;
		this._cardOwnerId = data.owner._id;
		this._templateSelector = templateSelector;
		this._userId = userId;
		//this._api = api;
		this._handleImageClick = handleImageClick;
		this._handleDeleteImageClick = handleDeleteImageClick;
		this._handleSetLike = handleSetLike;
		this._handleDeleteLike = handleDeleteLike;
    }
	//возвращает разметку карточки
	_getTemplate(){
		this._cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
		return this._cardElement;
	}

//метод создания карточки
	createCard() {
		this._elementCard = this._getTemplate();
		this._elementMask = this._elementCard.querySelector('.element__mask');
    	this._elementText = this._elementCard.querySelector('.element__text');
    	this._elementMask.src = this._link;
  		this._elementMask.alt = this._name;
  		this._elementText.textContent = this._name;
		this._likeButton = this._elementCard.querySelector('.element__group');
		this._likeNumber = this._elementCard.querySelector('.element__likes-number');
		this._deleteButton = this._elementCard.querySelector('.element__delete');
		this._isCardLiked();
		this._hasDeleteButton();
		this._likeNumber.textContent = this._likes.length;
		this._setEventListeners();
		return this._elementCard;
	}

//обработчики удаления::лайка::клика по картинке
	_setEventListeners = () => {
		this._likeButton.addEventListener('click', () => {this._handleLikeCard()});
		this._deleteButton.addEventListener('click', () => {this._handleDeleteImageClick(this._cardElement, this._cardId);} );
		this._elementMask.addEventListener('click', () => this._handleImageClick(this._link, this._name));
	}

	//проверка. стоит ли лайк на карточке
	_isCardLiked() {
		if (this._likes.some((user) => {
			return this._userId === user._id;
		})) {
			this._likeButton.classList.add('element__group_active');
		}
	}

	//поставить/удалить лайк, изменение количества лайков
	handleLike(data) {
		this._likes = data.likes;
		this._likeNumber.textContent = this._likes.length;
		this._likeButton.classList.toggle('element__group_active');
	  }
	

	  _handleLikeCard() {
		if (this._likeButton.classList.contains('element__group_active')) {
			this._handleDeleteLike(this._cardId);
		} else {
			this._handleSetLike(this._cardId);
		}
	  }
	/*
	_handleLikeCard() {
		console.log(this._likeButton);
		if (this._likeButton.classList.contains('element__group_active')) {
			this._api.deleteLike(this._cardId)
				.then((res) => {
					this._likeButton.classList.remove('element__group_active');
					this._likeNumber.textContent = res.likes.length;
				})
				.catch((err) => {
					console.log(`Ошибка: ${err}`);
				});
		} else {
			this._api.clickLike(this._cardId)
				.then((res) => {
					this._likeButton.classList.add('element__group_active');
					this._likeNumber.textContent = res.likes.length;
				})
				.catch((err) => {
					console.log(`Ошибка: ${err}`);
				});
		}
	}
*/
	//проверяем владельца карточки и убираем кнопку Delete
	_hasDeleteButton() {
		if (this._userId !== this._cardOwnerId) {
			this._deleteButton.remove();
		}
	}

}
//экспорт класса
export {Card};