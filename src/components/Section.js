class Section {
//в конструктор поступают массив данных . функция отвечающая за отрисовку. второй параметр - селектор
    constructor ({renderer}, containerSelector) {
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    }
//метод отвечает за отрисовку всех элементов
    renderItems(data) {
        //console.log(data);
        data.forEach(item => this._renderer(item));
        //console.log(item);
    }
//  принимаем элемент и вставляем его в контейнер
    setItem(element) {
        this._containerSelector.prepend(element);
    }
}
//экспорт класса Section
export { Section };