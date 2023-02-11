
class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
  }
//метод показа ошибок валидации
  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._config.inputErrorClass);
  }
  //метод скрытия ошибок валидации
  _hideInputError(inputElement){
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(this._config.inputErrorClass);
  }
  //метод валидации форм
  _checkInputValidity(inputElement){
    if (inputElement.validity.valid){
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
  }
  //метод обхода input на ошибки
  _hasInvalidInput(){
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  
  disableSubmitButton() {
    this._buttonElement.classList.add(this._config.invactiveButtonClass);
    this._buttonElement.disabled = true;
  }
  
  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._config.invactiveButtonClass);
    this._buttonElement.disabled = false;
  }
  
  _toggleButtonState(){
    if (this._hasInvalidInput()){
      this.disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }
  
  //resetSubmit() {
    //this._inputList.forEach((inputElement) => { this._hideInputError(inputElement);})
   // this.toggleButtonState();
  //}


  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input',() => {
        this._checkInputValidity(inputElement);
    this._toggleButtonState();
      });
    });
  }
  
  enableValidation() {
    this._setEventListeners();
  }
}

export {FormValidator};