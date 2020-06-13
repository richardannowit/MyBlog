const express = require('express');
const app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());


//Controllers
const homeController = require('./controllers/home');
const aboutController = require('./controllers/about');
const blogController = require('./controllers/blog');
const contactController = require('./controllers/contact');
const createPostController = require('./controllers/createPost');
const detailPostController = require('./controllers/detailPost');
const postStoreController = require('./controllers/postStore');
const addCategoryController = require('./controllers/add_category');
const addCategoryStoreController = require('./controllers/add_category_store');


mongoose.connect('mongodb://localhost/MyBlog',{useNewUrlParser:true});



app.get('/',homeController);
app.get('/about',aboutController);
app.get('/blog',blogController);
app.get('/contact',contactController);
app.get('/post/new',createPostController);
app.get('/posts/:id',detailPostController);
app.get('/category/new',addCategoryController);
app.post('/post/store/',postStoreController);
app.post('/category/store',addCategoryStoreController);

app.listen(3000,()=>{
	console.log("Server is runing in port 3000");
})