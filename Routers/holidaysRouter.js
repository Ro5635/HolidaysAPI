/**
 * Router, holidays
 *
 *
 */
'use strict';

const express = require('express');
const router = express.Router();
const holidayCalculator = require('../Utils/holidayCalculator');


/**
 *
 */
router.get('/', function(req, res) {
    res.send('Hello World From the holidays Router!!');

});

/**
 * get Easter Monday Date
 */
router.get('/eastermon/:year', function(req, res) {

    const passedYear = req.params.year;

    //TODO Validation...

    const easterDate = holidayCalculator.getEasterMonday(passedYear);
    res.send({date : easterDate, passedYear: passedYear});

});

/**
 * get Easter Sunday Date
 */
router.get('/eastersun/:year', function(req, res) {

    const passedYear = req.params.year;

    //TODO Validation...

    const easterDate = holidayCalculator.getEasterSunday(passedYear);
    res.send({date : easterDate, passedYear: passedYear});

});

/**
 *  get Good Friday Date
 */
router.get('/goodfri/:year', function(req, res) {

    const passedYear = req.params.year;

    //TODO Validation...

    const goodFriDate = holidayCalculator.getGoodFriday(passedYear);
    res.send({date : goodFriDate, passedYear: passedYear});

});

/**
 *  Get Boxingday Date
 *
 *  NB. Bank holiday does not always fall on boxing day, the holiday shifts when
 *  boxing day falls on a weekend
 */
router.get('/boxingdaybankhol/:year', function(req, res) {

    const passedYear = req.params.year;

    //TODO Validation...

    const boxingDayDate = holidayCalculator.getBoxingDayBankHoliday(passedYear);
    res.send({date : boxingDayDate, passedYear: passedYear});

});

/**
 * get Christmas Bank Holiday
 *
 * NB. Bank holiday does not always fall on christmas day
 */
router.get('/christmasbankhol/:year', function(req, res) {

    const passedYear = req.params.year;

    //TODO Validation...

    const christmasBankHolidayDate = holidayCalculator.getChristmasBankHoliday(passedYear);
    res.send({date : christmasBankHolidayDate, passedYear: passedYear});

});

/**
 * get new years bank holiday
 *
 */
router.get('/newyearsbankhol/:year', function(req, res) {

    const passedYear = req.params.year;

    //TODO Validation...

    const newYearsBankHolDate = holidayCalculator.getNewYearsBankHoliday(passedYear);
    res.send({date : newYearsBankHolDate, passedYear: passedYear});

});

/**
 * get may day bank holiday date
 */
router.get('/maydaybankhol/:year', function(req, res) {

    const passedYear = req.params.year;

    //TODO Validation...

    const mayDayBankHolDate = holidayCalculator.getMayDayBankHolForYear(passedYear);
    res.send({date : mayDayBankHolDate, passedYear: passedYear});

});

/**
 * get Spring bank Holiday Date
 */
router.get('/springbankhol/:year', function(req, res) {

    const passedYear = req.params.year;

    //TODO Validation...

    const springBankHolDate = holidayCalculator.getSpringBankHolForYear(passedYear);
    res.send({date : springBankHolDate, passedYear: passedYear});

});

/**
 * get summer bank holiday date
 */
router.get('/summerbankhol/:year', function(req, res) {

    const passedYear = req.params.year;

    //TODO Validation...

    const getSummerBankHolidayDate = holidayCalculator.getSummerBankHoliday(passedYear);
    res.send({date : getSummerBankHolidayDate, passedYear: passedYear});

});



module.exports = router;