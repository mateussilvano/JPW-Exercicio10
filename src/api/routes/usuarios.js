const express = require('express')
const router = express.Router()
const dados = require('./dados.json')

const usuarios =
{

    "id": dados.id,
    "nome": dados.nome

}


router.get('/', function (req, res) {
    res.json(usuarios)
})

router.get('/:id', function (req, res) {
    let id = req.params.id

    if (usuarios[id] == undefined) {
        res.statusCode = 404
    }

    res.json(usuarios[id])
})

router.post('/', function (req, res) {
    let us = req.body
    usuarios.push(us)
    res.json(us)
})

router.put('/:id', function (req, res) {
    let id = req.params.id
    let us = req.body
    usuarios[id] = (us)
    res.json(us)
})

router.delete('/:id', function (req, res) {
    let id = req.params.id
    let deletados = usuarios.splice(id, 1)
    res.json(deletados)
})


module.exports = router