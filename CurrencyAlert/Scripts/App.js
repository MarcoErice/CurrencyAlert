﻿// Custom JS

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
        var url = 'https://newsapi.org/v1/articles?source=financial-times&sortBy=top&apiKey=';
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
                    

                    $('#newsFeed').append("<a href=" + currencyLink + " " + "target='_blank'" + ">" + currencyNews + "</a>" + " - " + currencySource + "<br>");
                    
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
                var sekIcon = '<span class="flag-icon flag-icon-se"></span>';
                var usdIcon = '<span class="flag-icon flag-icon-us"></span>';
                var eurIcon = '<span class="flag-icon flag-icon-eu"></span>';

                $('#usdeur').html(rateUSD + " / " + rateEUR);
                $('#usdsek').html(rateUSD + " / " + rateSEK);
                $('#usdeur').prepend(usdIcon + " USD ");
                $('#usdeur').append(" " + eurIcon + " EUR");
                $('#usdsek').prepend(usdIcon + " USD ");
                $('#usdsek').append(" " + sekIcon + " SEK");

                console.log(rateUSD + rateSEK + rateEUR);
        },
        error: function () {
            $('.errorHandler').html('check api key');
        }
    });
});