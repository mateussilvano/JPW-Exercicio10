const express = require('express')
const router = express.Router()
const dados = require('./dados.json')

const oficina =
{

    "_id": 1,
    "nome": "JSON",
    "professor": "Douglas Crockford",
    "local": 1,
    "participantes": [1, 2, 3]

}


router.get('/', function (req, res) {
    res.json(oficina)
})

router.get('/:id', function (req, res) {
    let id = req.params.id

    if (oficina[id] == undefined) {
        res.statusCode = 404
    }

    res.json(oficina[id])
})

router.post('/', function (req, res) {
    let us = req.body
    oficina.push(us)
    res.json(us)
})

router.put('/:id', function (req, res) {
    let id = req.params.id
    let us = req.body
    oficina[id] = (us)
    res.json(us)
})

router.delete('/:id', function (req, res) {
    let id = req.params.id
    let deletados = oficina.splice(id, 1)
    res.json(deletados)
})


module.exports = router