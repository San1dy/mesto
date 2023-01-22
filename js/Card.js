import {openPopup, popupImg, popupText,popupTypeImg} from "./utils.js";
class Card {
	constructor(nameCard, linkCard, templateSelector) {
		this._nameCard = nameCard;
		this._linkCard = linkCard;
		this._templateSelector = templateSelector;
    }

	_getTemplate(){
		return document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
	}

	_openPopupImg () {
    popupText.textContent = this._nameCard;
    popupImg.src = this._linkCard;
    popupImg.alt = this._nameCard;
    openPopup(popupTypeImg);
	}

	createCard() {
		this._elementCard = this._getTemplate();
		this._elementMask = this._elementCard.querySelector('.element__mask');
    this._elementText = this._elementCard.querySelector('.element__text');
    this._elementMask.src = this._linkCard;
  	this._elementMask.alt = this._nameCard;
  	this._elementText.textContent = this._nameCard;
		this._setEventListeners();
		return this._elementCard;
	}

	_setEventListeners = () => {
		this._elementCard.querySelector('.element__delete').addEventListener('click',function(evt){
			evt.target.closest('.element').remove();
		});
		this._elementCard.querySelector('.element__group').addEventListener('click',function(evt){
			evt.target.classList.toggle('element__group_active');
		});
		this._elementMask.addEventListener('click', () => this._openPopupImg());
	}

}

export {Card};