<?php
// send_mail.php
// This script receives form data and sends it to melanin@aestheticclinicgroup.com

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING));
    $email = trim(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL));
    $phone = trim(filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING));
    $address = trim(filter_input(INPUT_POST, 'address', FILTER_SANITIZE_STRING));
    $message = trim(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS));

    // Basic validation
    $errors = [];

    if (!$name) {
        $errors[] = 'Please provide your name.';
    }
    if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Please provide a valid email address.';
    }
    if (!$phone) {
        $errors[] = 'Please provide your phone number.';
    }
    if (!$address) {
        $errors[] = 'Please provide your address.';
    }

    if (!empty($errors)) {
        $errorMessage = urlencode(implode(' ', $errors));
        header("Location: index.html?contact_status=error&message={$errorMessage}");
        exit;
    }

    $to = 'melanin@aestheticclinicgroup.com';
    $subject = 'New contact request from The Melanin Institute website';

    $body = "You have received a new message from the contact form on your website:\n\n";
    $body .= "Name: {$name}\n";
    $body .= "Email: {$email}\n";
    $body .= "Phone: {$phone}\n";
    $body .= "Address: {$address}\n";
    $body .= "Message:\n{$message}\n";

    $headers = [];
    $headers[] = 'From: noreply@melaniininstitute.com';
    $headers[] = "Reply-To: {$name} <{$email}>";
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';

    $success = mail($to, $subject, $body, implode("\r\n", $headers));

    $isJson = strpos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;

    if ($success) {
        if ($isJson) {
            header('Content-Type: application/json');
            echo json_encode(['status' => 'success', 'message' => 'Your message has been sent successfully.']);
            exit;
        }
        header('Location: index.html?contact_status=success');
        exit;
    } else {
        if ($isJson) {
            header('Content-Type: application/json');
            echo json_encode(['status' => 'error', 'message' => 'Unable to send email. Please try again later.']);
            exit;
        }
        header('Location: index.html?contact_status=error&message=Unable to send email. Please try again later.');
        exit;
    }
}

// Redirect non-POST requests back to homepage
header('Location: index.html');
exit;
