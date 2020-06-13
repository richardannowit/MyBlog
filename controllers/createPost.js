const CategoryPost = require('../models/CategoryPost');

module.exports = (req,res)=>{
	CategoryPost.find({},(err,cat)=>{
		res.render('createPost',{cat: cat});
	})
}