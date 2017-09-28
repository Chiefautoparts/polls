const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pollSchema = new Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	question: { type: String, required: true, minlength: 8},
	option1: { type: String, required: true, minlength: 3 },
	option2: { type: String, required: true, minlength: 3 },
	option3: { type: String, required: true, minlength: 3 },
	option4: { type: String, required: true, minlength: 3 }
}, { timestamps: true });

const Poll = mongoose.model('Poll', pollSchema);