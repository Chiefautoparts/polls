const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/surveyDB', {useMongoClient: true});

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('.js') >= 0) {
		require(path.join(models_path, file));
	}
});