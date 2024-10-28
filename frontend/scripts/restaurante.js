document.addEventListener("DOMContentLoaded", function() {
    const createRestaurantForm = document.getElementById("create-restaurant-form");
    const addTableBtn = document.getElementById("add-table-btn");
    const tableList = document.getElementById("table-list");

    // Manejar el clic en el botón "Agregar Mesas"
    addTableBtn.addEventListener("click", function() {
        const capacityInput = document.getElementById("capacity");
        const quantityInput = document.getElementById("quantity");

        const capacity = capacityInput.value;
        const quantity = quantityInput.value;

        // Validar los inputs
        if (capacity && quantity) {
            // Agregar las mesas a la lista
            for (let i = 0; i < quantity; i++) {
                const listItem = document.createElement("li");
                listItem.textContent = `Mesa ${tableList.children.length + 1}: ${capacity} asientos`;
                tableList.appendChild(listItem);
            }

            // Limpiar los campos de entrada
            capacityInput.value = "";
            quantityInput.value = "";
        } else {
            alert("Por favor, ingresa la capacidad y la cantidad de mesas.");
        }
    });

    // Manejar el envío del formulario
    createRestaurantForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Previene el envío del formulario

        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const hours = document.getElementById("hours").value;

        // Crear un objeto con los datos del restaurante
        const restaurantData = {
            name: name,
            address: address,
            hours: hours,
            tables: []
        };

        // Agregar las mesas al objeto
        const tables = tableList.children;
        for (let i = 0; i < tables.length; i++) {
            restaurantData.tables.push(tables[i].textContent);
        }

        // Muestra los datos en la consola (puedes cambiar esto para enviar al servidor)
        console.log("Datos del Restaurante:", restaurantData);


        // Limpiar el formulario después de enviar (opcional)
        createRestaurantForm.reset();
        tableList.innerHTML = ""; // Limpiar la lista de mesas
    });
});
