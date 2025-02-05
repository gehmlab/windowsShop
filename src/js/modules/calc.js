function calc() {
function initPopupCalc() {
  const previewImages = document.querySelectorAll('.balcon_icons_img'); // маленькие картинки
  const bigImages = document.querySelectorAll('.big_img img'); // большие картинки

  // Обработчик клика по маленьким картинкам
  previewImages.forEach((preview, index) => {
    preview.addEventListener('click', () => {
          // Скрыть все большие картинки
          bigImages.forEach(img => {
              img.style.display = 'none';
          });

          // Показываем соответствующую большую картинку
          bigImages[index].style.display = 'inline-block';

          // Выделяем активную превьюшку
          previewImages.forEach(item => item.classList.remove('do_image_more'));
          preview.classList.add('do_image_more');

      });
  });
  
}
initPopupCalc();
}

export default calc;
