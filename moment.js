let moment=require('moment');
let x=moment().format("[Today is] dddd MMMM Do");
let y=moment().add(55,'day').format('dddd MMMM Do YYYY')
console.log(x ,'and after', 'days the day will be' ,y);
//date after 55 days


function daysRemaining(s) {
    var eventdate = moment(s);
    var todaysdate = moment();
    return eventdate.diff(todaysdate,"d");
}
//  daysRemaining for birthdy;

let s='2022-3-10';
// var str = document.getElementById("number").value;
console.log(daysRemaining(s));