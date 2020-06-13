const BlogPost = require('../models/BlogPost');
const CategoryPost = require('../models/CategoryPost');

module.exports = (req,res)=>{
	BlogPost.find({},(err,post)=>{
		res.render('blog',{blogpost: post});
	})
	
}