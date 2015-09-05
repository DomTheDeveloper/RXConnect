var mongoose = require('mongoose');

var Patient = require('../models/patient.js').model;
var patientSchema = require('../models/patient.js').schema;

var doctorSchema = mongoose.Schema({
	name: String,
	practice: String, // ex. hospital
	title: String, // doctor's field
	address: String,
	city: String,
	state: String,
	zip: Number,
	phone: String,
	patients: [{name: String, idref: String}]
});

exports.model = mongoose.model('Doctor', doctorSchema);
exports.schema = doctorSchema;





