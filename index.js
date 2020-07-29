const express = require('express'),
	favicon = require('express-favicon')

const path = require('path')

const port = 8080
const app = express()
app.use(favicon(path.join(__dirname, '/public/favicon.ico')))

app.use(express.static(__dirname))

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(port);
