// Custom JS
'use strict';
function getQueryStringParameter(urlParameterKey) {
    var params = document.URL.split('?')[1].split('&');
    var strParams = '';
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split('=');
        if (singleParam[0] == urlParameterKey)
            return decodeURIComponent(singleParam[1]);
    }
}

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
                var rateGBP = rate.rates.GBP;
                var rateJPY = rate.rates.JPY;
                var rateAUD = rate.rates.AUD;
                var rateNOK = rate.rates.NOK;
                var rateDKK = rate.rates.DKK;
                var usdIcon = '<span class="flag-icon flag-icon-us"></span>';
                var sekIcon = '<span class="flag-icon flag-icon-se"></span>';
                var eurIcon = '<span class="flag-icon flag-icon-eu"></span>';
                var gbpIcon = '<span class="flag-icon flag-icon-gb"></span>';
                var jpyIcon = '<span class="flag-icon flag-icon-jp"></span>';
                var audIcon = '<span class="flag-icon flag-icon-au"></span>';
                var nokIcon = '<span class="flag-icon flag-icon-no"></span>';
                var dkkIcon = '<span class="flag-icon flag-icon-dk"></span>';
                var defaultCurrency1 = getQueryStringParameter('defaultCurrency1');
                var defaultCurrency2 = getQueryStringParameter('defaultCurrency2');

                // Do something based on incoming param values
                if (defaultCurrency1 === "SEK") {
                    $("#clientusdeur").html(usdIcon + " USD " + " " + rateUSD + " = " + rateSEK + " " + sekIcon + " SEK");
                };
                if (defaultCurrency1 === "EUR") {
                    $("#clientusdeur").html(usdIcon + " USD " + " " + rateUSD + " = " + rateEUR + " " + eurIcon + " EUR");
                };
                if (defaultCurrency1 === "GBP") {
                    $("#clientusdeur").html(usdIcon + " USD " + " " + rateUSD + " = " + rateGBP + " " + gbpIcon + " GBP");
                };
                if (defaultCurrency1 === "JPY") {
                    $("#clientusdeur").html(usdIcon + " USD " + " " + rateUSD + " = " + jpyIcon + " " + rateJPY + " JPY");
                 };
                if (defaultCurrency1 === "AUD") {
                    $("#clientusdeur").html(usdIcon + " USD " + " " + rateUSD + " = " + rateAUD + " " + audIcon + " AUD");
                };
                if (defaultCurrency1 === "NOK") {
                    $("#clientusdeur").html(usdIcon + " USD " + " " + rateUSD + " = " + rateNOK + " " + nokIcon + " NOK");
                };
                if (defaultCurrency1 === "DKK") {
                    $("#clientusdeur").html(usdIcon + " USD " + " " + rateUSD + " = " + rateDKK + " " + dkkIcon + " DKK");
                };
                if (defaultCurrency2 === "SEK") {
                    $("#clientusdsek").html(usdIcon + " USD " + " " + rateUSD + " = " + rateSEK + " " + sekIcon + " SEK");
                };
                if (defaultCurrency2 === "EUR") {
                    $("#clientusdsek").html(usdIcon + " USD " + " " + rateUSD + " = " + rateEUR + " " + eurIcon + " EUR");
                };
                if (defaultCurrency2 === "GBP") {
                    $("#clientusdsek").html(usdIcon + " USD " + " " + rateUSD + " = " + rateGBP + " " + gbpIcon + " GBP");
                };
                if (defaultCurrency2 === "JPY") {
                    $("#clientusdsek").html(usdIcon + " USD " + " " + rateUSD + " = " + rateJPY + " " + jpyIcon + " JPY");
                   };
                if (defaultCurrency2 === "AUD") {
                    $("#clientusdsek").html(usdIcon + " USD " + " " + rateUSD + " = " + rateAUD + " " + audIcon + " AUD");
                };
                if (defaultCurrency2 === "NOK") {
                    $("#clientusdsek").html(usdIcon + " USD " + " " + rateUSD + " = " + rateNOK + " " + nokIcon + " NOK");
                };
                if (defaultCurrency2 === "DKK") {
                    $("#clientusdsek").html(usdIcon + " USD " + " " + rateUSD + " = " + rateDKK + " " + dkkIcon + " DKK");
                };

                //$('#clientusdeur').html(rateUSD + " / " + rateEUR);
                //$('#clientusdsek').html(rateUSD + " / " + rateSEK);
                //$('#clientusdeur').prepend(usdIcon + " USD ");
                //$('#clientusdeur').append(" " + eurIcon + " EUR");
                //$('#clientusdsek').prepend(usdIcon + " USD ");
                //$('#clientusdsek').append(" " + sekIcon + " SEK");

                // rates to the table
                // USD row
                $('#usdEur').html(rate.rates.EUR);
                $('#usdGbp').html(rate.rates.GBP);
                $('#usdSek').html(rate.rates.SEK);
                $('#usdJpy').html(rate.rates.JPY);
                $('#usdAud').html(rate.rates.AUD);
                $('#usdNok').html(rate.rates.NOK);
                $('#usdDkk').html(rate.rates.DKK);
                // EUR row
                $('#eurUsd').html(rate.rates.USD);
                $('#eurGbp').html(rate.rates.GBP);
                $('#eurSek').html(rate.rates.SEK);
                $('#eurJpy').html(rate.rates.JPY);
                $('#eurAud').html(rate.rates.AUD);
                $('#eurNok').html(rate.rates.NOK);
                $('#eurDkk').html(rate.rates.DKK);
                // GBP row
                $('#gbpUsd').html(rate.rates.USD);
                $('#gbpEur').html(rate.rates.EUR);
                $('#gbpSek').html(rate.rates.SEK);
                $('#gbpJpy').html(rate.rates.JPY);
                $('#gbpAud').html(rate.rates.AUD);
                $('#gbpNok').html(rate.rates.NOK);
                $('#gbpDkk').html(rate.rates.DKK);
                // SEK row
                $('#sekUsd').html(rate.rates.USD);
                $('#sekEur').html(rate.rates.EUR);
                $('#sekGbp').html(rate.rates.GBP);
                $('#sekJpy').html(rate.rates.JPY);
                $('#sekAud').html(rate.rates.AUD);
                $('#sekNok').html(rate.rates.NOK);
                $('#sekDkk').html(rate.rates.DKK);
                // JPY row
                $('#jpyUsd').html(rate.rates.USD);
                $('#jpyEur').html(rate.rates.EUR);
                $('#jpyGbp').html(rate.rates.GBP);
                $('#jpySek').html(rate.rates.SEK);
                $('#jpyAud').html(rate.rates.AUD);
                $('#jpyNok').html(rate.rates.NOK);
                $('#jpyDkk').html(rate.rates.DKK);
                // AUD row
                $('#audUsd').html(rate.rates.USD);
                $('#audEur').html(rate.rates.EUR);
                $('#audGbp').html(rate.rates.GBP);
                $('#audSek').html(rate.rates.SEK);
                $('#audJpy').html(rate.rates.JPY);
                $('#audNok').html(rate.rates.NOK);
                $('#audDkk').html(rate.rates.DKK);
                // NOK row
                $('#nokUsd').html(rate.rates.USD);
                $('#nokEur').html(rate.rates.EUR);
                $('#nokGbp').html(rate.rates.GBP);
                $('#nokSek').html(rate.rates.SEK);
                $('#nokJpy').html(rate.rates.JPY);
                $('#nokAud').html(rate.rates.AUD);
                $('#nokDkk').html(rate.rates.DKK);
                // DKK row
                $('#dkkUsd').html(rate.rates.USD);
                $('#dkkEur').html(rate.rates.EUR);
                $('#dkkGbp').html(rate.rates.GBP);
                $('#dkkSek').html(rate.rates.SEK);
                $('#dkkJpy').html(rate.rates.JPY);
                $('#dkkAud').html(rate.rates.AUD);
                $('#dkkNok').html(rate.rates.NOK);
                
                // end of rates to the table

                console.log(rateUSD + rateSEK + rateEUR);
        },
        error: function () {
            $('.errorHandler').html('check api key');
        }
    });
    });
