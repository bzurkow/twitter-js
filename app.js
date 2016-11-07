const express = require('express')
const app = express()
const chalk = require('chalk')
const volleyball = require('volleyball')

app.use(volleyball)

// app.use(function (req, res, next){
// 	console.log(req.method,req.path)
// 	next()	
// })

app.use("/special/",function(req,res,next){
	console.log(chalk.magenta("You have reached the special area"))
})


// app.get(function(req,res,next){
// 	next()
// })


app.listen(3000, function(){
	console.log('Example app listening on port 3000')
})