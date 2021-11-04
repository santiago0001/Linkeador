<?php
	$server = "localhost";
	$user = "id15478333_rockrylbd";
	$password = "X|YJ>Ku8(7q566EG";//poner tu propia contraseña, si tienes una.
	$bd = "id15478333_rockryl";

	$conexion = mysqli_connect($server, $user, $password, $bd);
	if (!$conexion){ 
		die('Error de Conexión: ' . mysqli_connect_errno());	
	}	
?>