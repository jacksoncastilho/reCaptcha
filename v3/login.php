<?php
$recaptcha_secret = '<secret-key>';
$recaptcha = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$recaptcha_secret.'&response='.$_POST['recaptchaResponse']);
echo $recaptcha;