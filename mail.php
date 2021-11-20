<?php
require_once 'PHPMailer-master/src/PHPMailer.php';

$admin_email = 'kosogorov.anton@gmail.com';

$form_subject = 'Заказ обратного звонка';

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

$c = true;
$message = '';
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "admin_email" && $key != "form_subject" ) {
    if (is_array($value)) {
      $val_text = '';
      foreach ($value as $val) {
        if ($val && $val != "") {
          $val_text .= ($val_text==''?'':',').$val;
        }
      }
      $value = $val_text;
    }
    $message .= "
    " . ( ($c = != $c) ? '<tr>':'<tr>') . "
    <td style='padding: 10px; width: auto;><b>$key:</b></td>
    <td style='padding: 10px; width: 100%;>$value</td>
    </tr>
    ";
  }
}
$message = "<table style='width: 50%;'>$message</table>";

$mail->setFrom('ad@'. $_SERVER['HTTP_HOST'], 'Your best site');

$mail->addAddress($admin_email);

$mail->Subject = $form_subject;

$body = $message;

$mail->msgHTML($body);

$mail->send();
?>
