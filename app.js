const express = require('express')
const app = express()
const authrouter = require('./auth')

app.get('/', function(request,response) {
    response.send("Hello world")
})

app.get('/jeremy',function(request,response) {
    response.send('salut c\'est moi jeremy. je suis ok')
})

app.use('/auth',authrouter)


app.listen(3000,function() {
    console.log('we are running on port 3000')
})