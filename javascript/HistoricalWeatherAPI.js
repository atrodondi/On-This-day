function WriteToDOM(pastWeather) {
    // Create Virtual Page Content
    var divTag = $("<div>").attr("id", "ranperson");
    var pSunrise = $("<p>").attr("id", "sunrise").text("Sunrise: " + pastWeather.sunrise);
    var pSunset = $("<p>").attr("id", "sunset").text("Sunset: " + pastWeather.sunset);
    var pMoonPhase = $("<p>").attr("id", "moonPhase").text("Moon Phase: " + pastWeather.moonPhase);
    var pAvgTempF = $("<p>").attr("id", "avgTempF").text("Average Temperature: " + pastWeather.avgTempF + "°F")
    divTag.append(pSunrise, pSunset, pMoonPhase, pAvgTempF);
    $(".content1").append(divTag);
};

function JSONP_PastWeather(input) {

    // ajax api url with search options
    var url = input.url + "past-weather.ashx?q=" + input.query + "&format=" + input.format + "&extra=" + input.extra + "&date=" + input.date + "&enddate=" + input.enddate + "&includelocation=" + input.includelocation + "&key=" + input.key;

    // ajax setup
    var settings = {
        type: "GET",
        url: url,
        async: false,
        contentType: "application/json",
        dataType: "jsonp",
        success: function (json) {
            console.dir("success");
        },
        error: function (e) {
            console.log(e.message);
        }
    }

    // ajax callback
    // return $ajax(settings)
    $.ajax(settings).then(function (response) {
        // everything has to be done here
        // you will not be able to return from this ajax call
        console.log(response);

        // api results
        sunrise = response.data.weather[0].astronomy[0].sunrise;
        sunset = response.data.weather[0].astronomy[0].sunset;
        moonPhase = response.data.weather[0].astronomy[0].moon_phase;
        avgTempF = response.data.weather[0].avgtempF;

        // write to the DOM
        pastWeather = {
            sunrise: sunrise,
            sunset: sunset,
            moonPhase: moonPhase,
            avgTempF: avgTempF
        }
        WriteToDOM(pastWeather);
    });
};

// main entry point
function Main() {
    // api url & key
    var apiURL = "http://api.worldweatheronline.com/premium/v1/";
    var apiKey = "0372e7484ec34bf4ae320602201203";

    // default inputs
    var city = "Chicago"

    $("#search").on("click", function () {
        event.preventDefault();

        // Parse Date
        var input = $("#date").val().trim();
        var inputDay = moment(input).format("DD");
        var inputMonth = moment(input).format("MM");

        var inputYear = moment(input).format("YYYY");
        var yearInt = parseInt(inputYear);

        // convert str year input to int to check if it exceeds database"s range
        if (yearInt < 2012) { inputYear = "2012" };

        // format date for weather api
        var date = inputYear + "-" + inputMonth + "-" + inputDay;

        console.log(inputDay);
        console.log(inputMonth);
        console.log(inputYear);
        console.log(date);

        // create input object to feed into search function
        // user only inputs date for now, so many of the settings
        // are default for testing
        var pastWeatherInput = {
            url: apiURL,
            key: apiKey,
            query: city,
            format: "JSON",
            enddate: date,
            date: date,
            extra: "",
            includelocation: "",
            show_comments: "",
        };

        // run function that searches weather api guided by user inputs
        // var results = JSONP_PastWeather(pastWeatherInput).done();
        JSONP_PastWeather(pastWeatherInput);

        // event handlers ()???
        // $(document).ready(function () {

        //     $("#btnLocalWeatherPremium").click(GetLocalWeather);
        //     $("#btnLocationSearchPremium").click(SearchLocation);
        //     $("#btnTimeZonePremium").click(GetTimeZone);
        //     $("#btnMarineWeatherPremium").click(GetMarineWeather);
        //     $("#btnPastWeatherPremium").click(GetPastWeather);

        // });

    })

};

Main();