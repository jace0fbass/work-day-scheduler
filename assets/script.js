var currentDay = $("currentDay")
console.log("currentDay")


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

    // Need function to display current month, day, and year moment().format("MMMM Do YYYY"); 
    // Do I need to use #npm?
    // Can I add "dddd" to ("MMMM Do YYYY") to display "Saturday October 1st 2022" ?


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

    // Need function for current time and connect to color coding in CSS (past, present, future).




// Save the saved user info to the local storage so it's there when page is reloaded.
$("#saveBtn8").click(function(){
    var value8 = $("#input-8").val();
    localStorage.setItem("calendar-hour8", value8);
});

$("#saveBtn9").click(function(){
    var value9 = $("#input-9").val();
    localStorage.setItem("calendar-hour9", value9);
});

$("#saveBtn10").click(function(){
    var value10 = $("#input-10").val();
    localStorage.setItem("calendar-hour10", value10);
});

$("#saveBtn11").click(function(){
    var value11 = $("#input-11").val();
    localStorage.setItem("calendar-hour11", value11);
});

$("#saveBtn12").click(function(){
    var value12 = $("#input-12").val();
    localStorage.setItem("calendar-hour12", value12);
});

$("#saveBtn13").click(function(){
    var value13 = $("#input-13").val();
    localStorage.setItem("calendar-hour13", value13);
});

$("#saveBtn14").click(function(){
    var value14 = $("#input-14").val();
    localStorage.setItem("calendar-hour14", value14);
});

$("#saveBtn15").click(function(){
    var value15 = $("#input-15").val();
    localStorage.setItem("calendar-hour15", value15);
});

$("#saveBtn16").click(function(){
    var value16 = $("#input-16").val();
    localStorage.setItem("calendar-hour16", value16);
});

$("#saveBtn17").click(function(){
    var value17 = $("#input-17").val();
    localStorage.setItem("calendar-hour17", value17);
});

// Get saved info. 
$("#input-8").val(localStorage.getItem("calendar-hour8"));
$("#input-9").val(localStorage.getItem("calendar-hour9"));
$("#input-10").val(localStorage.getItem("calendar-hour10"));
$("#input-11").val(localStorage.getItem("calendar-hour11"));
$("#input-12").val(localStorage.getItem("calendar-hour12"));
$("#input-13").val(localStorage.getItem("calendar-hour13"));
$("#input-14").val(localStorage.getItem("calendar-hour14"));
$("#input-15").val(localStorage.getItem("calendar-hour15"));
$("#input-16").val(localStorage.getItem("calendar-hour16"));
$("#input-17").val(localStorage.getItem("calendar-hour17"));


