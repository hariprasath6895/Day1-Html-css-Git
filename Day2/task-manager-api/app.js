const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Home Route Works!')
})

app.get('/tasks', (req, res) => res.send('Tasks Works!'))

module.exports = app