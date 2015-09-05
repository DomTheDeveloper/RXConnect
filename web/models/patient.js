var mongoose = require('mongoose');

// require('prescription.js');

var patientSchema = mongoose.Schema({
	name: String,
	birthDate: Date,
	gender: String,
	age: {type: Number, min: 0, max: 120},
	address: String,
	city: String,
	state: String,
	zip: Number,
	phone: Number,
	// prescriptions: [Prescriptions]
});

var Patient = mongoose.model('Patient', patientSchema);


