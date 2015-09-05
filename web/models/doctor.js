var mongoose = require('mongoose');

var Patient = require('../models/patient.js').model;
var patientSchema = require('../models/patient.js').schema;

var doctorSchema = mongoose.Schema({
	name: String,
	practice: String,
	address: String,
	city: String,
	state: String,
	zip: Number,
	phone: String,
	patients: [patientSchema]
});

exports.model = mongoose.model('Doctor', doctorSchema);
exports.schema = doctorSchema;





