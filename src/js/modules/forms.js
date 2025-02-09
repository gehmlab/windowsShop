import calc from "./calc";

function forms(formsSelector) {
  const forms = document.querySelectorAll(formsSelector);
  const calculator = calc();

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Создаём FormData из формы
      const formData = new FormData(form);

      // ✅ Получаем данные калькулятора (теперь это объект)
      const calcData = calculator.getFormData();
      console.log(calcData, "calcFormdata")
      Object.entries(calcData).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      });
      
      calculator.resetCalcData();
      // Валидация телефона
      const userPhone = formData.get('user_phone');
      const userPhoneInput = form.querySelector('input[name="user_phone"]');
      clearErrorMessage(userPhoneInput);

      if (!/^\d+$/.test(userPhone)) {
        showErrorMessage(userPhoneInput, 'Пожалуйста, введите только цифры.');
        return;
      }

      // Показываем статус загрузки
      showLoadingState(form);

      // Отправляем данные
      fetch('assets/server.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json()) 
      .then(data => {
        console.log('Ответ сервера:', data);
        if (data.success) {
          showSuccessState(form);
        } else {
          showErrorState(form);
        }
      })
      .catch(error => {
        console.error('Ошибка отправки:', error);
        showErrorState(form);
      });
    });
  });

  // Функции статусов формы
  function showLoadingState(form) {
    const button = form.querySelector('button');
    button.innerHTML = 'Отправка...';
    button.disabled = true;
  }

  function showSuccessState(form) {
    const button = form.querySelector('button');
    button.innerHTML = 'Отправлено!';
    setTimeout(() => {
      button.innerHTML = 'Вызвать замерщика!';
      button.disabled = false;
      form.reset();
    }, 2000);
  }

  function showErrorState(form) {
    const button = form.querySelector('button');
    button.innerHTML = 'Ошибка!';
    setTimeout(() => {
      button.innerHTML = 'Вызвать замерщика!';
      button.disabled = false;
    }, 2000);
  }

  function showErrorMessage(inputElement, message) {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';
    errorMessage.style.marginTop = '5px';
    inputElement.insertAdjacentElement('afterend', errorMessage);
  }

  function clearErrorMessage(inputElement) {
    const errorMessage = inputElement.nextElementSibling;
    if (errorMessage && errorMessage.tagName === 'DIV') {
      errorMessage.remove();
    }
  }
}

export default forms;
