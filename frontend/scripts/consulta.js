document.addEventListener("DOMContentLoaded", function() {
    // Diccionario de datos de reservas
    const reservations = [
        {
            restaurant: "Restaurante 1",
            date: "2024-11-15",
            time: "20:00",
            table: "Mesa - 4 personas"
        },
        {
            restaurant: "Restaurante 2",
            date: "2024-12-05",
            time: "19:30",
            table: "Mesa - 2 personas"
        }
        // Puedes agregar más reservas aquí
    ];

    // Referencia al contenedor donde se mostrarán las reservas
    const reservationsList = document.getElementById("reservations-list");

    // Función para mostrar las reservas
    function displayReservations() {
        reservations.forEach(reservation => {
            const card = document.createElement("div");
            card.className = "reservation-card";

            card.innerHTML = `
                <h3>${reservation.restaurant}</h3>
                <p><strong>Fecha:</strong> ${reservation.date}</p>
                <p><strong>Hora:</strong> ${reservation.time}</p>
                <p><strong>Mesa:</strong> ${reservation.table}</p>
                <button class="cancel-btn">Cancelar Reserva</button>
            `;

            // Agregar evento para cancelar reserva
            const cancelButton = card.querySelector(".cancel-btn");
            cancelButton.addEventListener("click", function() {
                // Lógica para cancelar la reserva
                card.remove(); // Eliminar la tarjeta de la interfaz
                alert(`Reserva en ${reservation.restaurant} cancelada.`);
            });

            // Agregar la tarjeta al contenedor de reservas
            reservationsList.appendChild(card);
        });
    }

    // Llamar a la función para mostrar las reservas
    displayReservations();
});
