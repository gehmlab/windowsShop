function initImagePopup() {
  // Находим все изображения с классом preview
  const images = document.querySelectorAll('.preview');

  images.forEach(image => {
    image.addEventListener('click', (e) => {
      e.preventDefault(); // Отменяем стандартное поведение ссылки

      // Создаем подложку
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      overlay.style.zIndex = '1000';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      overlay.style.cursor = 'pointer';

      // Создаем изображение для полноэкранного просмотра
      const fullImage = document.createElement('img');
      fullImage.src = image.parentElement.href; // Берем ссылку на большое изображение
      fullImage.style.maxWidth = '90%';
      fullImage.style.maxHeight = '90%';
      fullImage.style.borderRadius = '8px';

      // Добавляем изображение на подложку
      overlay.appendChild(fullImage);

      // Добавляем подложку на страницу
      document.body.appendChild(overlay);

      // Закрытие при клике на подложку
      overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
      });
    });
  });
}

export default initImagePopup;