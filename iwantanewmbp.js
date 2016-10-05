$(document).ready(function(){


    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    //Get current datetime with empty date object
    var now = new Date();

    var lastMbpUpdate = new Date(2015, 5, 19);
    var lastYear = lastMbpUpdate.getFullYear();
    var lastDay = days[lastMbpUpdate.getDay()];
    var lastMonth = months[lastMbpUpdate.getMonth()];
    var lastDate  = lastMbpUpdate.getDate();

    var macbooks = new vis.DataSet([
        {id:1, group: 1, content:'15inch Retina MacBook Pro', start: new Date(2015, 4, 19)},
        {id:2, group: 1, content:'13inch Retina MacBook Pro', start:new Date(2015, 2, 29)},
        {id:3, group: 1, content:'MacBook', start:new Date(2016, 4, 19)},
        {id:4, group: 1, content:'MacBook Air', start:new Date(2015, 2, 9)},
        {id:5, group: 1, content:'iMac 27inch', start: new Date(2015, 4, 19)},
        {id:6, group: 1, content:'iMac 21inch', start: new Date(2015, 9, 13)},
        {id:7, group: 1, content:'Mac Pro', start: new Date(2013, 11, 18)},
        {id:8, group: 2, content:"Event Name", start: new Date(2015, 11, 1)}
    ]);

    var groups = new vis.DataSet([
        {id:1, content:"Mac"},
        {id:2, content:"Events"}
    ]);

    var events = new vis.DataSet([
        {id:1, content:"Event Name", start: new Date(2015, 11, 1)}
    ]);

    var options = {};

    var container = document.getElementById("vis");

    var timeline = new vis.Timeline(container, macbooks, options, groups);

    var fullText = "The 15inch retina macbook pro was laste updated on"
        + lastDay + " " + lastMonth + " " + lastDate + " " + lastYear + "." ;


    var diffInDays = Math.floor((now - lastMbpUpdate)/(1000 * 60 * 60 * 24));
    var diffInDaysText = "That is " + diffInDays + " days.";

    $('#lastMbpUpdate').text(fullText);
    $('#diffInDays').text(diffInDaysText);
});