const express = require('express')
const app = express()
const chalk = require('chalk')
const volleyball = require('volleyball')
const nunjucks = require('nunjucks')
const routes = require('./routes/')

nunjucks.configure('views', {noCache: true});

app.listen(3000, function(){
	console.log('Example app listening on port 3000')
})

app.set('view engine','html')

app.engine('html', nunjucks.render)

app.use(express.static('public'));
app.use('/', routes);
