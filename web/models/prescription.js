var mongoose = require('mongoose');

var PrescriptionSchema = new Schema({
	medication: String,
	directions: String,
	date_prescribed: Date,
	refills: Number
});

