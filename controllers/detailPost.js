module.exports = (req,res)=>{
	console.log(req.params.id);
	res.render('detailPost',{id: req.params.id});
}