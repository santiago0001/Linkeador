<?php
	$server = "localhost";
	$user = "Santi";
	$password = "santi";//poner tu propia contraseña, si tienes una.
	$bd = "usuariosrockryl";

	$conexion = mysqli_connect($server, $user, $password, $bd);
	if (!$conexion){ 
		die('Error de Conexión: ' . mysqli_connect_errno());	
	}	
?>