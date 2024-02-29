<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$errors = [];
$errorMessage = '';
$successMessage = '';
$siteKey = ''; // reCAPTCHA site key
$secret = ''; // reCAPTCHA secret key

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = sanitizeInput($_POST['name']);
    $email = sanitizeInput($_POST['email']);
    $phone = sanitizeInput($_POST['phone']);
    $message = sanitizeInput($_POST['message']);
  
  
  if (empty($name)) {
    $errors[] = 'Name is empty';
  }
  if (empty($phone)) {
    $errors[] = 'Celular está vacio';
  }
  if (empty($email)) {
    $errors[] = 'Email is empty';
  }  else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email is invalid';
  }

  if (!empty($errors)) {
    $allErrors = join('<br/>', $errors);
    $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
  } else {
    $toEmail = 'alexgf2703@gmail.com';
    $emailSubject = 'Nuevo interesado de landing de Temis';

      // Create a new PHPMailer instance
        $mail = new PHPMailer(true);
        try {
            // Configure the PHPMailer instance
            $mail->isSMTP();
            $mail->Host = 'mail.ingytal.com';
            $mail->SMTPAuth = true; //true;
            $mail->Username = 'landingtemis@ingytal.com';
            $mail->Password = '2024@l@nd1n#';
            $mail->SMTPSecure = 'ssl'; //PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 465;

            // Set the sender, recipient, subject, and body of the message
            $mail->setFrom('landingtemis@ingytal.com');
            $mail->addAddress($toEmail);
            $mail->Subject = $emailSubject;
            $mail->isHTML(true);
            $mail->Body = "<p>Nombre: {$name}</p><p>Celular: {$phone}</p><p>Correo: {$email}</p><p>Mensaje: {$message}</p>";

            // Send the message
            $mail->send();

            $successMessage = "<p class='font-weight-600' style='color: white;font-size:20px;margin-top:50px;'>Muchas gracias por su mensaje, en breve nos estaremos contactando.</p>";
            $data = array("respuesta" => $successMessage);
            echo(json_encode($data));
            exit();
        } catch (Exception $e) {
            $errorMessage = "<p class='font-weight-600 font-size-lg' style='color: red; font-size:20px;'>Hubo un error, por favor intentelo más tarde</p>";
            echo($errorMessage);
    }
  }
}

function sanitizeInput($input) {
   $input = trim($input);
   $input = stripslashes($input);
   $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
   return $input;
}

?>
