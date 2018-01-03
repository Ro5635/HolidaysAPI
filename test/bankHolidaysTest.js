const assert = require('assert');
const holidayCalculator = require('../Utils/holidayCalculator');

describe('Bank Holiday Dates Test', function() {
    describe('Easter Monday Bank Holiday', function () {
        it('2017 Date Check', function () {
            const calculatedDate = holidayCalculator.getEasterMonday(2017);
            const expectedDate = new Date('04-17-2017');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2018 Date Check', function () {
            const calculatedDate = holidayCalculator.getEasterMonday(2018);
            const expectedDate = new Date('04-02-2018');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2019 Date Check', function () {
            const calculatedDate = holidayCalculator.getEasterMonday(2019);
            const expectedDate = new Date('04-22-2019');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2020 Date Check', function () {
            const calculatedDate = holidayCalculator.getEasterMonday(2020);
            const expectedDate = new Date('04-13-2020');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2030 Date Check', function () {
            const calculatedDate = holidayCalculator.getEasterMonday(2030);
            const expectedDate = new Date('04-22-2030');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2035 Date Check', function () {
            const calculatedDate = holidayCalculator.getEasterMonday(2035);
            const expectedDate = new Date('03-26-2035');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('1990 Date Check', function () {
            const calculatedDate = holidayCalculator.getEasterMonday(1990);
            const expectedDate = new Date('04-16-1990');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });
    });

    describe('Christmas Bank Holiday Test', function () {

        // The bank holiday day is substituted to a weekday when Christmas falls on a weekend
        // Test dates sourced from: https://www.gov.uk/bank-holidays

        it('2015 Date Check', function () {
            const calculatedDate = holidayCalculator.getChristmasBankHoliday(2015);
            const expectedDate = new Date('12-25-2015');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2016 Date Check', function () {
            const calculatedDate = holidayCalculator.getChristmasBankHoliday(2016);
            const expectedDate = new Date('12-27-2016');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2017 Date Check', function () {
            const calculatedDate = holidayCalculator.getChristmasBankHoliday(2017);
            const expectedDate = new Date('12-25-2017');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2018 Date Check', function () {
            const calculatedDate = holidayCalculator.getChristmasBankHoliday(2018);
            const expectedDate = new Date('12-25-2018');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2019 Date Check', function () {
            const calculatedDate = holidayCalculator.getChristmasBankHoliday(2019);
            const expectedDate = new Date('12-25-2019');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2020 Date Check', function () {
            const calculatedDate = holidayCalculator.getChristmasBankHoliday(2020);
            const expectedDate = new Date('12-25-2020');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2021 Date Check', function () {
            const calculatedDate = holidayCalculator.getChristmasBankHoliday(2021);
            const expectedDate = new Date('12-27-2021');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2022 Date Check', function () {
            const calculatedDate = holidayCalculator.getChristmasBankHoliday(2017);
            const expectedDate = new Date('12-25-2017');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

    });

    describe('Boxing day Bank Holiday Test', function () {

        // The bank holiday day is substituted to a weekday when boxing day falls on a weekend
        // Test dates sourced from: https://www.gov.uk/bank-holidays

        it('2012 Date Check', function () {
            const calculatedDate = holidayCalculator.getBoxingDayBankHoliday(2012);
            const expectedDate = new Date('12-26-2012');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2013 Date Check', function () {
            const calculatedDate = holidayCalculator.getBoxingDayBankHoliday(2013);
            const expectedDate = new Date('12-26-2013');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2014 Date Check', function () {
            const calculatedDate = holidayCalculator.getBoxingDayBankHoliday(2014);
            const expectedDate = new Date('12-26-2014');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2015 Date Check', function () {
            const calculatedDate = holidayCalculator.getBoxingDayBankHoliday(2015);
            const expectedDate = new Date('12-28-2015');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2016 Date Check', function () {
            const calculatedDate = holidayCalculator.getBoxingDayBankHoliday(2016);
            const expectedDate = new Date('12-26-2016');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2017 Date Check', function () {
            const calculatedDate = holidayCalculator.getBoxingDayBankHoliday(2017);
            const expectedDate = new Date('12-26-2017');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2018 Date Check', function () {
            const calculatedDate = holidayCalculator.getBoxingDayBankHoliday(2018);
            const expectedDate = new Date('12-26-2018');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2019 Date Check', function () {
            const calculatedDate = holidayCalculator.getBoxingDayBankHoliday(2019);
            const expectedDate = new Date('12-26-2019');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2020 Date Check', function () {
            const calculatedDate = holidayCalculator.getBoxingDayBankHoliday(2020);
            const expectedDate = new Date('12-28-2020');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2021 Date Check', function () {
            const calculatedDate = holidayCalculator.getBoxingDayBankHoliday(2021);
            const expectedDate = new Date('12-28-2021');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

    });

    describe('New Years Day Bank Holiday', function () {

        it('2012 Date Check', function () {
            const calculatedDate = holidayCalculator.getNewYearsBankHoliday(2012);
            const expectedDate = new Date('01-02-2012');

            assert.equal(expectedDate.toISOString(), calculatedDate.toISOString());
        });

        it('2013 Date Check', function () {
            const calculatedDate = holidayCalculator.getNewYearsBankHoliday(2013);
            const expectedDate = new Date('01-01-2013');

            assert.equal(expectedDate.toISOString(), calculatedDate.toISOString());
        });

        it('2014 Date Check', function () {
            const calculatedDate = holidayCalculator.getNewYearsBankHoliday(2014);
            const expectedDate = new Date('01-01-2014');

            assert.equal(expectedDate.toISOString(), calculatedDate.toISOString());
        });

        it('2015 Date Check', function () {
            const calculatedDate = holidayCalculator.getNewYearsBankHoliday(2015);
            const expectedDate = new Date('01-01-2015');

            assert.equal(expectedDate.toISOString(), calculatedDate.toISOString());
        });

        it('2016 Date Check', function () {
            const calculatedDate = holidayCalculator.getNewYearsBankHoliday(2016);
            const expectedDate = new Date('01-01-2016');

            assert.equal(expectedDate.toISOString(), calculatedDate.toISOString());
        });

        it('2017 Date Check', function () {
            const calculatedDate = holidayCalculator.getNewYearsBankHoliday(2017);
            const expectedDate = new Date('01-02-2017');

            assert.equal(expectedDate.toISOString(), calculatedDate.toISOString());
        });

        it('2018 Date Check', function () {
            const calculatedDate = holidayCalculator.getNewYearsBankHoliday(2018);
            const expectedDate = new Date('01-01-2018');

            assert.equal(expectedDate.toISOString(), calculatedDate.toISOString());
        });

        it('2019 Date Check', function () {
            const calculatedDate = holidayCalculator.getNewYearsBankHoliday(2019);
            const expectedDate = new Date('01-01-2019');

            assert.equal(expectedDate.toISOString(), calculatedDate.toISOString());
        });

    });

    describe('Summer Bank Holiday Test', function () {

        it('2012 Date Check', function () {
            const calculatedDate = holidayCalculator.getSummerBankHoliday(2012);
            const expectedDate = new Date('08-27-2012');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2013 Date Check', function () {
            const calculatedDate = holidayCalculator.getSummerBankHoliday(2013);
            const expectedDate = new Date('08-26-2013');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2014 Date Check', function () {
            const calculatedDate = holidayCalculator.getSummerBankHoliday(2014);
            const expectedDate = new Date('08-25-2014');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2015 Date Check', function () {
            const calculatedDate = holidayCalculator.getSummerBankHoliday(2015);
            const expectedDate = new Date('08-31-2015');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2016 Date Check', function () {
            const calculatedDate = holidayCalculator.getSummerBankHoliday(2016);
            const expectedDate = new Date('08-29-2016');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2017 Date Check', function () {
            const calculatedDate = holidayCalculator.getSummerBankHoliday(2017);
            const expectedDate = new Date('08-28-2017');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2018 Date Check', function () {
            const calculatedDate = holidayCalculator.getSummerBankHoliday(2018);
            const expectedDate = new Date('08-27-2018');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2019 Date Check', function () {
            const calculatedDate = holidayCalculator.getSummerBankHoliday(2019);
            const expectedDate = new Date('08-26-2019');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

    });

    describe('Spring Bank Holiday Test', function () {

        it('2012 Date Check', function () {
            const calculatedDate = holidayCalculator.getSpringBankHolForYear(2012);
            const expectedDate = new Date('06-04-2012');

            assert.equal(expectedDate.toISOString(), calculatedDate.toISOString());
        });

        it('2013 Date Check', function () {
            const calculatedDate = holidayCalculator.getSpringBankHolForYear(2013);
            const expectedDate = new Date('05-27-2013');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2014 Date Check', function () {
            const calculatedDate = holidayCalculator.getSpringBankHolForYear(2014);
            const expectedDate = new Date('05-26-2014');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2015 Date Check', function () {
            const calculatedDate = holidayCalculator.getSpringBankHolForYear(2015);
            const expectedDate = new Date('05-25-2015');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2016 Date Check', function () {
            const calculatedDate = holidayCalculator.getSpringBankHolForYear(2016);
            const expectedDate = new Date('05-30-2016');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2017 Date Check', function () {
            const calculatedDate = holidayCalculator.getSpringBankHolForYear(2017);
            const expectedDate = new Date('05-29-2017');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2018 Date Check', function () {
            const calculatedDate = holidayCalculator.getSpringBankHolForYear(2018);
            const expectedDate = new Date('05-28-2018');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2019 Date Check', function () {
            const calculatedDate = holidayCalculator.getSpringBankHolForYear(2019);
            const expectedDate = new Date('05-27-2019');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

    });

    describe('Early May Bank Holiday Test', function () {

        it('2012 Date Check', function () {
            const calculatedDate = holidayCalculator.getMayDayBankHolForYear(2012);
            const expectedDate = new Date('05-07-2012');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2013 Date Check', function () {
            const calculatedDate = holidayCalculator.getMayDayBankHolForYear(2013);
            const expectedDate = new Date('05-06-2013');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2014 Date Check', function () {
            const calculatedDate = holidayCalculator.getMayDayBankHolForYear(2014);
            const expectedDate = new Date('05-05-2014');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2015 Date Check', function () {
            const calculatedDate = holidayCalculator.getMayDayBankHolForYear(2015);
            const expectedDate = new Date('05-04-2015');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2016 Date Check', function () {
            const calculatedDate = holidayCalculator.getMayDayBankHolForYear(2016);
            const expectedDate = new Date('05-02-2016');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2017 Date Check', function () {
            const calculatedDate = holidayCalculator.getMayDayBankHolForYear(2017);
            const expectedDate = new Date('05-01-2017');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2018 Date Check', function () {
            const calculatedDate = holidayCalculator.getMayDayBankHolForYear(2018);
            const expectedDate = new Date('05-07-2018');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2019 Date Check', function () {
            const calculatedDate = holidayCalculator.getMayDayBankHolForYear(2019);
            const expectedDate = new Date('05-06-2019');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

    });

    describe('Good Friday Bank Holiday Test', function () {

        it('2012 Date Check', function () {
            const calculatedDate = holidayCalculator.getGoodFriday(2012);
            const expectedDate = new Date('04-06-2012');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2013 Date Check', function () {
            const calculatedDate = holidayCalculator.getGoodFriday(2013);
            const expectedDate = new Date('03-29-2013');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2014 Date Check', function () {
            const calculatedDate = holidayCalculator.getGoodFriday(2014);
            const expectedDate = new Date('04-18-2014');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2015 Date Check', function () {
            const calculatedDate = holidayCalculator.getGoodFriday(2015);
            const expectedDate = new Date('04-03-2015');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2016 Date Check', function () {
            const calculatedDate = holidayCalculator.getGoodFriday(2016);
            const expectedDate = new Date('03-25-2016');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2017 Date Check', function () {
            const calculatedDate = holidayCalculator.getGoodFriday(2017);
            const expectedDate = new Date('04-14-2017');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2018 Date Check', function () {
            const calculatedDate = holidayCalculator.getGoodFriday(2018);
            const expectedDate = new Date('03-30-2018');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

        it('2019 Date Check', function () {
            const calculatedDate = holidayCalculator.getGoodFriday(2019);
            const expectedDate = new Date('04-19-2019');

            assert.equal(calculatedDate.toISOString(), expectedDate.toISOString());
        });

    });

});

/**
 * Test getFirstAfterDate
 *
 * Test the get next occurrence of a day after a passed date function
 */
describe('Get first occurrence after date', function() {

    describe('Get next Monday', function() {

        it('From Tuesday', function() {

            const startTues = new Date('01-02-2018');
            // Get the monday after
            const monAfter = new Date('01-08-2018');

            const calculatedDate = holidayCalculator.getFirstAfterDate(startTues, 1);

            // The calculated date should be the monday
            assert.equal(calculatedDate.toISOString(), monAfter.toISOString());
        });

        it('From Wednesday', function() {

            const startDay = new Date('01-03-2018');
            // Get the monday after
            const monAfter = new Date('01-08-2018');

            const calculatedDate = holidayCalculator.getFirstAfterDate(startDay, 1);

            // The calculated date should be the monday
            assert.equal(calculatedDate.toISOString(), monAfter.toISOString());
        });

        it('From Thursday', function() {

            const startDay = new Date('01-04-2018');
            // Get the monday after
            const monAfter = new Date('01-08-2018');

            const calculatedDate = holidayCalculator.getFirstAfterDate(startDay, 1);

            // The calculated date should be the monday
            assert.equal(calculatedDate.toISOString(), monAfter.toISOString());
        });

        it('From Friday', function() {

            const startDay = new Date('01-05-2018');
            // Get the monday after
            const monAfter = new Date('01-08-2018');

            const calculatedDate = holidayCalculator.getFirstAfterDate(startDay, 1);

            // The calculated date should be the monday
            assert.equal(calculatedDate.toISOString(), monAfter.toISOString());
        });

        it('From Saturday', function() {

            const startDay = new Date('01-06-2018');
            // Get the monday after
            const monAfter = new Date('01-08-2018');

            const calculatedDate = holidayCalculator.getFirstAfterDate(startDay, 1);

            // The calculated date should be the monday
            assert.equal(calculatedDate.toISOString(), monAfter.toISOString());
        });

        it('From Sunday', function() {

            const startDay = new Date('01-07-2018');
            // Get the monday after
            const monAfter = new Date('01-08-2018');

            const calculatedDate = holidayCalculator.getFirstAfterDate(startDay, 1);

            // The calculated date should be the monday
            assert.equal(calculatedDate.toISOString(), monAfter.toISOString());
        });

        it('From Monday', function() {

            const startDay = new Date('01-08-2018');
            // Get the monday after
            const monAfter = new Date('01-15-2018');

            const calculatedDate = holidayCalculator.getFirstAfterDate(startDay, 1);

            // The calculated date should be the monday
            assert.equal(calculatedDate.toISOString(), monAfter.toISOString());
        });

    });

});



