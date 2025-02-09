import calc from "./calc";

const calculator = calc();
const formData = new FormData(); // Создаем общий объект FormData

function modals() {
  const modals = {
    popup: document.querySelector('.popup'),
    engineer: document.querySelector('.popup_engineer'),
    calc: document.querySelector('.popup_calc'),
    calcProfile: document.querySelector('.popup_calc_profile'),
    calcEnd: document.querySelector('.popup_calc_end')
  };

  const triggers = {
    openEngineer: document.querySelector('.header_btn'),
    openPopup: document.querySelectorAll('.phone_link'),
    openCalc: document.querySelectorAll('.popup_calc_btn'),
    nextCalc: document.querySelector('.popup_calc_button'),
    nextCalcProfile: document.querySelector('.popup_calc_profile_button')
  };

  const closeButtons = document.querySelectorAll('.popup_close, .popup_calc_close, .popup_calc_profile_close, .popup_calc_end_close');

  // Открытие модального окна
  function openModal(modal) {
    if (modal) modal.style.display = 'block';
  }

  // Закрытие модального окна
  function closeModal(modal) {
    if (modal) modal.style.display = 'none';
  }

  if (triggers.openEngineer) {
    triggers.openEngineer.addEventListener('click', () => openModal(modals.engineer));
  }

  triggers.openPopup.forEach(btn =>
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(modals.popup);
    })
  );

  triggers.openCalc.forEach(btn =>
    btn.addEventListener('click', () => openModal(modals.calc))
  );

  if (triggers.nextCalc) {
    triggers.nextCalc.addEventListener('click', () => {
      calculator.setSizeWindows();
      
      // ✅ Получаем данные и проверяем, что они корректны
      const formValues = calculator.getFormData();
      console.log("📌 Полученные данные (Размер окна):", formValues);

      if (formValues.width && formValues.height) {
        formData.set('width', formValues.width);
        formData.set('height', formValues.height);
      } else {
        console.error("❌ Ошибка: Размеры окна не получены!");
      }

      console.log("📌 FormData после первого шага:", Object.fromEntries(formData));

      closeModal(modals.calc);
      openModal(modals.calcProfile);
    });
  }

  if (triggers.nextCalcProfile) {
    triggers.nextCalcProfile.addEventListener('click', () => {
      closeModal(modals.calcProfile);
      openModal(modals.calcEnd);
      calculator.selectTypeGlasses();
      
      // ✅ Получаем данные и проверяем, что они корректны
      const formValues = calculator.getFormData();
      console.log("📌 Полученные данные (Тип стекла):", formValues);

      if (formValues.view_type && formValues.type_glazing) {
        formData.set('view_type', formValues.view_type);
        formData.set('type_glazing', formValues.type_glazing);
      } else {
        console.error("❌ Ошибка: Тип остекления не получен!");
      }

      console.log("📌 FormData после второго шага:", Object.fromEntries(formData));

 
    });
  }

  // Закрытие по кнопкам
  closeButtons.forEach(btn =>
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.popup, .popup_engineer, .popup_calc, .popup_calc_profile, .popup_calc_end');
      closeModal(modal);
    })
  );

  // Закрытие при клике вне контента
  Object.values(modals).forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup_dialog')) closeModal(modal);
      });
    }
  });

  // Функция переключения картинок в калькуляторе
  function initPopupCalc() {
    const previewImages = document.querySelectorAll('.balcon_icons_img');
    const bigImages = document.querySelectorAll('.big_img img');

    previewImages.forEach((preview, index) => {
      preview.addEventListener('click', () => {
        bigImages.forEach(img => img.style.display = 'none');
        bigImages[index].style.display = 'inline-block';

        previewImages.forEach(img => img.classList.remove('do_image_more'));
        preview.classList.add('do_image_more');
      });
    });
  }

  initPopupCalc();
}

export default modals;
