// Custom JS

'use strict';

$(document).ready(function () {
	
moment.locale("sv");
var currentDate = moment().format('YYYY-MM-DD');
var currentDay = moment().format('dddd');
$("#date").html(currentDate);
$("#day").html(currentDay);

function clock() {
	var currentClock = moment().format("HH:mm:ss");
	$("#time").html(currentClock);
}
clock();
setInterval(clock, 1000);
});
