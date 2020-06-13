const CategoryPost = require('../models/CategoryPost');


module.exports = (req,res)=>{
	console.log(req.body);
	const cat = new CategoryPost(req.body);
	
	cat.save((err)=>{
		if(err){
			//console.log(err);
			res.redirect('/category/new');
		}
		res.redirect('/blog');
	})

}