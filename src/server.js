const { response } = require('express')
const express = require('express')
const app = express()

app.get('/', (request, response) => {
    return response.send('ok')
})

app.listen(8080)