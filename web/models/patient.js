var mongoose = require('mongoose');

var Prescription = require('../models/prescription.js').model;
var prescriptionSchema = require('../models/prescription.js').schema;

var patientSchema = mongoose.Schema({
	name: String,
	birthDate: {type: Date, default: Date.now},
	gender: String,
	address: String,
	city: String,
	state: String,
	zip: Number,
	phone: String,
	prescriptions: [prescriptionSchema]
});

module.exports = mongoose.model('Patient', patientSchema);


