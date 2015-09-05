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
  });
});

router.get('/api/patient/:id', function(req, res, next) {
  Patient.findById(req.params.id, function(err, p) {
  	res.send(p);
  });
});

router.post('/api/patient', function(req, res, next) {
	console.log(req.body);
  Patient.create(req.body, function(err, p) {
  	console.log(p);
  });
});

module.exports = router;
