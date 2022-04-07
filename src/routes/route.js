const express = require('express');
// const logger = require('./logger')
const logger=require('../logger/logger.js');
const helper=require('../util/helper.js');
const f=require('../util/helper.js');
const h=require('../validator/formatter');
const u=require('../validator/formatter');
const formatter=require('../validator/formatter');
const hello=require('lodash');
// const formatter=require('../validator/formatter');
// const formatter=require('../validator/formatter');
const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('I am inside the first route handler');
    // console.log('The endpoint value is', logger.endpoint);
    // console.log('Calling log function');
    // logger.logging();
    logger.Welcome();// function caliling is here
    console.log(`Current Date `,helper.today);
    console.log(`Current month`,helper.month);
    console.log("String is trimed",u.b);
    console.log("String is change into a loweseCase",h.x);
    console.log("String is chande into UpperseCase",formatter.y);
    // console.log("Print year of the  all months ",hello.newmonth);
    // console.log("String is change ",formatter.y);
    f.funct();
    res.send('My first ever api!')
});

router.get('/test-me2', function (req, res) {
    console.log('I am inside the second route handler')
    res.send('My second ever api!')
});


router.get('/test-me5', function (req, res) {
    res.send('My final ever api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason