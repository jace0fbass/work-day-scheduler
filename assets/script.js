// Get current day data.
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd MMMM Do, YYYY"));
console.log(currentDay.format("dddd MMMM Do, YYYY"));

// Get current time data.
var currentTime = moment();
$("#currentTime").text(currentTime.format("LT"));
console.log(currentTime.format("LT"));

// Need to connect current time color coding in CSS (past, present, future).
var currentHour = JSON.parse(moment().format("H"))
for (let i = 8; i < 18; i++) {
    var row = JSON.parse(document.getElementById(i).getAttribute("id"));
    if (row === currentHour) {
        document.getElementById("input-" + i).classList.add("present")
    } else if (row < currentHour) {
        document.getElementById("input-" + i).classList.add("past")
    } else {
        document.getElementById("input-" + i).classList.add("future")
    }
}

// Save the saved user data to the local storage so it's there when page is reloaded.
$("#saveBtn8").click(function () {
    var value8 = $("#input-8").val();
    localStorage.setItem("calendar-hour8", value8);
});

$("#saveBtn9").click(function () {
    var value9 = $("#input-9").val();
    localStorage.setItem("calendar-hour9", value9);
});

$("#saveBtn10").click(function () {
    var value10 = $("#input-10").val();
    localStorage.setItem("calendar-hour10", value10);
});

$("#saveBtn11").click(function () {
    var value11 = $("#input-11").val();
    localStorage.setItem("calendar-hour11", value11);
});

$("#saveBtn12").click(function () {
    var value12 = $("#input-12").val();
    localStorage.setItem("calendar-hour12", value12);
});

$("#saveBtn13").click(function () {
    var value13 = $("#input-13").val();
    localStorage.setItem("calendar-hour13", value13);
});

$("#saveBtn14").click(function () {
    var value14 = $("#input-14").val();
    localStorage.setItem("calendar-hour14", value14);
});

$("#saveBtn15").click(function () {
    var value15 = $("#input-15").val();
    localStorage.setItem("calendar-hour15", value15);
});

$("#saveBtn16").click(function () {
    var value16 = $("#input-16").val();
    localStorage.setItem("calendar-hour16", value16);
});

$("#saveBtn17").click(function () {
    var value17 = $("#input-17").val();
    localStorage.setItem("calendar-hour17", value17);
});

// Get saved data. 
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
$("#input-18").val(localStorage.getItem("calendar-hour18"));
$("#input-19").val(localStorage.getItem("calendar-hour19"));
console.log("data called");

