document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("register-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Previene el envío del formulario

        // Obtiene los valores de los campos de nombre, correo, contraseña y confirmación de contraseña
        const nombre = document.getElementById("username").value; // Cambiado de "name" a "username"
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Muestra los datos en la consola
        console.log("Nombre de usuario:", nombre); // Cambiado a "Nombre de usuario"
        console.log("Correo Electrónico:", email);
        console.log("Contraseña:", password);

        // Aquí puedes agregar lógica para enviar estos datos al servidor o validarlos
    });
});
