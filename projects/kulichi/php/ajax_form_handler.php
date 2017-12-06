<?php  
	$to      = 'landing@leipurin.ru';
	$subject = 'Заказ';
	$message = "Телефон: " . $_POST['tel'] . "<br>\r\n" .
				"Электронная почта: " . $_POST['email'] . "<br>\r\n" .
				"Город: " . $_POST['city'] . "<br>\r\n" .
				"ФИО: " . $_POST['name'] . "<br>\r\n" .
				"Сообщение: " . $_POST['msg'];

	$headers = "MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n".
				'From: noreply@leipurin.ru' . "\r\n" .
    			'Reply-To: noreply@leipurin.ru' . "\r\n" .
    			'X-Mailer: PHP/' . phpversion();


	if (mail($to, $subject, $message, $headers)) {
		echo 'OK';
	} else {
		echo 'ERROR';
	}
?>