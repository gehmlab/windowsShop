<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Разрешаем CORS (если фронтенд отдельно)

// Путь к файлу JSON
$jsonFile = 'data.json';

// Проверяем метод запроса
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['user_name'] ?? '');
    $phone = trim($_POST['user_phone'] ?? '');

    // Валидация
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

    // Добавляем новую запись
    $newEntry = [
        "name" => $name,
        "phone" => $phone,
        "timestamp" => date("Y-m-d H:i:s") // Добавляем время
    ];
    $existingData[] = $newEntry;

    // Сохраняем обратно в JSON
    file_put_contents($jsonFile, json_encode($existingData, JSON_PRETTY_PRINT));

    // Отправляем ответ
    echo json_encode(["success" => true, "message" => "Данные сохранены в JSON!"]);
} else {
    echo json_encode(["success" => false, "message" => "Неверный метод запроса"]);
}
