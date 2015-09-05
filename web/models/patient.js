var mongoose = require('mongoose');

// require('prescription.js');

var patientSchema = mongoose.Schema({
	name: String,
	birthDate: {type: Date, default: Date.now};
	gender: String,
	age: {type: Number, min: 0, max: 120},
	address: String,
	city: String,
	state: String,
	zip: Number,
	phone: Number,
	// prescriptions: [Prescriptions]
});

module.exports = mongoose.model('Patient', patientSchema);


