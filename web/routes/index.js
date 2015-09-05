var express = require('express');
var router = express.Router();

var Patient = require('../models/patient.js');
var Doctor = require('../models/doctor.js');
var Pharmacist = require('../models/pharmacist.js');
var Prescription = require('../models/prescription.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
