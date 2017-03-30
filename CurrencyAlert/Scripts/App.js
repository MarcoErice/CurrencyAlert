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

                //$('#clientusdeur').html(rateUSD + " / " + rateEUR);
                //$('#clientusdsek').html(rateUSD + " / " + rateSEK);
                //$('#clientusdeur').prepend(usdIcon + " USD ");
                //$('#clientusdeur').append(" " + eurIcon + " EUR");
                //$('#clientusdsek').prepend(usdIcon + " USD ");
                //$('#clientusdsek').append(" " + sekIcon + " SEK");
            
                console.log(rateUSD + rateSEK + rateEUR);
        },
        error: function () {
            $('.errorHandler').html('check api key');
        }
    });
    });


$(document).ready(function () {


    //source dataset "FX"
    fx.base = "EUR"; // setting currency USD which is my base rate
    fx.settings = { // Use fx.settings to set default from and to currencies (optional) after the library has loaded.
        from: "SEK",
        to: "USD"
    };
    var fxSetup = { // global variable
        from: "SEK",
        to: "USD"
    };
        
    $.ajax({
        async: true,
        url: 'https://api.fixer.io/latest?&callback',   
        method: "GET",
        headers: { "Accept": "application/json" }
    })

        .done(successFunction)
        .fail(failFunction)

    // success
    function successFunction(data) {

        // Check money.js has finished loading:
        if (typeof fx !== "undefined" && fx.rates) {
            fx.rates = data.rates;
            fx.base = data.base;
        }
        else {
            // If not, apply to fxSetup global:
            var fxSetup = {
                rates: data.rates,
                base: data.base
            }
        }

        // US Dollars
        var USDamount1 = fx.convert(1, { from: "USD", to: "EUR" });
        var USDamount2 = fx.convert(1, { from: "USD", to: "GBP" });
        var USDamount3 = fx.convert(1, { from: "USD", to: "SEK" });
        var USDamount4 = fx.convert(1, { from: "USD", to: "JPY" });
        var USDamount5 = fx.convert(1, { from: "USD", to: "AUD" });
        var USDamount6 = fx.convert(1, { from: "USD", to: "NOK" });
        var USDamount7 = fx.convert(1, { from: "USD", to: "DKK" });

        // Euro rates
        var EURamount1 = fx.convert(1, { from: "EUR", to: "USD" });
        var EURamount2 = fx.convert(1, { from: "EUR", to: "GBP" });
        var EURamount3 = fx.convert(1, { from: "EUR", to: "SEK" });
        var EURamount4 = fx.convert(1, { from: "EUR", to: "JPY" });
        var EURamount5 = fx.convert(1, { from: "EUR", to: "AUD" });
        var EURamount6 = fx.convert(1, { from: "EUR", to: "NOK" });
        var EURamount7 = fx.convert(1, { from: "EUR", to: "DKK" });

        // UK pound
        var GBPamount1 = fx.convert(1, { from: "GBP", to: "USD" });
        var GBPamount2 = fx.convert(1, { from: "GBP", to: "EUR" });
        var GBPamount3 = fx.convert(1, { from: "GBP", to: "SEK" });
        var GBPamount4 = fx.convert(1, { from: "GBP", to: "JPY" });
        var GBPamount5 = fx.convert(1, { from: "GBP", to: "AUD" });
        var GBPamount6 = fx.convert(1, { from: "GBP", to: "NOK" });
        var GBPamount7 = fx.convert(1, { from: "GBP", to: "DKK" });
                
        // Svensk krona
        var SEKamount1 = fx.convert(1, { from: "SEK", to: "USD" });
        var SEKamount2 = fx.convert(1, { from: "SEK", to: "EUR" });
        var SEKamount3 = fx.convert(1, { from: "SEK", to: "GBP" });
        var SEKamount4 = fx.convert(1, { from: "SEK", to: "JPY" });
        var SEKamount5 = fx.convert(1, { from: "SEK", to: "AUD" });
        var SEKamount6 = fx.convert(1, { from: "SEK", to: "NOK" });
        var SEKamount7 = fx.convert(1, { from: "SEK", to: "DKK" });

        // Japanese yen
        var JPYamount1 = fx.convert(1, { from: "JPY", to: "USD" });
        var JPYamount2 = fx.convert(1, { from: "JPY", to: "EUR" });
        var JPYamount3 = fx.convert(1, { from: "JPY", to: "GBP" });
        var JPYamount4 = fx.convert(1, { from: "JPY", to: "SEK" });
        var JPYamount5 = fx.convert(1, { from: "JPY", to: "AUD" });
        var JPYamount6 = fx.convert(1, { from: "JPY", to: "NOK" });
        var JPYamount7 = fx.convert(1, { from: "JPY", to: "DKK" });

        // Australian dollar
        var AUDamount1 = fx.convert(1, { from: "AUD", to: "USD" });
        var AUDamount2 = fx.convert(1, { from: "AUD", to: "EUR" });
        var AUDamount3 = fx.convert(1, { from: "AUD", to: "GBP" });
        var AUDamount4 = fx.convert(1, { from: "AUD", to: "SEK" });
        var AUDamount5 = fx.convert(1, { from: "AUD", to: "JPY" });
        var AUDamount6 = fx.convert(1, { from: "AUD", to: "NOK" });
        var AUDamount7 = fx.convert(1, { from: "AUD", to: "DKK" });

        // Norsk krona
        var NOKamount1 = fx.convert(1, { from: "NOK", to: "USD" });
        var NOKamount2 = fx.convert(1, { from: "NOK", to: "EUR" });
        var NOKamount3 = fx.convert(1, { from: "NOK", to: "GBP" });
        var NOKamount4 = fx.convert(1, { from: "NOK", to: "SEK" });
        var NOKamount5 = fx.convert(1, { from: "NOK", to: "JPY" });
        var NOKamount6 = fx.convert(1, { from: "NOK", to: "AUD" });
        var NOKamount7 = fx.convert(1, { from: "NOK", to: "DKK" }); 

        // Dansk krona
        var DKKamount1 = fx.convert(1, { from: "DKK", to: "USD" });
        var DKKamount2 = fx.convert(1, { from: "DKK", to: "EUR" });
        var DKKamount3 = fx.convert(1, { from: "DKK", to: "GBP" });
        var DKKamount4 = fx.convert(1, { from: "DKK", to: "SEK" });
        var DKKamount5 = fx.convert(1, { from: "DKK", to: "JPY" });
        var DKKamount6 = fx.convert(1, { from: "DKK", to: "AUD" });
        var DKKamount7 = fx.convert(1, { from: "DKK", to: "NOK" });
                
        // US Dollar rates values
        $("#usdEur").html(USDamount1.toFixed(4));
        $("#usdGbp").html(USDamount2.toFixed(4));
        $("#usdSek").html(USDamount3.toFixed(4));
        $("#usdJpy").html(USDamount4.toFixed(4));
        $("#usdAud").html(USDamount5.toFixed(4));
        $("#usdNok").html(USDamount6.toFixed(4));
        $("#usdDkk").html(USDamount7.toFixed(4));

        // Euro rates values
        $("#eurUsd").html(EURamount1.toFixed(4));
        $("#eurGbp").html(EURamount2.toFixed(4));
        $("#eurSek").html(EURamount3.toFixed(4));
        $("#eurJpy").html(EURamount4.toFixed(4));
        $("#eurAud").html(EURamount5.toFixed(4));
        $("#eurNok").html(EURamount6.toFixed(4));
        $("#eurDkk").html(EURamount7.toFixed(4));

        // UK pound rates values
        $("#gbpUsd").html(GBPamount1.toFixed(4));
        $("#gbpEur").html(GBPamount2.toFixed(4));
        $("#gbpSek").html(GBPamount3.toFixed(4));
        $("#gbpJpy").html(GBPamount4.toFixed(4));
        $("#gbpAud").html(GBPamount5.toFixed(4));
        $("#gbpNok").html(GBPamount6.toFixed(4));
        $("#gbpDkk").html(GBPamount7.toFixed(4));

        // Swedish rates values
        $("#sekUsd").html(SEKamount1.toFixed(4));
        $("#sekEur").html(SEKamount2.toFixed(4));
        $("#sekGbp").html(SEKamount3.toFixed(4));
        $("#sekJpy").html(SEKamount4.toFixed(4));
        $("#sekAud").html(SEKamount5.toFixed(4));
        $("#sekNok").html(SEKamount6.toFixed(4));
        $("#sekDkk").html(SEKamount7.toFixed(4));

        // Japanese rates values
        $("#jpyUsd").html(JPYamount1.toFixed(4));
        $("#jpyEur").html(JPYamount2.toFixed(4));
        $("#jpyGbp").html(JPYamount3.toFixed(4));
        $("#jpySek").html(JPYamount4.toFixed(4));
        $("#jpyAud").html(JPYamount5.toFixed(4));
        $("#jpyNok").html(JPYamount6.toFixed(4));
        $("#jpyDkk").html(JPYamount7.toFixed(4));

        // Australian rates values
        $("#audUsd").html(AUDamount1.toFixed(4));
        $("#audEur").html(AUDamount2.toFixed(4));
        $("#audGbp").html(AUDamount3.toFixed(4));
        $("#audSek").html(AUDamount4.toFixed(4));
        $("#audJpy").html(AUDamount5.toFixed(4));
        $("#audNok").html(AUDamount6.toFixed(4));
        $("#audDkk").html(AUDamount7.toFixed(4));

        // Norwegian rates values
        $("#nokUsd").html(NOKamount1.toFixed(4));
        $("#nokEur").html(NOKamount2.toFixed(4));
        $("#nokGbp").html(NOKamount3.toFixed(4));
        $("#nokSek").html(NOKamount4.toFixed(4));
        $("#nokJpy").html(NOKamount5.toFixed(4));
        $("#nokAud").html(NOKamount6.toFixed(4));
        $("#nokDkk").html(NOKamount7.toFixed(4));

        // Danish rates values
        $("#dkkUsd").html(DKKamount1.toFixed(4));
        $("#dkkEur").html(DKKamount2.toFixed(4));
        $("#dkkGbp").html(DKKamount3.toFixed(4));
        $("#dkkSek").html(DKKamount4.toFixed(4));
        $("#dkkJpy").html(DKKamount5.toFixed(4));
        $("#dkkAud").html(DKKamount6.toFixed(4));
        $("#dkkNok").html(DKKamount7.toFixed(4));    
     
    }
    function failFunction(request, textStatus, errorThrown) {
        console.log('Funkar ej.. ');
    }
});





