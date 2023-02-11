class Section {
//в конструктор поступают массив данных . функция отвечающая за отрисовку. второй параметр - селектор
    constructor ({items,renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    }
//метод отвечает за отрисовку всех элементов
    renderItems() {
        this._items.forEach(this._renderer);
    }
//  принимаем элемент и вставляем его в контейнер
    setItem(element) {
        this._containerSelector.prepend(element);
    }
}
//экспорт класса Section
export { Section };