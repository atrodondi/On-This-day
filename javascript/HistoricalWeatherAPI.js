function WriteToDOM(pastWeather) {
    output = "<br/> Date: " + pastWeather.data.weather[0].date;
    output += "<br/> Max Temp(C): " + pastWeather.data.weather[0].maxtempC;
    output += "<br/> Max Temp(F): " + pastWeather.data.weather[0].maxtempF;
    output += "<br/> Min Temp(C): " + pastWeather.data.weather[0].mintempC;
    output += "<br/> Min Temp(F): " + pastWeather.data.weather[0].mintempF;
    output += "<br/> Cloud Cover: " + pastWeather.data.weather[0].hourly[0].cloudcover;

    resultContainer.empty();
    resultContainer.html(output);
};

function JSONP_PastWeather(input) {
    var temp;
    var city;

    var url = input.url + 'past-weather.ashx?q=' + input.query + '&format=' + input.format + '&extra=' + input.extra + '&date=' + input.date + '&enddate=' + input.enddate + '&includelocation=' + input.includelocation + '&key=' + input.key;

    // ajax setup
    var settings = {
        type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function (json) {
            console.dir('success');
        },
        error: function (e) {
            console.log(e.message);
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        console.log(response.data.weather);
        var weather = response.data.weather;
    });

    var results
    return (results);
};

// main entry point
function Main() {
    // api url & key
    var apiURL = 'http://api.worldweatheronline.com/premium/v1/';
    var apiKey = "0372e7484ec34bf4ae320602201203";

    // fake user inputs
    var month = "02";
    var day = "19";
    var year = "1992";

    // default inputs
    var city = "Chicago"

    // convert str year input to int to check if it exceeds database's range
    var yearInt = parseInt(year);
    if (yearInt < 2012) { year = "2012" };

    // format date for weather api
    var date = year + "-" + month + "-" + day;
    console.log(date);

    // create input object to feed into search function
    // user only inputs date for now, so many of the settings
    // are default for testing
    var pastWeatherInput = {
        url: apiURL,
        key: apiKey,
        query: city,
        format: 'JSON',
        enddate: date,
        date: date,
        extra: '',
        includelocation: '',
        show_comments: '',
    };

    // run function that searches weather api guided by user inputs
    var results = JSONP_PastWeather(pastWeatherInput);
    console.log(results);

    // event handlers ()???
    // $(document).ready(function () {

    //     $('#btnLocalWeatherPremium').click(GetLocalWeather);
    //     $('#btnLocationSearchPremium').click(SearchLocation);
    //     $('#btnTimeZonePremium').click(GetTimeZone);
    //     $('#btnMarineWeatherPremium').click(GetMarineWeather);
    //     $('#btnPastWeatherPremium').click(GetPastWeather);

    // });

};

Main();