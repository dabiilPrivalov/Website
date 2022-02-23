<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->Charset = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer/language');
$mail->IsHTML(true);

$mail->setFrom('rssreader90@gmail.com', 'Ot sebya');
$mail->addAddress('insolsound@gmail.com');
$mail->Subject = 'Zayavka';

$body = '<h1>Zayavka</h1>';

$mail->Body = $body;

if(!$mail->send()) {
  $message = 'Oshibka';

} else {
  $message = 'Otpravleno';
}
$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>
