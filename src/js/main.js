document.addEventListener('DOMContentLoaded', () => {
  const headerBtn = document.querySelector('.header_btn');
  const popupEngineer = document.querySelector('.popup_engineer');
  const btnClose = document.querySelectorAll('.popup_close');

  headerBtn.addEventListener('click', () => {
    openModal(popupEngineer)
  });

  function openModal(modal) {
    modal.style.display = 'block'
  }

  btnClose.forEach((button) => {
    button.addEventListener('click', (e) => {

      const popup = e.target.closest('.popup, .popup_engineer, .popup_calc, .popup_calc_profile, .popup_calc_end');
      
      if (popup) {
        popup.style.display = 'none';
      }
    });
  });
});