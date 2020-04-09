const flightInput = document.getElementById('flight');
const seatsDiv = document.getElementById('seats-section');
const confirmButton = document.getElementById('confirm-button');

let selection = '';

const renderSeats = (data) => {
    document.querySelector('.form-container').style.display = 'block';

    const alpha = ['A', 'B', 'C', 'D', 'E', 'F'];
    for (let r = 1; r < 11; r++) {
        const row = document.createElement('ol');
        row.classList.add('row');
        row.classList.add('fuselage');
        seatsDiv.appendChild(row);

        for (let s = 1; s < 7; s++) {
            const seatNumber = `${r}${alpha[s - 1]}`;
            const seat = document.createElement('li')
            const seatOccupied = `<li><label class="seat"><span id="${seatNumber}" class="occupied">${seatNumber}</span></label></li>`
            const seatAvailable = `<li><label class="seat"><input type="radio" name="seat" value="${seatNumber}" /><span id="${seatNumber}" class="avail">${seatNumber}</span></label></li>`
            let selectedSeat = {};
            //console.log(data)
            data.forEach((seat) => {
                if (seat.id === seatNumber) {
                    selectedSeat = seat;
                }
            })
            if (selectedSeat.isAvailable) {
                seat.innerHTML = seatAvailable;
            } else {
                seat.innerHTML = seatOccupied;
            }

            ///seat.innerHTML = seatAvailable;
            console.log(data)
            row.appendChild(seat);
        }
    }

    let seatMap = document.forms['seats'].elements['seat'];
    seatMap.forEach(seat => {
        seat.onclick = () => {
            selection = seat.value;
            seatMap.forEach(x => {
                if (x.value !== seat.value) {
                    document.getElementById(x.value).classList.remove('selected');
                }
            })
            document.getElementById(seat.value).classList.add('selected');
            document.getElementById('seat-number').innerText = `(${selection})`;
            confirmButton.disabled = false;
        }
    });
}


const toggleFormContent = (event) => {
    const flightNumber = flightInput.value;
    console.log('toggleFormContent: ', flightNumber);
    console.log(flightNumber[0] + flightNumber[1])

    if ((flightNumber[0] === "S") && (flightNumber[1] === "A")) {
        fetch('/api' + flightNumber)
            .then((res) => (res.json()))
            .then(data => renderSeats(data[flightNumber]))

    }
    else
        console.log("invalid flight Number")
    console.log(event.target.value)


    // TODO: contact the server to get the seating availability
    //      - only contact the server if the flight number is this format 'SA###'.
    //      - Do I need to create an error message if the number is not valid?

    // TODO: Pass the response data to renderSeats to create the appropriate seat-type.
}

const handleConfirmSeat = (event) => {
    event.preventDefault()
    // TODO: everything in here!
    var userData = {
        firstName: givenName.value,
        lastName: surname.value,
        email: email.value,
        seat: selection,
        chosenFlight: flightInput.value
    }

    fetch('/user' + userData, {
        method: 'POST'
    })
        .then((res) => console.log(res))

    window.location.href = `/seat-select/confirmed.html?firstName=${givenName.value}&lastName=${surname.value}&email=${email.value}&seat=${selection}&flightNumber=${flightInput.value}`





}


flightInput.addEventListener('blur', toggleFormContent);