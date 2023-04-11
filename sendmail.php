<?php 
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'PHPMailer/src/Exception.php';
	require 'PHPMailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail ->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//від кого лист
	$mail->setForm('');
	//кому відправити
	$mail->addAddres('');
	//тема листа
	$mail->Subject = 'фоpма зв`язку з сайту Forum';


	//Тіло листа
	$body = '<h1> Форма звязку Forum!</h1>';

	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
	}


	$mail->Body = $body;

	//відправка
	if(!$mail->send()) {
		$message = 'Error';
	} else {
		$message = 'Send'
	}

	$response = ['message' => $message];
	header('Content-type: application/json');
	echo json_encode($response);



?>
