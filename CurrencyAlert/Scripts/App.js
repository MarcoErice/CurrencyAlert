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
        var url = 'https://newsapi.org/v1/articles?source=financial-times&sortBy=top&apiKey=';
        var apiKey = '63e789e202054f3e95c86a32635a28d2';
        

        jQuery.ajax({
            url: url + apiKey,
            type: 'GET',
            dataType: 'json',
            timeout: 3000,


            success: function (data) {

                var currencyNews = data.articles[0].title;
                $('#newsFeed').html(currencyNews);
                                
                console.log(currencyNews);


            },
            error: function () {
                $('.errorHandler').html('check api key');
                }
        });
    });