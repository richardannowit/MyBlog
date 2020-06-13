const BlogPost = require('../models/BlogPost');
const CategoryPost = require('../models/CategoryPost');

module.exports = (req,res)=>{
	req.body.author = "Richard Annowit";
	let blog = new BlogPost(req.body);
	blog.save((err)=>{
		if(err){
			console.log(err);
			res.redirect('/post/new');
		}
		res.redirect('/blog');
	})

}