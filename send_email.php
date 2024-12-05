<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "your-email@example.com";  
    $subject = "Новое сообщение с вашего сайта";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n";

    $body = "<h2>Новое сообщение с сайта</h2>";
    $body .= "<p><strong>Имя:</strong> $name</p>";
    $body .= "<p><strong>Email:</strong> $email</p>";
    $body .= "<p><strong>Сообщение:</strong><br>$message</p>";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Сообщение отправлено!'); window.location.href = 'index.html';</script>";
    } else {
        echo "<script>alert('Ошибка при отправке сообщения. Попробуйте позже.');</script>";
    }
}
?>
