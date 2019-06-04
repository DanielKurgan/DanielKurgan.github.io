<?php
//Принимаем постовые данные
$name=$_POST['name'];
$telegram=$_POST['telegram'];
$vk=$_POST['vk'];
//Тут указываем на какой ящик посылать письмо
$to = "danielkvinov@mail.ru";
//Далее идет тема и само сообщение
// Тема письма
$subject = "Заявка с сайта";
// Сообщение письма
$message = "
Имя пользователя: ".htmlspecialchars($name)."<br />
Telegram: <a href='tel:$telegram'>".htmlspecialchars($telegram)."</a>" "<br />
VK: <a href='tel:$vk'>".htmlspecialchars($vk)."</a>";
// Отправляем письмо при помощи функции mail();
$headers = "From: stastroi.ru <mail@stastroi.ru>\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $subject, $message, $headers);
// Перенаправляем человека на страницу благодарности и завершаем скрипт
header('Location: ../thanks.html');
exit();
?>