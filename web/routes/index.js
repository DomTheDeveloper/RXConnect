var express = require('express');
var router = express.Router();

var Patient = require('../models/patient.js');
// var Doctor = require('../models/doctor.js');
// var Pharmacist = require('../models/pharmacist.js');
var Prescription = require('../models/prescription.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/presc/:id', function(req, res, next) {
  Prescription.findById(req.params.id, function(err, p) {
  	res.send(p);
  });
});

router.post('/api/presc', function(req, res, next) {
  Prescription.create(req.body, function(err, p) {
  	res.send(p);
  });
});

router.get('/api/patient/:id', function(req, res, next) {
  Patient.findById(req.params.id, function(err, p) {
  	res.send(p);
  });
});

router.post('/api/patient', function(req, res, next) {
	console.log(req.body);

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

router.post('/api/patient/:id', function(req, res, next) {
	Patient.findById(req.params.id, function(err, p) {
		var presc = req.body.prescriptions[0];
		console.log(p.prescriptions);
		p.prescriptions.push(presc);
		p.save(function(err) {
			console.log("test");
			res.send(p);
		});
	})
})

module.exports = router;
