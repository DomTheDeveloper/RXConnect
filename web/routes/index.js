var express = require('express');
var router = express.Router();

var Patient = require('../models/patient.js').model;
var Doctor = require('../models/doctor.js').model;
var Prescription = require('../models/prescription.js').model;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MedSync' });
});

// get either json data or template for prescription
router.get('/api/presc/:id.:format?', function(req, res, next) {
	Prescription.findById(req.params.id, function(err, p) {
		if (req.params.format == 'json') {
			res.send(p);
		}
		else {
			res.render('prescription', { presc: p, title: 'Prescription' });
		}
	});
});

// create standalone prescription instance (unnecessary)
router.post('/api/presc', function(req, res, next) {
  Prescription.create(req.body, function(err, p) {
	res.send(p);
  });
});

// get either json data or template for patient
router.get('/api/patient/:id.:format?', function(req, res, next) {
	Patient.findById(req.params.id, function(err, p) {
		if (req.params.format == 'json') {
			res.send(p);
		}
		else {
			res.render('patient', { patient: p, title: 'Patient' });
		}
	});
});

// post patient api data
router.post('/api/patient', function(req, res, next) {
	json = req.body;
	json.name = json.name[0].given[0] + " " + json.name[0].family[0];
	json["city"] = json.address[0].city;
	json["state"] = json.address[0].state;
	json["zip"] = json.address[0].postalCode;
	json["address"] = json.address[0].line;
	json["phone"] = json.telecom[0].value;
  Patient.create(json, function(err, p) {
	res.send(p);
  });
});

// post one prescription to a patient
router.post('/api/patient/:id', function(req, res, next) {
	Patient.findById(req.params.id, function(err, p) {
		var presc = req.body.prescription;
		Prescription.create(presc, function(err, created_presc) {
			p.prescriptions.push(created_presc);
			p.save(function(err) {
				res.send(p);
			});
		});
	});
});

// get either json data or template for doctor/pharmacist
router.get('/api/doctor/:id.:format?', function(req, res, next) {
	Doctor.findById(req.params.id, function(err, p) {
		if (req.params.format == 'json') {
			res.send(p);
		}
		else {
			res.render('doctor', { doctor: p, title: 'Doctor' });
		}
	});
});

// post multiple (existing) patients to a doctor
router.post('/api/doctor/:id', function(req, res, next) {
	Doctor.findById(req.params.id, function(err, p) {
		var presc = req.body.patients;
		p.patients = presc;
		p.save(function(err) {
			res.send(p);
		});
	});
});

// create doctor instance (testing)
router.post('/api/doctor', function(req, res, next) {
  Doctor.create(req.body, function(err, p) {
		res.send(p);
  });
});

// listing views
router.get('/api/patient', function(req, res, next) {
	Patient.find(function (err, p) {
		res.send(p);
	});
});
router.get('/api/presc', function(req, res, next) {
	Prescription.find(function (err, p) {
		res.send(p);
	});
});
router.get('/api/doctor', function(req, res, next) {
	Doctor.find(function (err, p) {
		res.send(p);
	});
});

// WEBPAGES

router.get('/doctor/:docid', function(req, res, next) {
	Doctor.findById(req.params.docid, function(err, p) {
		res.render('doctor', { doctor: p, title: 'Doctor' });
	});
});

router.get('/doctor/:')


module.exports = router;
