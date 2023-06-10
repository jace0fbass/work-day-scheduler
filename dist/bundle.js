/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("// Get current day data.\nlet currentDay = moment();\n$(\"#currentDay\").text(currentDay.format(\"dddd MMMM Do, YYYY\"));\nconsole.log(currentDay.format(\"dddd MMMM Do, YYYY\"));\n\n// Get current time data.\nlet currentTime = moment();\n$(\"#currentTime\").text(currentTime.format(\"LT\"));\nconsole.log(currentTime.format(\"LT\"));\n\n// Need to connect current time color coding in CSS (past, present, future).\nlet currentHour = JSON.parse(moment().format(\"H\"))\nfor (let i = 8; i < 18; i++) {\n    var row = JSON.parse(document.getElementById(i).getAttribute(\"id\"));\n    if (row === currentHour) {\n        document.getElementById(\"input-\" + i).classList.add(\"present\")\n    } else if (row < currentHour) {\n        document.getElementById(\"input-\" + i).classList.add(\"past\")\n    } else {\n        document.getElementById(\"input-\" + i).classList.add(\"future\")\n    }\n}\n\n// Save the saved user data to the local storage so it's there when page is reloaded.\n$(\"#saveBtn8\").click(function () {\n    const value8 = $(\"#input-8\").val();\n    localStorage.setItem(\"calendar-hour8\", value8);\n});\n\n$(\"#saveBtn9\").click(function () {\n    const value9 = $(\"#input-9\").val();\n    localStorage.setItem(\"calendar-hour9\", value9);\n});\n\n$(\"#saveBtn10\").click(function () {\n    const value10 = $(\"#input-10\").val();\n    localStorage.setItem(\"calendar-hour10\", value10);\n});\n\n$(\"#saveBtn11\").click(function () {\n    const value11 = $(\"#input-11\").val();\n    localStorage.setItem(\"calendar-hour11\", value11);\n});\n\n$(\"#saveBtn12\").click(function () {\n    const value12 = $(\"#input-12\").val();\n    localStorage.setItem(\"calendar-hour12\", value12);\n});\n\n$(\"#saveBtn13\").click(function () {\n    const value13 = $(\"#input-13\").val();\n    localStorage.setItem(\"calendar-hour13\", value13);\n});\n\n$(\"#saveBtn14\").click(function () {\n    const value14 = $(\"#input-14\").val();\n    localStorage.setItem(\"calendar-hour14\", value14);\n});\n\n$(\"#saveBtn15\").click(function () {\n    const value15 = $(\"#input-15\").val();\n    localStorage.setItem(\"calendar-hour15\", value15);\n});\n\n$(\"#saveBtn16\").click(function () {\n    const value16 = $(\"#input-16\").val();\n    localStorage.setItem(\"calendar-hour16\", value16);\n});\n\n$(\"#saveBtn17\").click(function () {\n    const value17 = $(\"#input-17\").val();\n    localStorage.setItem(\"calendar-hour17\", value17);\n});\n\n// Get saved data. \n$(\"#input-8\").val(localStorage.getItem(\"calendar-hour8\"));\n$(\"#input-9\").val(localStorage.getItem(\"calendar-hour9\"));\n$(\"#input-10\").val(localStorage.getItem(\"calendar-hour10\"));\n$(\"#input-11\").val(localStorage.getItem(\"calendar-hour11\"));\n$(\"#input-12\").val(localStorage.getItem(\"calendar-hour12\"));\n$(\"#input-13\").val(localStorage.getItem(\"calendar-hour13\"));\n$(\"#input-14\").val(localStorage.getItem(\"calendar-hour14\"));\n$(\"#input-15\").val(localStorage.getItem(\"calendar-hour15\"));\n$(\"#input-16\").val(localStorage.getItem(\"calendar-hour16\"));\n$(\"#input-17\").val(localStorage.getItem(\"calendar-hour17\"));\n$(\"#input-18\").val(localStorage.getItem(\"calendar-hour18\"));\n$(\"#input-19\").val(localStorage.getItem(\"calendar-hour19\"));\nconsole.log(\"data called\");\n\n\n\n//# sourceURL=webpack://work-day-scheduler/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;