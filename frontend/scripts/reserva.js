document.addEventListener("DOMContentLoaded", function() {
    const reservationForm = document.getElementById("reservation-form");
    const checkAvailabilityBtn = document.getElementById("check-availability");
    const tablesDiv = document.getElementById("tables");
    const tablesList = tablesDiv.querySelector("ul");

    // Manejar el clic en el botón "Ver Mesas Disponibles"
    checkAvailabilityBtn.addEventListener("click", function() {
        const restaurantSelect = document.getElementById("restaurant");
        const selectedRestaurant = restaurantSelect.value;
        const dateInput = document.getElementById("date").value;
        const timeInput = document.getElementById("time").value;

        // Validar que se haya seleccionado una fecha y hora
        if (!dateInput || !timeInput) {
            alert("Por favor, selecciona una fecha y una hora.");
            return;
        }

        // Aquí puedes agregar la lógica para verificar la disponibilidad de mesas
        // Simulando una verificación de disponibilidad (puedes reemplazar esto con una llamada a un servidor)
        const availableTables = [
            { table: "Mesa 1", capacity: 2 },
            { table: "Mesa 2", capacity: 4 },
            { table: "Mesa 3", capacity: 6 }
        ];

        // Limpiar la lista de mesas anteriores
        tablesList.innerHTML = "";

        // Mostrar las mesas disponibles
        availableTables.forEach(table => {
            const listItem = document.createElement("li");
            listItem.textContent = `${table.table} - ${table.capacity} Personas`;
            tablesList.appendChild(listItem);
        });
    });

    // Si deseas manejar el envío del formulario en el futuro
    reservationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Previene el envío del formulario

        const selectedRestaurant = document.getElementById("restaurant").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        // Crear un objeto con los datos de la reserva
        const reservationData = {
            restaurant: selectedRestaurant,
            date: date,
            time: time
        };

        // Muestra los datos de la reserva en la consola (puedes cambiar esto para enviarlo al servidor)
        console.log("Datos de la Reserva:", reservationData);

    });
});
