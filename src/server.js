const { response } = require('express')
const express = require('express')
const app = express()


const passangers = [
    {
        name: "Milena",
        flightNumber: 7859,
        time: "18h00",
    },
    {
        name: "Marcos",
        flightNumber: 7859,
        time: "18h00",
    },
    {
        name: "Thaís",
        flightNumber: 7859,
        time: "18h00",
    },
];


app.get('/', (request, response) => {
    return response.send(passangers)
})

app.listen(8080)