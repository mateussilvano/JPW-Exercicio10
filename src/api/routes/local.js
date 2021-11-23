const express = require('express')
const router = express.Router()
const dados = require('./dados.json')

const local =
{

    "id": dados.id,
    "nome": dados.nome,
    "capacidade": dados.capacidade

}


router.get('/', function (req, res) {
    res.json(local)
})

router.get('/:id', function (req, res) {
    let id = req.params.id

    if (local[id] == undefined) {
        res.statusCode = 404
    }

    res.json(local[id])
})

router.post('/', function (req, res) {
    let us = req.body
    local.push(us)
    res.json(us)
})

router.put('/:id', function (req, res) {
    let id = req.params.id
    let us = req.body
    local[id] = (us)
    res.json(us)
})

router.delete('/:id', function (req, res) {
    let id = req.params.id
    let deletados = local.splice(id, 1)
    res.json(deletados)
})


module.exports = router