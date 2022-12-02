let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__editbutton');
let popupClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_username');
let jobInput = formElement.querySelector('.popup__input_description');
let name = content.querySelector('.profile__name');
let description = content.querySelector('.profile__text');
let popupSumbit = document.querySelector('.popup__submite');


function visibilityPopup(){
    popup.classList.remove('popup__visibility');
	nameInput.value= name.textContent;
	jobInput.value = description.textContent;
}

function novisibilityPopup(){
	popup.classList.add('popup__visibility');
}


function handleFormSubmit (evt) {
	evt.preventDefault();
	name.textContent = nameInput.value;
	description.textContent = jobInput.value;
	novisibilityPopup();
}


editButton.addEventListener('click', visibilityPopup);
popupClose.addEventListener('click', novisibilityPopup);
formElement.addEventListener('submit', handleFormSubmit)


