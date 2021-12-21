const express = require('express');
const path = require('path');
const {
    connection
} = require('../database/db');

const StudentInfo = require('../controllers/studentController');
const mainController = require('../controllers/mainController');

const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

const router = express.Router();

router.get('/', mainController.dashboard);

router.get('/st_info', mainController.studentInfo);

router.get('/add_course', mainController.course);

router.get('/addStudent', mainController.form);

router.post('/getInfo', urlencodedParser, StudentInfo.getAllInfo);

router.post('/insertCourse', urlencodedParser, StudentInfo.addCourse);

//urlencodedParser when form is submitted at action method POST then that post request is handeled here and this middlware help to pass that form data here then we access it with  req body parmameter and see the data of form
router.post('/register', urlencodedParser, StudentInfo.addStudent);

module.exports = router;