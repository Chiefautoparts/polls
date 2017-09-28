const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    Polls: [{type: Schema.Types.ObjectId, ref: 'Polls'}]},
    { timestamps: true });


const User = mongoose.model('User', userSchema );      

