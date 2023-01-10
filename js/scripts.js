//обьявления переменных 
const content = document.querySelector('.content');
//переменные по изменению данных пользователя
const editButton = content.querySelector('.profile__edit-button');
const name = content.querySelector('.profile__name');
const description = content.querySelector('.profile__text');
const addButton = content.querySelector('.profile__add-button');

//поиск сектора в которой добавляются карточки
const elements = document.querySelector('.elements');

//элементы принятые с попапа profile
const profilePopup = document.querySelector('.popup_type_profile');
const profilePopupForm = profilePopup.querySelector('.popup__form');
const nameInput = profilePopup.querySelector('.popup__input_type_name');
const jobInput = profilePopup.querySelector('.popup__input_type_job');

//элементы принятые с попапа card
const cardPopup = document.querySelector('.popup_type_card');
const cardPopupForm = cardPopup.querySelector('.popup__form');
const titleInput = cardPopup.querySelector('.popup__input_type_name');
const linkInput = cardPopup.querySelector('.popup__input_type_job');

//элементы принятые с попапа img
const popupTypeImg = document.querySelector('.popup_type_img');
const popupImg = popupTypeImg.querySelector('.popup__img');
const popupText = popupTypeImg.querySelector('.popup__text');

// массив первых карточек 
const initialCards = [
  {
    name: 'Швейцария',
    link: 'https://images.unsplash.com/photo-1606349779646-b6ca5df78bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Иссландия',
    link: 'https://images.unsplash.com/photo-1657010896979-c47163861598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Гора Синай, Египет',
    link: 'https://images.unsplash.com/photo-1660427974110-0e0aa0d1c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Капри, город Неаполь',
    link: 'https://images.unsplash.com/photo-1665690992253-f2bb077c1d02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Вулкан Фуэго ',
    link: 'https://images.unsplash.com/photo-1663790913610-fbae9cf3d2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Каппадокия.Гереме',
    link: 'https://images.unsplash.com/photo-1669111957903-36e4da270ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Японский исторический мавзолей',
    link: 'https://images.unsplash.com/photo-1650361128424-00e941139e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'Рифы Каньетти',
    link: 'https://images.unsplash.com/photo-1629896403970-b6e2d52c47c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=610&q=80'
  },
  {
    name: 'Ао Нанг, Краби',
    link: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  }
];

//открытие попапа
function openPopup(popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escClose);
}
//закрытие попапа
function closePopup(popup){
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escClose);
}


//сохранения данных в попапе
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  description.textContent = jobInput.value;
  closePopup(profilePopup);
}

//кнопка открытия popup Profile
editButton.addEventListener('click', () =>{ 
  openPopup(profilePopup)
  nameInput.value = name.textContent;
  jobInput.value = description.textContent;
});

//кнопка сохранения изменения попапа profile
profilePopupForm.addEventListener('submit', handleProfileFormSubmit);

//кнопка открытия попапа Card
addButton.addEventListener('click', () => openPopup(cardPopup));

//Закрытие попапов при нажатии на close
const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
  
  
  popup.addEventListener('mousedown',(event)=>{
    if (event.target.classList.contains('popup')){
      closePopup(popup);
    }
  })
});

function escClose(event){
  if (event.key === 'Escape'){
    closePopup(popupTypeImg);
  }
}

function openPopupImg(title,link){
  popupText.textContent = title;
  popupImg.src = link;
  popupImg.alt = title;
  console.log(popupText.textContent);
  console.log(popupImg.src);
  openPopup(popupTypeImg);
}

initialCards.forEach(({ name, link}) => {
  addElement(name, link);
})

//кнопка сохранения новой карточки
cardPopupForm.addEventListener('submit',addNewCard);

//добавление новой карточки
function addNewCard (evt) {
  evt.preventDefault();
  const nameCard = titleInput.value;
  const linkCard = linkInput.value;
  addElement(nameCard,linkCard);
  closePopup(cardPopup);
  evt.target.reset();
}

function addElement(nameCard, linkCard){
  const cardElement = createCard(nameCard, linkCard);
  elements.prepend(cardElement);
}

function createCard(nameCard, linkCard){
  const elementTemplate = document.querySelector('#element-template').content;
  const elementCard = elementTemplate.querySelector('.element').cloneNode(true);
  const elementMask = elementCard.querySelector('.element__mask');
  const elementText = elementCard.querySelector('.element__text');
  elementMask.src = linkCard;
  elementMask.alt = nameCard;
  elementText.textContent = nameCard;
  elementCard.querySelector('.element__group').addEventListener('click',function(evt){
    evt.target.classList.toggle('element__group_active');
  });
  elementCard.querySelector('.element__delete').addEventListener('click',function(evt){
    evt.target.closest('.element').remove();
  });
  elementMask.addEventListener('click', () => openPopupImg(nameCard,linkCard));
  return elementCard;
}


const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  invactiveButtonClass:'popup__submit_disabled',
  inputErrorClass:'popup__input_type_error',
  errorClass:'popup__input_type_visible'
	
};

enableValidation(validationConfig);

