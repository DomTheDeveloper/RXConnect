var mongoose = require('mongoose');

var prescriptionSchema = new mongoose.Schema({
	medication: String,
	directions: String,
	date_prescribed: Date,
	refills: Number
});

module.exports = mongoose.model('Prescription', prescriptionSchema);
