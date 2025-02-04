function modals() {
  const headerBtn = document.querySelector('.header_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        phoneLink = document.querySelectorAll('.phone_link'),
        btnClose = document.querySelectorAll('.popup_close'),
        popup = document.querySelector('.popup')
        modals = [
          document.querySelector('.popup'), // обычное окно
          document.querySelector('.popup_engineer'), // окно с инженером
          document.querySelector('.popup_calc'), // калькулятор
          document.querySelector('.popup_calc_profile'), // калькулятор профиля
          document.querySelector('.popup_calc_end') // калькулятор окончания
        ].filter(modal => modal !== null);


  function openModal(modal) {
    modal.style.display = 'block'
  }

  
  function closeModal(modal) {
    if (modal) {
      modal.style.display = 'none';
    }
  }

  headerBtn.addEventListener('click', () => openModal(popupEngineer));
  phoneLink.forEach(phone => phone .addEventListener('click', () => openModal(popup)))
  

  btnClose.forEach((button) => {
    button.addEventListener('click', (e) => {

      const popup = e.target.closest('.popup, .popup_engineer, .popup_calc, .popup_calc_profile, .popup_calc_end');
      
      closeModal(popup);
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (!e.target.closest('.popup_dialog')) {
        closeModal(modal);
      }
    });
  });

}

export default modals;