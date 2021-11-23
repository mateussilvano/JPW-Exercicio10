const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const routes = require('./api/routes')
const fs = require ('fs')

app.use(express.json())
app.use('/api', routes)

app.listen(8080, function(){
    console.log(`Servidor rodando na porta ${port}`)
})