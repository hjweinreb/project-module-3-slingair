goButton = document.getElementById('goButton')


viewReservation = () => {
    console.log("Hello")
    let currentId = booking.value
    //console.log(currentId)


    fetch('/currentId' + currentId)
        .then((res) => (res.json()))
        .then((data) => window.location.href = `/seat-select/confirmed.html?firstName=${data.givenName}&lastName=${data.surname}&email=${data.email}&seat=${data.seat}&flightNumber=${data.flight}`)
    //.then(data => renderSeats(data[flightNumber]))
    //.then(data => (window.location.href = data))
}

goButton.addEventListener('click', viewReservation);

