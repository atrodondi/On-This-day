function WriteToDOM(pastWeather) {
    // Create Virtual Page Content
    var divTag = $("<div>").attr("id", "weather");

    // weather image tag and description
    var imgTag = $("<img>").attr("id", "weatherIcon");
    imgTag.attr("src", pastWeather.imgURL);
    var descTag = $("<p>").attr("id", "weatherDescription").text(pastWeather.weatherDesc);

    // temperature data
    var pAvgTempF = $("<p>").attr("id", "avgTempF").text("Average Temperature: " + pastWeather.avgTempF + "°F")
    var pHighTempF = $("<p>").attr("id", "highTempF").text("High Temperature: " + pastWeather.highTempF + "°F")
    var pLowTempF = $("<p>").attr("id", "lowTempF").text("Low Temperature: " + pastWeather.lowTempF + "°F")

    // precipitation and snow fall data
    var pPrecip = $("<p>").attr("id", "lowTempF").text("Rainfall: " + pastWeather.precipIn + "in")
    var pSnow = $("<p>").attr("id", "lowTempF").text("Snowfall: " + pastWeather.snowCm + "cm")

    // moon data
    var pMoonPhase = $("<p>").attr("id", "moonPhase").text("Moon Phase: " + pastWeather.moonPhase);

    divTag.append(imgTag, descTag, $("<hr>"), pAvgTempF, pHighTempF, pLowTempF, $("<hr>"), pPrecip, pSnow, $("<hr>"), pMoonPhase);
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
        imgURL = response.data.weather[0].hourly[4].weatherIconUrl[0].value;
        weatherDesc = response.data.weather[0].hourly[4].weatherDesc[0].value;

        avgTempF = response.data.weather[0].avgtempF;
        highTempF = response.data.weather[0].maxtempF;
        lowTempF = response.data.weather[0].mintempF;

        precipIn = response.data.weather[0].hourly[4].precipInches;
        snowCm = response.data.weather[0].totalSnow_cm;

        moonPhase = response.data.weather[0].astronomy[0].moon_phase;


        // write to the DOM
        pastWeather = {
            imgURL: imgURL,
            weatherDesc: weatherDesc,

            avgTempF: avgTempF,
            highTempF: highTempF,
            lowTempF: lowTempF,

            precipIn: precipIn,
            snowCm: snowCm,

            moonPhase: moonPhase,
        }
        WriteToDOM(pastWeather);
    });
};

// main entry point
function Main() {
    // api url & key
    var apiURL = "https://api.worldweatheronline.com/premium/v1/";
    var apiKey = "0372e7484ec34bf4ae320602201203";

    // default inputs
    var city = "Chicago"

    $("#search").on("click", function () {
        event.preventDefault();
        $(".content1").empty();


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
    })

};

Main();