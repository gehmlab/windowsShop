function decoration() {
  const dataDecorationElements = document.querySelectorAll('[data-decoration]');

  dataDecorationElements.forEach(elem => {
    elem.addEventListener('click', () => {
      // 1. Удаляем класс no_click у всех элементов
      dataDecorationElements.forEach(item => {
        item.classList.remove('no_click');
        item.classList.remove('after_click'); // Убираем after_click у всех
      });

      // 2. Добавляем класс after_click элементу, на который кликнули
      elem.classList.add('after_click');

      // 3. Получаем значение атрибута data-decoration у элемента, на который кликнули
      const targetClass = elem.getAttribute('data-decoration');

      // 4. Скрываем все элементы, классы которых соответствуют значениям data-decoration
      dataDecorationElements.forEach(item => {
        const itemClass = item.getAttribute('data-decoration');
        const targetElement = document.querySelector(`.${itemClass}`);
        if (targetElement) {
          targetElement.style.display = 'none'; // Скрываем элемент
        }
      });

      // 5. Показываем элемент, класс которого соответствует значению data-decoration элемента, на который кликнули
      const elementToShow = document.querySelector(`.${targetClass}`);
      if (elementToShow) {
        elementToShow.style.display = 'block'; // Показываем элемент
      }
    });
  });
}

export default decoration;