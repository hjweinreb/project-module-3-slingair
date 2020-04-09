


let searchParams = (window.location.search)
// console.log(params)
searchParams = searchParams.split('?')
console.log(searchParams)
searchParams = searchParams[1].split(/[‘=’ ‘&’]/)
console.log(searchParams)
//console.log(searchParams)
let filterParams = searchParams.filter((x, index) => {
    if (index % 2 === 1) {
        return x
    }
})

console.log(filterParams)


const seatNumber = document.getElementById('seat');
const confirmedName = document.getElementById('name');
const confirmedEmail = document.getElementById('email');
const confirmedFlight = document.getElementById('flight');

seat.innerHTML = filterParams[3];
confirmedName.innerHTML = (filterParams[0] + ' ' + filterParams[1]);
confirmedEmail.innerHTML = filterParams[2]
confirmedFlight.innerHTML = filterParams[4]




