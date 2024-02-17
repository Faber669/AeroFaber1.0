function searchFlights() {
    var origin = document.getElementById('origin').value;
    var destination = document.getElementById('destination').value;

    // en este paso hace una búsqueda real
    var resultsContainer = document.getElementById('flight-results');
    resultsContainer.innerHTML = `<p>Buscando vuelos desde ${origin} hacia ${destination}...</p>`;
}
function selectFlight(flightId) {
    var selectedFlightContainer = document.getElementById('selected-flight');
    var selectedFlight = flightResults.find(flight => flight.id === flightId);

    if (selectedFlight) {
        selectedFlightContainer.innerHTML = `<p>Has seleccionado el vuelo de ${selectedFlight.airline} por $${selectedFlight.price}</p>`;
    }
}
function reserveFlight(flightId) {
    var selectedFlightContainer = document.getElementById('selected-flight');
    var selectedFlight = flightResults.find(flight => flight.id === flightId);

    if (selectedFlight) {
        // en este paso podemos implementar la lógica de reserva real
        
        alert(`¡Has reservado el vuelo de ${selectedFlight.airline} por $${selectedFlight.price}!`);
    }
}

// Función para cambiar el color de fondo al hacer clic en el botón
function changeBackgroundColor() {
    document.body.style.backgroundColor = 'black'; // Puedes ajustar el código de color según tus preferencias


    function newFunction() {
        return '#fafafa';
    }
}