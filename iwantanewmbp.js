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

    var fullText = "The last time the macbook pro was updated was " 
        + lastDay + " " + lastMonth + " " + lastDate + " " + lastYear + "." ;

    var diffInDays = Math.floor((now - lastMbpUpdate)/(1000 * 60 * 60 * 24));
    var diffInDaysText = "That is " + diffInDays + " days.";

    $('#lastMbpUpdate').text(fullText);
    $('#diffInDays').text(diffInDaysText);
});