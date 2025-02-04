function forms(formsSelector) {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); 
  
      const formData = new FormData(form);
  
      const userPhone = formData.get('user_phone');
      const userPhoneInput = form.querySelector('input[name="user_phone"]');
  
      // Очистить сообщение об ошибке перед валидацией
      clearErrorMessage(userPhoneInput);
  
      if (!/^\d+$/.test(userPhone)) {
        showErrorMessage(userPhoneInput, 'Пожалуйста, введите только цифры в поле телефона.');
        return;
      }
  
      // Оповещаем пользователя, что данные отправляются
      showLoadingState(form);
  
      // Отправка данных через AJAX (fetch)
      fetch('assets/server.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json()) // Предполагаем, что сервер возвращает JSON
      .then(data => {
        if (data.success) {
          showSuccessState(form); // Показать успешное сообщение
        } else {
          showErrorState(form); // Показать сообщение об ошибке
        }
      })
      .catch(error => {
        console.error('Ошибка отправки данных:', error);
        showErrorState(form); // Показать сообщение об ошибке
      });
    });
  });
  
  // Функции для отображения состояния
  function showLoadingState(form) {
    const button = form.querySelector('button');
    button.innerHTML = 'Идет отправка...';
    button.disabled = true;
  }
  
  function showSuccessState(form) {
    const button = form.querySelector('button');
    button.innerHTML = 'Отправлено!';
    button.disabled = true;
    setTimeout(() => {
      button.innerHTML = 'Вызвать замерщика!';
      button.disabled = false;
      form.reset(); // Очистка формы
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
    // Проверяем, если сообщение уже существует, не добавляем новое
    const existingErrorMessage = inputElement.nextElementSibling;
  
    // Если следующего элемента нет, или он не является сообщением об ошибке
    if (!existingErrorMessage || existingErrorMessage.tagName !== 'DIV' || !existingErrorMessage.textContent) {
      const errorMessage = document.createElement('div');
      errorMessage.textContent = message;
      errorMessage.style.color = 'red';
      errorMessage.style.marginTop = '5px';
      inputElement.insertAdjacentElement('afterend', errorMessage);
    }
  }

  // Функция для очистки сообщения об ошибке
function clearErrorMessage(inputElement) {
  const existingErrorMessage = inputElement.nextElementSibling;

  // Проверяем, если следующий элемент существует и является <div> с текстом
  if (existingErrorMessage && existingErrorMessage.tagName === 'DIV' && existingErrorMessage.textContent) {
    existingErrorMessage.remove(); // Удаляем сообщение об ошибке
  }
}
};

export default forms;
