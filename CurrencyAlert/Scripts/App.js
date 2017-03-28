// Custom JS

'use strict';

$(document).ready(function () {
	
moment.locale("sv");
var currentDate = moment().format('YYYY-MM-DD');
var currentDay = moment().format('dddd');
$("#date").html(currentDate);
$("#day").html(currentDay);

    // This function is executed if the above call fails
    function onGetUserNameFail(sender, args) {
        alert('Failed to get user name. Error:' + args.get_message());
    }
})



    $(document).ready(function () {
        var url = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=';
        var apiKey = '63e789e202054f3e95c86a32635a28d2';
        

        jQuery.ajax({
            url: url + apiKey,
            type: 'GET',
            dataType: 'json',
            timeout: 3000,

            success: function (data)
                   
            {
                for (var i = 0; i < 3; i++){
                    var currencyNews = data.articles[i].title;
                    var currencyLink = data.articles[i].url;
                    var currencySource = data.source;
                    
                    $('#newsFeed').append("<a href=" + currencyLink + " " + "target='_blank'" + ">" + currencyNews + "</a>" +" - " + currencySource + "<br>");
                };
                console.log(currencyNews);
                },
            error: function () {
                $('.errorHandler').html('check api key');
                }
        });
});


$(document).ready(function () {
    var urlxc = 'https://openexchangerates.org/api/latest.json?app_id=';
    var apiKeyxc = '288ae5abeb444453bd3d9ea1a453ba5e';


    jQuery.ajax({
        url: urlxc + apiKeyxc,
        type: 'GET',
        dataType: 'json',
        timeout: 3000,

        success: function (rate) {
            
                var rateUSD = rate.rates.USD;
                var rateSEK = rate.rates.SEK;
				var rateEUR = rate.rates.EUR;
				

                $('#usdeur').html(rateUSD + " / " + rateEUR);
                $('#usdsek').html(rateUSD + " / " + rateSEK);

                console.log(rateUSD + rateSEK + rateEUR);
        },
        error: function () {
            $('.errorHandler').html('check api key');
        }
	});

	function manageQueryStringParameter(paramToRetrieve) {
		var params =
			document.URL.split("?")[1].split("&");
		var strParams = "";
		for (var i = 0; i < params.length; i = i + 1) {
			var singleParam = params[i].split("=");
			if (singleParam[0] == paramToRetrieve) {
				return singleParam[1];
			}
		}
	}

	var pagesUrl = appWebUrl + '/Pages/Default.aspx';
	var pagesUrl = hostWebUrl + '/Pages/ClientWebPart1.aspx'

	var hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
	var appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));
	$('a#default_page_link').attr('href', appWebUrl);
	$('a#default_page_link_webapp').attr('href', hostWebUrl);

	});

