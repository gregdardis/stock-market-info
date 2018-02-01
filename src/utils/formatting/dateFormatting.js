const numberFormatting = require('./numberFormatting');

// For some reason this file doesn't recognize import/export, but stringFormatting does.

const calculateDateDaysInPast = (date, days) => {
  const currentDate = date.getDate();
  const newDate = currentDate - days;
  date.setDate(newDate);
  return date;
};

const calculateDateMonthsInPast = (date, months) => {
  const currentMonth = date.getMonth();
  const newMonth = currentMonth - months;
  date.setMonth(newMonth);
  return date;
};

const calculateDateYearsInPast = (date, years) => {
  const currentYear = date.getFullYear();
  const newYear = currentYear - years;
  date.setFullYear(newYear);
  return date;
};

const calculateDateYearsInPastFromToday = years => {
  const todaysDate = new Date();
  return calculateDateYearsInPast(todaysDate, years);
};

const formatDate = date => {
  if (!(date instanceof Date)) {
    throw new TypeError(`${formatDate.name} requires a date`);
  }

  let day = date.getDate();
  day = numberFormatting.padSingleDigitWithZero(day);

  // month is zero indexed in Date
  let month = date.getMonth() + 1;
  month = numberFormatting.padSingleDigitWithZero(month);

  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

module.exports = Object.freeze({
  calculateDateDaysInPast,
  calculateDateMonthsInPast,
  calculateDateYearsInPast,
  calculateDateYearsInPastFromToday,
  formatDate
});