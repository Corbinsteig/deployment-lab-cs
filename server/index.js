const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../landingpage.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../landingpage.css'))
})

const port = process.env.PORT || 5501

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

console.log(__dirname)