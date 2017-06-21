const express = require('express')
const app = express()

var MessageObserver = require('./app/MessageObserver')

var userObserver = new MessageObserver()
userObserver.on('update', function(name, lame){
    console.log(name)
    console.log(lame)
})

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.post('/message', function (req, res) {
  userObserver.updateCount()
  res.send("MESSAGE SENT!")
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
