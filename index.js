const sugarDate = require('sugar-date');

// Add the sugar-date extensions to the native prototype Date object
sugarDate.extend();

/**
 * Bank Holidays API
 *
 *
 */

exports.handler = function(event, context, callback) {

    // Needs to parse the imputed date and deduce weather it was a bank holiday

    // or should it just return all of the bank holidays in the range..........

    // Will need some logic to deduce the holidays, this can be done fairly easily because you would just need to
    // look at the thing and deduce weather it has the specified week day on the day that the thing happens, an
    // example of this is MayDay bank holiday, this is normally on the first monday of may, all of the things can then
    // be calculated for a given year.

    // as a result of this I suggest that it is best if the supplied parameter is the year that teh user want s all of the
    // public holidays for and then it just works out when all of the discrete (there are 8 potential bank holidays in the UK each year)
    // bank holidays are going to fall within that year, this will involve inspecting the date to see if it falls on a week day for some of them

    // The majority of the bank holidays are on a fixed date, the biggest issue will be calculating easter, however it is not a huge issue
    // just a wie bit fiddly, a solution to this issue is to do a thing.

    // This will likely take the rest of the day to complete.

    // It is only going to support the UK england region at its inception, this is because it is all that I have time to
    //do at this point, also the other countries may have more complex calculations within them...

    // the event will contain a date string, this will only need to be the year for which you want all of the bank holidays for,
    // this can later be extended to have sending int he month as well and then sending back a reduced subset based on the month that was
    // passed.

    // Demo event: {year: 2017, region: ukeng}



    console.log('event', event);

    console.log('Attempting to get the date of easter: ');
    const easterDate = getMayDayBankHolForYear(2018);
    console.log(`Easter is on: ${easterDate} in 1996`);

    console.log('Test getting first after date:');
    console.log('Sunday: ' + getFirstAfterDate(new Date('04/01/2017'), 0));
    console.log('Monday: ' + getFirstAfterDate(new Date('04/01/2017'), 1));
    console.log('Tuesday: ' + getFirstAfterDate(new Date('04/01/2017'), 2));
    console.log('Wednesday: ' + getFirstAfterDate(new Date('04/01/2017'), 3));
    console.log('Thursday: ' + getFirstAfterDate(new Date('04/01/2017'), 4));
    console.log('Friday: ' + getFirstAfterDate(new Date('04/01/2017'), 5));
    console.log('Saturday: ' + getFirstAfterDate(new Date('04/01/2017'), 6));


    console.log('Test getting first before date:');
    console.log('Sunday: ' + getFirstBeforeDate(new Date('04/01/2017'), 0));
    console.log('Monday: ' + getFirstBeforeDate(new Date('04/01/2017'), 1));
    console.log('Tuesday: ' + getFirstBeforeDate(new Date('04/01/2017'), 2));
    console.log('Wednesday: ' + getFirstBeforeDate(new Date('04/01/2017'), 3));
    console.log('Thursday: ' + getFirstBeforeDate(new Date('04/01/2017'), 4));
    console.log('Friday: ' + getFirstBeforeDate(new Date('04/01/2017'), 5));
    console.log('Saturday: ' + getFirstBeforeDate(new Date('04/01/2017'), 6));


    // Need to introduce some kind of testing framework....
    // A unit testing thing would probably be the best bet...

    callback(null, event);

};

/**
 * getEaster
 *
 * Gets the date of easter sunday bank holiday for the UK
 * for any given year
 *
 * @param year  integer year passed, eg: 2017, 1996, 2014
 * @returns {Date} JS Date Object of the easter for passed year
 */
function getEasterSunday(year){

    // Calculation will not work after 2199
    if(year > 2199){
        //TODO Improve this, throw and error
        console.log('Incorrectly calculated result for Easter');
    }
    // The golden number look up for easter calculations
    const easterGoldenNumber = {

        0: {day: 27, month: 3},
        1: {day: 14, month: 4},
        2: {day: 3, month: 4},
        3: {day: 23, month: 3},
        4: {day: 11, month: 4},
        5: {day: 31, month: 3},
        6: {day: 18, month: 4},
        7: {day: 8, month: 4},
        8: {day: 28, month: 3},
        9: {day: 16, month: 4},
        10: {day: 5, month: 4},
        11: {day: 25, month: 3},
        12: {day: 13, month: 4},
        13: {day: 2, month: 4},
        14: {day: 22, month: 3},
        15: {day: 10, month: 4},
        16: {day: 30, month: 3},
        17: {day: 17, month: 4},
        18: {day: 7, month:4},
        19: {day: 27, month: 3}

    };

    // Evaluate the easter calculation with the passed year
    const mathematicalCalcResult = (year - (Math.floor((year / 19)) * 19)) + 1;

    // Look up the date in the golden Number lookup object
    const goldenDateJSON = easterGoldenNumber[mathematicalCalcResult];

    let goldenDate;

    try{
        goldenDate = new Date(`${goldenDateJSON.month}/${goldenDateJSON.day}/${year}`);

    }catch (err){
        console.error('Failed to convert date');
        console.error(goldenDateJSON);
        console.error('Was not able to be converted into a valid date');

    }

    // Now need the first Sunday after the golden date
    const easterSunday = getFirstAfterDate(goldenDate, 0);

    return easterSunday;

    // Don't ask me to explain why this works, its stars and religion or something.
}

// Expose on exports
exports.getEasterSunday = getEasterSunday;


/**
 * getGoodFriday
 *
 * Gets the date of good friday for the passed year
 *
 * @param year
 * @returns {Date}
 */
exports.getGoodFriday = function(year){

    // Get the date of easter and then get the Friday before, this will be the date of good Friday
    const easterSunday = getEasterSunday(year);

    // Now get the preceding Monday
    return easterSunday.addDays(-2);

};

/**
 * getEaster
 *
 * Gets the date of easter monday bank holiday for the UK
 * for any given year
 *
 * @param year  integer year passed, eg: 2017, 1996, 2014
 * @returns {Date} JS Date Object of the easter for passed year
 */
exports.getEasterMonday = function(year){

    // Get the date of easter and then get the Monday after
    const easterSunday = getEasterSunday(year);

    // Now get the following Monday
    return easterSunday.addDays(1);

};

/**
 * getMayDayBankHolForYear
 *
 * Gets the May Day bank holiday for a passed year, this is always the first Monday in may.
 *
 * @param year  Year to acquire the May Day Bank Holiday Date for, passed as a number eg: 2017, 1996, 2014
 * @returns {Date}  JS Date object of the May Day bank holiday for a passed year
 */
exports.getMayDayBankHolForYear = function(year){

    // Get a Date object for the first of May
    const firstOfMay = new Date(`05/01/${year}`);

    // Is the first a Monday?
    if(firstOfMay.getDay() === 1){
        return firstOfMay;

    }else{
        // Get the next occurrence of a Monday
        return getFirstAfterDate(firstOfMay, 1);

    }

};


/**
 * getSpringBankHolForYear
 *
 * Get the Spring bank holiday for the passed year, this is returned as a JS Date object.
 * The spring bank holiday falls on the last Monday in May.
 *
 * @param year  Integer year passed, eg: 2017, 1996, 2014
 * @returns {Date} JS Date Object of the Spring bank Holiday for passed year
 */
exports.getSpringBankHolForYear = function(year){

    // Get a Date object for the last day in May
    const lastOfMay = new Date(`05/31/${year}`);

    // Now return the first Monday before the last day in May
    return getFirstBeforeDate(lastOfMay, 1);

};

/**
 * getSummerBankHoliday
 *
 * Gets the summer back holiday date for the passed year, this is the last Monday in May
 *
 * @param year  Integer year passed, eg: 2017, 1996, 2014
 * @returns {Date} JS Date Object of the Summer bank Holiday for passed year
 */
exports.getSummerBankHoliday = function(year){

    // get the last day in August
    const lastOfAugust = new Date (`08/31/${year}`);

    // get the closest Monday to the last day in August, check that the last day is not a Monday first
    if(lastOfAugust.getDay() === 1){
        return lastOfAugust;
    }else{
        return getFirstBeforeDate(lastOfAugust, 1);

    }

};


/**
 * getChristmasBankHoliday
 *
 * Get the Date of the christmas bank holiday, if christmas falls on a weekend then the following
 * Monday is a bank holiday
 *
 * @param year  Integer year passed, eg: 2017, 1996, 2014
 * @returns {Date}  JS Date object representing the christmas bank holiday
 */
exports.getChristmasBankHoliday = function(year){

    // If the 25th December falls on a weekend then the following Monday needs to be returned as the
    // bank holiday

    const christmasDay = new Date(`12/25/${year}`);

    // is it a weekend?
    if(christmasDay === 6){
        // Return the first Monday after
        return getFirstAfterDate(christmasDay, 1);

    }else if(christmasDay === 0){
        // Return the first Tuesday after
        return getFirstAfterDate(christmasDay, 2);

    }else{
        return christmasDay;

    }

};


/**
 * getBoxingDayBankHoliday
 *
 * Gets the Date of the boxing day bank holiday, if this falls on a weekend then it is substituted
 * into the next week
 *
 * @param year  Integer year passed, eg: 2017, 1996, 2014
 * @returns {Date}  JS Date object representing the boxing day bank holiday
 */
exports.getBoxingDayBankHoliday = function(year){

    // If the 26th of December has fallen on a weekend then there is a substitute bank holiday placed
    // into the following week

    const boxingDay = new Date(`12/26/${year}`);

    if(boxingDay.getDay() === 6){
        // Bank holiday is substituted onto the Monday
        return getFirstAfterDate(boxingDay, 1);

    }else if(boxingDay.getDay() === 0){
        // Bank holiday is substituted onto the Tuesday
        return getFirstAfterDate(boxingDay, 2);

    }else{
        return boxingDay;

    }

};


/**
 * getNewYearsBankHoliday
 *
 * Gets the date of the new years bank holiday, if this falls on a weekend then the following
 * Monday is substituted.
 *
 * @param year  Integer year passed, eg: 2017, 1996, 2014
 * @returns {Date}  JS Date object representing the new years bank holiday
 */
exports.getNewYearsBankHoliday = function(year){

    // If the 1st of January falls on a weekend then the following Monday is substituted

    const newYearsBankHoliday = new Date(`01/01/${year}`);

    if(newYearsBankHoliday.getDay() === 6 || newYearsBankHoliday.getDay() === 0){
        // Substitute in the following Monday
        return getFirstAfterDate(newYearsBankHoliday, 1);

    }else{
        return newYearsBankHoliday;

    }

};

/**
 * getFirstAfterDate
 *
 * Gets the first instance of a specified day (mon, tue etc) after a specified date
 *
 * @param afterDate     JS Date object, date to get the first instance of the passed weekday after
 * @param specifiedDay 0 - 6, integer to represent the weekday that is to be found after the afterDate
 * @returns {Date}
 */
function getFirstAfterDate(afterDate, specifiedDay){

    // Get the current day of the week
    const currentWeekDay = afterDate.getDay();

    let daysForward;

    // Get the number of days to the next occurrence of the target week day
    // EG:
    // sun -> sun => 7
    // wed -> mon => 5
    // wed -> sat => 3
    if(specifiedDay < currentWeekDay){
        daysForward = (7 - currentWeekDay) + specifiedDay;

    }else if(currentWeekDay < specifiedDay){
        daysForward = specifiedDay - currentWeekDay;

    }else{
        daysForward = 7;

    }

    // Add the days forward to the passed date
    return afterDate.addDays(daysForward);

}


/**
 * getFirstBeforeDate
 *
 * Gets the first instance of a specified day (mon, tue etc) before a specified date
 *
 * @param beforeDate     JS Date object, date to get the first instance of the passed weekday before
 * @param specifiedDay 0 - 6, integer to represent the weekday that is to be found before the beforeDate
 * @returns {Date}
 */
function getFirstBeforeDate(beforeDate, specifiedDay){

    // Get the current day of the week
    const currentWeekDay = beforeDate.getDay();

    let daysBackward;

    // Get the number of days to the preceding occurrence of the target week day
    // EG:
    // sun -> sun => 7
    // wed -> mon => 3
    // wed -> sat => 4
    if(specifiedDay < currentWeekDay){
        daysBackward = currentWeekDay - specifiedDay;

    }else if(specifiedDay > currentWeekDay){
        daysBackward = (7 - specifiedDay) + currentWeekDay;

    }else{
        daysBackward = 7;

    }

    // Add the days forward to the passed date
    return beforeDate.addDays(-daysBackward);

}