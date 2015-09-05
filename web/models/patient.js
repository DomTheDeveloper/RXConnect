var mongoose = require('mongoose');

var Prescription = require('../models/prescription.js');

var patientSchema = mongoose.Schema({
	name: String,
	birthDate: {type: Date, default: Date.now},
	gender: String,
	address: String,
	city: String,
	state: String,
	zip: Number,
	phone: String,
	prescriptions: [Prescription]
});

module.exports = mongoose.model('Patient', patientSchema);


