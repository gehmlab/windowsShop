<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Разрешаем CORS (если фронтенд отдельно)

// Путь к файлу JSON
$jsonFile = 'data.json';

// Проверяем метод запроса
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получаем все данные из POST-запроса
    $formData = $_POST;  // Массив всех данных формы

    // Валидация обязательных полей
    $name = trim($formData['user_name'] ?? '');
    $phone = trim($formData['user_phone'] ?? '');

    if (empty($name) || empty($phone)) {
        echo json_encode(["success" => false, "message" => "Все поля обязательны!"]);
        exit;
    }

    if (!preg_match('/^\d+$/', $phone)) {
        echo json_encode(["success" => false, "message" => "Телефон должен содержать только цифры!"]);
        exit;
    }

    // Читаем старые данные из файла
    $existingData = file_exists($jsonFile) ? json_decode(file_get_contents($jsonFile), true) : [];

    // Добавляем новую запись, которая будет содержать все данные из формы
    $newEntry = array_merge(
        $formData,  // Все поля формы
        ["timestamp" => date("Y-m-d H:i:s")] // Добавляем время
    );
    $existingData[] = $newEntry;

    // Сохраняем обратно в JSON, без экранирования Unicode символов
    file_put_contents($jsonFile, json_encode($existingData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

    // Отправляем ответ
    echo json_encode(["success" => true, "message" => "Данные сохранены в JSON!"]);
} else {
    echo json_encode(["success" => false, "message" => "Неверный метод запроса"]);
}
?>
