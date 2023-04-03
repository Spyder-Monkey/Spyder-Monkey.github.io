<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "tbends@trevorbender.com";
    $subject = "New email from portfolio site";
    $txt = "Name: ". $name . "\r\nEmail: " . $email . "\r\nMessage: " . $message;
    $headers = "From: {$email}";

    if($email!=NULL) {
        if(mail($to, $subject, $txt, $headers)) {
            echo "<p>mail sent.</p>";
            header("Location:index.html");
        }
        else {
            echo "<p>failed</p>";
        }
    }
?>