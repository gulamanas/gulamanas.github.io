<!-- Contact us -->
<div class="contact" id="contact">
    <h2>Contact Us</h2>
    <div class="form" id="form">
        <p>Get In Touch</p>

        <?php
        $msg = '';
        if (isset($_GET['error'])) {
            $msg = 'Please Fill in the blanks';
            echo ' <div class="alert">' . $msg . '</div> ';
        }
        if (isset($_GET['success'])) {
            $msg = 'Your Email has been sent';
            echo ' <div class="success">' . $msg . '</div> ';
        }

        ?>

        <form action="process.php" method="post" class="form_container">
            <input name="fname" type="text" placeholder="Full Name">
            <input name="email" type="email" placeholder="Your Email">
            <input name="phone" type="text " placeholder="Contact No.">
            <textarea name="message" id="" placeholder="Your Message Here"></textarea>
            <button name="submit" type="submit" class="submit_btn">Submit</button>
        </form>
    </div>
</div>
<!-- Contact us -->