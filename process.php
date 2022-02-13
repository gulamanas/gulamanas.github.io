<?php

if (isset($_POST['submit'])) {

    $fname = $_POST['fname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    if (empty($fname) || empty($email) || empty($phone) || empty($message)) {
        header('location:index.php?error');
    } else {
        $to = 'g.anas786@gmail.com';
        $subject = 'Contact Request From' . $fname;
        $body = '<h2>Conatact Request</h2>
                <h4>Name</h4><p>' . $fname . '</p>
                <h4>Email</h4><p>' . $email . '</p>
                <h4>Phone</h4><p>' . $phone . '</p>
                <h4>Message</h4><p>' . $message . '</p>';

        if (mail($to, $subject, $body)) {
            header("location:index.php?success");
        }
    }
} else {
    header("location:index.php");
}
