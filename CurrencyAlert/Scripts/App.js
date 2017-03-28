// Custom JS
"use strict";

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
});



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
                    
                }
                console.log(currencyNews);
                },
            error: function (data) {
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
            var adefaultCurrency1 = getQueryStringParameter('adefaultCurrency1');
            var bdefaultCurrency2 = getQueryStringParameter('bdefaultCurrency2');

            // Do something based on incoming param values
            if (adefaultCurrency1 === "SEK") {
                $("#clientusdeur").html(usdIcon + " USD " + " " + rateUSD + " = " + rateSEK + " " + sekIcon + " SEK");
            };
            if (adefaultCurrency1 === "EUR") {
                $("#clientusdeur").html(usdIcon + " USD " + " " + rateUSD + " = " + rateEUR + " " + eurIcon + " EUR");
            };
            if (adefaultCurrency1 === "GBP") {
                $("#clientusdeur").html(usdIcon + " USD " + " " + rateUSD + " = " + rateGBP + " " + gbpIcon + " GBP");
            };
            if (adefaultCurrency1 === "JPY") {
                $("#clientusdeur").html(usdIcon + " USD " + " " + rateUSD + " = " + jpyIcon + " " + rateJPY + " JPY");
            };
            if (adefaultCurrency1 === "AUD") {
                $("#clientusdeur").html(usdIcon + " USD " + " " + rateUSD + " = " + rateAUD + " " + audIcon + " AUD");
            };
            if (adefaultCurrency1 === "NOK") {
                $("#clientusdeur").html(usdIcon + " USD " + " " + rateUSD + " = " + rateNOK + " " + nokIcon + " NOK");
            };
            if (adefaultCurrency1 === "DKK") {
                $("#clientusdeur").html(usdIcon + " USD " + " " + rateUSD + " = " + rateDKK + " " + dkkIcon + " DKK");
            };
            if (bdefaultCurrency2 === "SEK") {
                $("#clientusdsek").html(usdIcon + " USD " + " " + rateUSD + " = " + rateSEK + " " + sekIcon + " SEK");
            };
            if (bdefaultCurrency2 === "EUR") {
                $("#clientusdsek").html(usdIcon + " USD " + " " + rateUSD + " = " + rateEUR + " " + eurIcon + " EUR");
            };
            if (bdefaultCurrency2 === "GBP") {
                $("#clientusdsek").html(usdIcon + " USD " + " " + rateUSD + " = " + rateGBP + " " + gbpIcon + " GBP");
            };
            if (bdefaultCurrency2 === "JPY") {
                $("#clientusdsek").html(usdIcon + " USD " + " " + rateUSD + " = " + rateJPY + " " + jpyIcon + " JPY");
            };
            if (bdefaultCurrency2 === "AUD") {
                $("#clientusdsek").html(usdIcon + " USD " + " " + rateUSD + " = " + rateAUD + " " + audIcon + " AUD");
            };
            if (bdefaultCurrency2 === "NOK") {
                $("#clientusdsek").html(usdIcon + " USD " + " " + rateUSD + " = " + rateNOK + " " + nokIcon + " NOK");
            };
            if (bdefaultCurrency2 === "DKK") {
                $("#clientusdsek").html(usdIcon + " USD " + " " + rateUSD + " = " + rateDKK + " " + dkkIcon + " DKK");
            };

            // rates to the table
            // USD row
            
            $('#usdEur').html(rateEUR);
            $('#usdGbp').html(rateGBP);
            $('#usdSek').html(rateSEK);
            $('#usdJpy').html(rateJPY);
            $('#usdAud').html(rateAUD);
            $('#usdNok').html(rateNOK);
            $('#usdDkk').html(rateDKK);
            // EUR row
            $('#eurUsd').html(rateUSD);
            $('#eurGbp').html(rateGBP);
            $('#eurSek').html(rateSEK);
            $('#eurJpy').html(rateJPY);
            $('#eurAud').html(rateAUD);
            $('#eurNok').html(rateNOK);
            $('#eurDkk').html(rateDKK);
            // GBP row
            $('#gbpUsd').html(rateUSD);
            $('#gbpEur').html(rateEUR);
            $('#gbpSek').html(rateSEK);
            $('#gbpJpy').html(rateJPY);
            $('#gbpAud').html(rateAUD);
            $('#gbpNok').html(rateNOK);
            $('#gbpDkk').html(rateDKK);
            // SEK row
            $('#sekUsd').html(rateUSD);
            $('#sekEur').html(rateEUR);
            $('#sekGbp').html(rateGBP);
            $('#sekJpy').html(rateJPY);
            $('#sekAud').html(rateAUD);
            $('#sekNok').html(rateNOK);
            $('#sekDkk').html(rateDKK);
            // JPY row
            $('#jpyUsd').html(rateUSD);
            $('#jpyEur').html(rateEUR);
            $('#jpyGbp').html(rateGBP);
            $('#jpySek').html(rateSEK);
            $('#jpyAud').html(rateAUD);
            $('#jpyNok').html(rateNOK);
            $('#jpyDkk').html(rateDKK);
            // AUD row
            $('#audUsd').html(rateUSD);
            $('#audEur').html(rateEUR);
            $('#audGbp').html(rateGBP);
            $('#audSek').html(rateSEK);
            $('#audJpy').html(rateJPY);
            $('#audNok').html(rateNOK);
            $('#audDkk').html(rateDKK);
            // NOK row
            $('#nokUsd').html(rateUSD);
            $('#nokEur').html(rateEUR);
            $('#nokGbp').html(rateGBP);
            $('#nokSek').html(rateSEK);
            $('#nokJpy').html(rateJPY);
            $('#nokAud').html(rateAUD);
            $('#nokDkk').html(rateDKK);
            // DKK row
            $('#dkkUsd').html(rateUSD);
            $('#dkkEur').html(rateEUR);
            $('#dkkGbp').html(rateGBP);
            $('#dkkSek').html(rateSEK);
            $('#dkkJpy').html(rateJPY);
            $('#dkkAud').html(rateAUD);
            $('#dkkNok').html(rateNOK);
        
                // end of rates to the table

                console.log(rateUSD + rateSEK + rateEUR);
    },
        error: function () {
            $('.errorHandler').html('check api key');
        }
    });
});