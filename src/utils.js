const fs = require('fs').promises;
const path = require('path');

const jsonDataDir = path.resolve(__dirname, './data');

const writeJsonData = async (data, jsonFilename) =>
  fs.writeFile(`${jsonDataDir}/${jsonFilename}`, JSON.stringify(data, null, 2));

const readJsonData = async jsonFilename =>
  fs.readFile(`${jsonDataDir}/${jsonFilename}`).then(res => JSON.parse(res.toString()));

const changeDate = async date => {
  const monthNames = [
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

  const year = date.substr(0, 4);
  let month = date.substr(5, 2);
  const day = date.substr(8, 2);
  month = monthNames[month - 1];
  date = day + " " + month + " " + year;

  return date;
}

module.exports = {
  writeJsonData,
  readJsonData,
  changeDate
};
