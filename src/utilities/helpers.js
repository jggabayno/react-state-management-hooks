import React from "react";

const resource = (arg) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date(arg);
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const dayName = days[d.getDay()];
  const monthName = months[d.getMonth()];

  return { day, month, year, dayName, monthName };
};

const setFormat = ({ monthName, day, year }) => ({
  format: (type) => {
    switch (type) {
      case "m":
        return `${monthName}`;
      case "md":
        return `${monthName} ${day}`;
      case "mdy":
        return `${monthName} ${day}, ${year}`;
      case "my":
        return `${monthName} ${year}`;
      case "y":
        return year;
      default:
        throw Error("date format must be defined");
    }
  },
});

const setCompute = ({ day, year, month }) => {
  return {
    add: (value, type) => {
      switch (type) {
        case "days":
          return date(new Date(year, month, day + value)).format("mdy");
        case "month":
          return date(new Date(year, month + value, day)).format("mdy");
        case "year":
          return date(new Date(year + value, month, day)).format("mdy");
        default:
          throw Error("date value and type must be defined");
      }
    },
    subtract: (value, type) => {
      switch (type) {
        case "days":
          return date(new Date(year, month, day - value));
        case "month":
          return date(new Date(year, month - value, day));
        case "year":
          return date(new Date(year - value, month, day)).format("mdy");
        default:
          throw Error("date value and type must be defined");
      }
    },
    multiply: (value, type) => {
      switch (type) {
        case "days":
          return date(new Date(year, month, day * value)).format("mdy");
        case "month":
          return date(new Date(year, month * value, day)).format("mdy");
        case "year":
          return date(new Date(year * value, month, day)).format("mdy");
        default:
          throw Error("date value and type must be defined");
      }
    },
    divide: (value, type) => {
      switch (type) {
        case "days":
          return date(new Date(year, month, day / value)).format("mdy");
        case "month":
          return date(new Date(year, month / value, day)).format("mdy");
        case "year":
          return date(new Date(year / value, month, day)).format("mdy");
        default:
          throw Error("date value and type must be defined");
      }
    },
  };
};

const setComma = ({ value }) => ({
  comma: () => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
});

const setCommaDecimal = ({ value }) => ({
  commaDecimal: () =>
    value
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
});

const setPesoCommaDecimal = ({ value }) => ({
  pesoCommaDecimal: () => (
    <>
      &#8369;&nbsp;
      {value
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </>
  ),
});

function date(arg) {
  const state = { ...resource(arg) };
  return {
    ...state,
    ...setFormat(state),
    ...setCompute(state),
  };
}

function number(arg) {
  const state = { arg };

  return {
    ...state,
    ...setComma(state),
    ...setCommaDecimal(state),
    ...setPesoCommaDecimal(state),
  };
}

// get the birthdate from birthday up todays
function age(dob) {
  const ageDiff = Date.now() - new Date(dob).getTime();
  const ageDate = new Date(ageDiff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// remove duplicate array value
function unique(array) {
  return array.reduce(
    (acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]),
    []
  );
}

function uniqueObjectValue(array, ref) {
  // store the comparison  values in array
  const unique = array
    .map((row) => row[ref])

    // store the indexes of the unique objects
    .map((row, key, final) => final.indexOf(row) === key && key)

    // eliminate the false indexes & return unique objects
    .filter((row) => array[row])
    .map((row) => array[row]);

  return unique;
}

// generate random colors
function randomColor() {
  function c() {
    return ("0" + String(Math.floor(Math.random() * 256).toString(16))).substr(
      -2
    );
  }
  return "#" + c() + c() + c();
}

export { number, date, age, unique, uniqueObjectValue, randomColor };
