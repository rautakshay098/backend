require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send(`Welcome to MERN Backend tutorial`)
})

app.get('/login', (req, res) => {
    res.send('welcome to the login page')
})

app.get('/register', (req, res)=>{
res.send(`welcome to the register page`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})