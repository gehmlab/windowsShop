function tabs() {
  // Получаем все блоки (как с картинками, так и с надписями)
  const glazingBlocks = document.querySelectorAll('.glazing_block');
  const links = document.querySelectorAll('.glazing_slider a');

  // Функция для переключения активного состояния
  function setActiveTab(target) {
    const targetSelector = target.getAttribute('data-windows');
   
    // Проверка на пустой атрибут data-windows
    if (!targetSelector) {
      console.error('Ошибка: атрибут data-windows пустой!');
      return; // Если атрибут пуст, выходим из функции
    }

    // Скрываем все ряды
    const allRows = document.querySelectorAll('.glazing_content');
    allRows.forEach(row => {
      row.style.display = 'none';
    });

    // Показываем нужный ряд
    const activeRow = document.querySelector(targetSelector);
    if (activeRow) {
      activeRow.style.display = 'block';
    }

    // Снимаем класс 'active' со всех элементов
    glazingBlocks.forEach(block => {
      block.classList.remove('active');
    });
    links.forEach(link => {
      link.classList.remove('active');
    });

    // Добавляем класс 'active' к текущему элементу
    target.closest('.glazing_block').classList.add('active');
    target.classList.add('active');
  }

  // Обработчик клика по картинке и тексту
  glazingBlocks.forEach(block => {
    // Клик на блок
    block.addEventListener('click', function(e) {
      let target = e.target.closest('a'); // Найдем кликнутую ссылку внутри блока

      // Если клик был по картинке, берем первую ссылку внутри блока
      if (!target) {
        target = block.querySelector('a');
      }

      if (target && target.hasAttribute('data-windows')) {
        e.preventDefault(); // отменяем стандартное поведение ссылки
        setActiveTab(target);
      }
    });
  });

  // Инициализация — показываем первый элемент
  if (links.length > 0) {
    links[0].click();
  }
}

export default tabs;
