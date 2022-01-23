const express = require('express')
const app = express()
const ejs = require('ejs')
const UserController = require('./controllers/userController')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')


app.get('/user', UserController.GET)
app.post('/user', UserController.POST)

app.listen(9000, console.log(9000))

