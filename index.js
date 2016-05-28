var express = require('express')
var service = require('./modules/service/shipping.js')
var app = express()

service.setup(app)
app.listen(3000)
