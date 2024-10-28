document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("username").value; // Cambiado de "email" a "username"
        const password = document.getElementById("password").value;

        console.log("Correo Electrónico:", email);
        console.log("Contraseña:", password);
    });
});
