<?php
if(isset($_POST['submit'])) 
{
	$nombre = $_POST['nombre'];
	$correo = $_POST['email'];
	$mensaje = $_POST['mensaje'];

	$para = "maugara8@gmail.com"; 
	$asunto = "Enviando informacion";

	$contenido = "nombre: $nombre /n "
	$contenido .= "correo: $correo /n "
	$contenido .= "mensaje: $mensaje /n "

	/*$headers = "MIME-Version: 1.0\r\n"; 
	$headers .= "Content-type: text/html; charset=utf8\r\n";*/
	$cuerpo = " Enviado por: $nombre\n E-Mail: $correo\n Mensaje: $mensaje\n";

	$mail=mail($para,$asunto,$cuerpo,$contenido);
} 
else
{
	echo "Algo ocurrio mal...";
}
?>