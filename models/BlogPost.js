const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SchemaBlogPost = new Schema({
	title: {
		type: String,
		required: true,
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category'
	},
	content: {
		type: String,
		required: true
	},
	background: {
		type: String,
		default: '/images/image_3.jpg'
	},
	author: {
		type: String
		// type: Schema.Types.ObjectId,
		// ref: 'User'
	},
	date: {
		type: Date,
		default: new Date()
	}
});

const BlogPost = mongoose.model('BlogPost',SchemaBlogPost);
module.exports = BlogPost;
