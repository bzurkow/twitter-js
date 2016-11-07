const express = require('express')
const app = express()
const chalk = require('chalk')
const volleyball = require('volleyball')
const nunjucks = require('nunjucks')



// app.use(function (req, res, next){
// 	console.log(req.method,req.path)
// 	next()	
// })

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});
nunjucks.configure('views')
app.set('view engine','html')
app.engine('html', nunjucks.render)
var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.use("/index",function(req,res,next){
	res.render( 'index', {title: 'Hall of Fame', people: people} );
})


// app.use(volleyball)

// app.use("/special/",function(req,res,next){
// 	console.log(chalk.magenta("You have reached the special area"))

// })


// app.get(function(req,res,next){
// 	next()
// })


app.listen(3000, function(){
	console.log('Example app listening on port 3000')
})