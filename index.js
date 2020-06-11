const express = require('express');
const app = new express();
const ejs = require('ejs');

app.use(express.static('public'));
app.set('view engine', 'ejs');


//Controllers
const homeController = require('./controllers/home');
const aboutController = require('./controllers/about');
const blogController = require('./controllers/blog');
const contactController = require('./controllers/contact');


app.get('/',homeController);
app.get('/about',aboutController);
app.get('/blog',blogController);
app.get('/contact',contactController);

app.listen(3000,()=>{
	console.log("Server is runing in port 3000");
})