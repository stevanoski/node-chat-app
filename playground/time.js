let moment = require('moment');

let createdAt = 13335354;
let date = moment(createdAt);
// date.add(100,'year').subtract(9,'months');
// console.log(date.format('MMM Do YYYY'));
console.log(date.format('h:mm a'));

let someTimestamp = moment().valueOf();
console.log(someTimestamp);