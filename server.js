'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { flights } = require('./test-data/flightSeating');
const { reservations } = require('./test-data/reservations');


//console.log(flights)


const PORT = process.env.PORT || 8015;

/*const handleSeating = (req, res) => {
    console.log(flights)
    let currentFlight = req.params;

    console.
        console.log("current Flight is " + currentFlight)
    res.json(currentFlight)
    //res.render("/seat-select", { title: "IT WORKED!", enteredSeat });

}; */

express()
    .use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    .use(morgan('dev'))
    .use(express.static('public'))
    .use(bodyParser.json())
    .use(express.urlencoded({ extended: false }))

    // endpoints
    .get('/api:id', (req, res) => {
        //console.log(req)
        //console.log("fruits")
        const results = res.json(flights)
        console.log("resultttttt", results)
        console.log(req.params)
    })
    .post('/user/:id', (req, res) => {
        res.json(reservations)
        console.log("vegetables")
        // console.log(req)
        console.log(req.params.givenName)
    })

    .get('/currentId:id', (req, res) => {
        console.log(req.params.id)
        let bingo = req.params.id
        let foundUser = reservations.find(reservation => reservation.id === bingo);
        console.log(foundUser.givenName)
        res.json(foundUser)
        res.send(foundUser)
    })


    .use((req, res) => res.send('Not Found'))
    .listen(PORT, () => console.log(`Listening on port ${PORT}`));