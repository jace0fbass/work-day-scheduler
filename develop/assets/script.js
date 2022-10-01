
var currentDay = $("currentDay")
console.log("currentDay")

// Need function to display current month, day, and year moment().format("MMMM Do YYYY"); 
    // Do I need to use #npm?
    // Can I add "dddd" to ("MMMM Do YYYY") to display "Saturday October 1st 2022" ?

// Need function to save entered info.

// Need function for current time and connect to color coding in CSS (past, present, future).

// Get saved info. 
$("#input-8").val(localStorage.getItem("calendar-hour8"));
$("#input-9").val(localStorage.getItem("calendar-hour9"));
$("#input-10").val(localStorage.getItem("calendar-hour10"));
$("#input-11").val(localStorage.getItem("calendar-hour9"));
$("#input-12").val(localStorage.getItem("calendar-hour9"));
$("#input-13").val(localStorage.getItem("calendar-hour9"));
$("#input-14").val(localStorage.getItem("calendar-hour9"));
$("#input-15").val(localStorage.getItem("calendar-hour9"));
$("#input-16").val(localStorage.getItem("calendar-hour9"));

 
// Need to call the stored results when page is reloaded.

$("#saveBtn8").click(function(){
    var value8 = $("#input-8").val();
    localStorage.setItem("calendar-hour8", value8);
});

$("#saveBtn9").click(function(){
    var value9 = $("#input-9").val();
    localStorage.setItem("calendar-hour9", value9);
});















// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist
