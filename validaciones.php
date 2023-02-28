<?php
// Validar campo "nombre"
if (isset($_POST['nombre'])) {
    $nombre = $_POST['nombre'];
    if (!preg_match("/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/", $nombre)) {
        echo "El campo 'nombre' solo debe contener letras y espacios en blanco";
        // Si la validación falla, puedes mostrar un mensaje de error o redireccionar a otra página.
    }
}

// Validar campo "numero"
if (isset($_POST['numero'])) {
    $numero = $_POST['numero'];
    if (!preg_match("/^[0-9]{1,9}$/", $numero)) {
        echo "El campo 'numero' debe contener solo números y no debe ser mayor a 9 dígitos";
        // Si la validación falla, puedes mostrar un mensaje de error o redireccionar a otra página.
    }
}

// Validar campo "email"
if (isset($_POST['email'])) {
    $email = $_POST['email'];
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "El campo 'email' debe ser una dirección de correo electrónico válida";
        // Si la validación falla, puedes mostrar un mensaje de error o redireccionar a otra página.
    }
}
?>
