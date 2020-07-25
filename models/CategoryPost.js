const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaCategoryPost = new Schema({
	name: {
		type: 'String',
		required: true,
		unique: true
	}
});

const CategoryPost = mongoose.model('CategoryPost',SchemaCategoryPost);
module.exports = CategoryPost;