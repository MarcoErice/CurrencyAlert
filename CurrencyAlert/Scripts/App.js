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

// Money conversion


// News Feed
$(document).ready(function () {

	$.ajax({
		async: true,
		url: "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.idg.se%2FComputerSweden20SenasteNyheter",
		method: "GET",
		headers: {
			"Accept": "application/json;odata=verbose"
		}
	})

		.done(successFunction)
		.fail(failFunction)

	function successFunction(data) {
		var myData = [];
		for (var i = 0; i < 5; ++i) {
			var title = data.items[i].title;
			var datum = data.items[i].pubDate;
			var link = data.items[i].link;

			myData.push("<p>" + "<a href=" + link + " " + "target='_blank'" + ">" + title + "</a>" + "</p>" + datum);
			$("newsFeed").html(myData.join(''));
		}
		function failFunction(request, textStatus, errorThrown) {
			console.log('Funkar ej.. ');
		}
	}
});