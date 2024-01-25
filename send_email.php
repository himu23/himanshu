<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "hmshete12@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";

    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8";

    $mailBody = "Name: $name <br>";
    $mailBody .= "Email: $email <br>";
    $mailBody .= "Message: $message";

    mail($to, $subject, $mailBody, $headers);

    echo "Thank you for contacting me!";
} else {
    header("Location: index.html");
    exit;
}
?>
