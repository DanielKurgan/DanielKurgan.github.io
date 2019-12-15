<?php

$recepient = "panpartner@mail.ru";
$siteName = "PanPartner";

$name = trim($_POST["user-name"]);
$phone = trim($_POST["user-phone"]);
$email = trim($_POST["user-email"]);
$message = "Имя: $name \nТелефон: $phone\nПочта: $email";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>