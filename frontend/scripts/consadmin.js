document.addEventListener("DOMContentLoaded", function() {
    // Diccionario de datos de reservas
    const reservations = [
        {
            restaurant: "Restaurante 1",
            date: "2024-11-15",
            time: "20:00",
            table: "Mesa - 4 personas",
            user: "Juan Pérez"
        },
        {
            restaurant: "Restaurante 2",
            date: "2024-12-05",
            time: "19:30",
            table: "Mesa - 2 personas",
            user: "Ana Gómez"
        }
        // Puedes agregar más reservas aquí
    ];

    // Diccionario de datos de restaurantes
    const restaurants = [
        {
            name: "Restaurante 1",
            location: "Av. Principal 123",
            capacity: 50
        },
        {
            name: "Restaurante 2",
            location: "Calle Secundaria 456",
            capacity: 30
        }
        // Puedes agregar más restaurantes aquí
    ];

    // Referencias a los contenedores
    const reservationsList = document.getElementById("all-reservations-list");
    const restaurantsList = document.getElementById("all-restaurants-list");

    // Función para mostrar las reservas
    function displayReservations() {
        if (reservations.length === 0) {
            reservationsList.innerHTML = "<p>No hay reservas disponibles.</p>";
            return;
        }

        reservations.forEach(reservation => {
            const card = document.createElement("div");
            card.className = "reservation-card";

            card.innerHTML = `
                <h3>${reservation.restaurant}</h3>
                <p><strong>Fecha:</strong> ${reservation.date}</p>
                <p><strong>Hora:</strong> ${reservation.time}</p>
                <p><strong>Mesa:</strong> ${reservation.table}</p>
                <p><strong>Usuario:</strong> ${reservation.user}</p>
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

    // Función para mostrar los restaurantes
    function displayRestaurants() {
        if (restaurants.length === 0) {
            restaurantsList.innerHTML = "<p>No hay restaurantes disponibles.</p>";
            return;
        }

        restaurants.forEach(restaurant => {
            const card = document.createElement("div");
            card.className = "restaurant-card";

            card.innerHTML = `
                <h3>${restaurant.name}</h3>
                <p>Ubicación: ${restaurant.location}</p>
                <p>Capacidad: ${restaurant.capacity} personas</p>
            `;

            // Agregar la tarjeta al contenedor de restaurantes
            restaurantsList.appendChild(card);
        });
    }

    // Llamar a las funciones para mostrar las reservas y restaurantes
    displayReservations();
    displayRestaurants();
});
