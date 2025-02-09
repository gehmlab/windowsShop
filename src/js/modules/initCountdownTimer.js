function initCountdownTimer() {
  // Устанавливаем дату окончания акции (год, месяц - 1, день, час, минута, секунда)
  const deadline = new Date(2025, 11, 18, 23, 59, 59); // 18 декабря 2023 года, 23:59:59

  // Функция для обновления таймера
  function updateTimer() {
    const now = new Date(); // Текущая дата и время
    const timeRemaining = deadline - now; // Разница в миллисекундах

    // Если время вышло
    if (timeRemaining <= 0) {
      clearInterval(timerInterval); // Останавливаем таймер
      document.getElementById('timer').innerHTML = '<p>Акция завершена!</p>';
      return;
    }

    // Вычисляем дни, часы, минуты и секунды
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Форматируем числа с ведущим нулём
    const formatNumber = (num) => String(num).padStart(2, '0');

    // Обновляем значения на странице
    document.getElementById('days').textContent = formatNumber(days);
    document.getElementById('hours').textContent = formatNumber(hours);
    document.getElementById('minutes').textContent = formatNumber(minutes);
    document.getElementById('seconds').textContent = formatNumber(seconds);
  }

  // Обновляем таймер каждую секунду
  const timerInterval = setInterval(updateTimer, 1000);

  // Инициализация таймера сразу при загрузке страницы
  updateTimer();
}

export default initCountdownTimer;