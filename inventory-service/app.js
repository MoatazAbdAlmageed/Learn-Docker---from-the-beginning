const express = require('express')

const app = express()

const port = process.env.PORT

app.get('/', (req, res) => res.send("hello from inventory-service"))
app.get('/nodemon', (req, res) => res.send('hello from nodemon'))
app.get('/nodemon2', (req, res) => res.send('hello from nodemon2'))
app.get('/nodemon3', (req, res) => res.send('hello from nodemon3'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))