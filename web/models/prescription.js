var mongoose = require('mongoose');

var prescriptionSchema = new mongoose.Schema({
	medication: String,
	directions: String,
	date_prescribed: { type: Date, default: Date.now },
	refills: Number
});

exports.model = mongoose.model('Prescription', prescriptionSchema);
exports.schema = prescriptionSchema;
