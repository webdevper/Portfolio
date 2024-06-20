<?php
session_start();

function sanitize_input($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

function generate_csrf_token() {
    return bin2hex(random_bytes(32));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        die("Invalid CSRF token");
    }

    $name = sanitize_input($_POST['name']);
    $visitor_email = sanitize_input($_POST['email']);
    $subject = sanitize_input($_POST['subject']);
    $message = sanitize_input($_POST['message']);

    if (empty($name) || empty($subject) || empty($message)) {
        die("Name, subject, and message are required.");
    }

    if (!filter_var($visitor_email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format");
    }

    $email_from = 'webdevper.info@gmail.com';
    $email_subject = 'New Form Submission';
    $email_body = "User Name: $name.\n".
                  "User Email: $visitor_email.\n".
                  "Subject: $subject.\n".
                  "User Message: $message.\n";

    $to = 'mohanjaiswal2000@gmail.com';  

    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    if (mail($to, $email_subject, $email_body, $headers)) {
        header("Location: contact.html");
    } else {
        echo "Email sending failed.";
    }
} else {
    $_SESSION['csrf_token'] = generate_csrf_token();
}
?>