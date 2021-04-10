const express = require('express')
const ejs = require('ejs')
const path = require('path')
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

    ejs.renderFile(
        path.join(__dirname, "/print.ejs")
    )

    return response.send(passangers)
})

app.listen(8080)