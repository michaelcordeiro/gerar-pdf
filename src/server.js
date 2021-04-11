const express = require('express')
const ejs = require('ejs')
const path = require('path')
const pdf =  require('html-pdf')
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

    const filePath = path.join(__dirname, "/print.ejs")
    ejs.renderFile(filePath, { passangers }, (err, html) => {
        if(err){
            return response.send('Erro na leitura do arquivo')
        }


        const options = {
            height: "11.25in",
            width: "8.51",
            header: {
                height: "20mm"
            },
            footer: {
                height: "20mm"
            }
        }

        // criar o pdf
        pdf.create(data)


        // Enviar para o navegador
        return response.send(html) 
    })

})

app.listen(8080)