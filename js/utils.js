import {popupImg, popupText, popupTypeImg} from "./constants.js";

//открытие попапа




  function openPopup(popup){
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
  }
  //закрытие попапа
  function closePopup(popup){
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
  }

  function closeByEsc(event){
    if (event.key === 'Escape'){
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
  }

  export {openPopup, popupImg, popupText, popupTypeImg, closePopup, closeByEsc};