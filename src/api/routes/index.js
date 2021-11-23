const express = require('express')
const router = express.Router()
const oficina = require('./oficina')
const local = require('./local')
const usuarios = require('./usuarios')

router.use('/oficina', oficina)
router.use('/local', local)
router.use('/usuarios', usuarios)

module.exports = router