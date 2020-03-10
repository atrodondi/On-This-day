// API info:
// username: AlvarolunaUCB
// password: Coding101

function SearchTerm(search) {
    var queryURL = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=" + search;

    $.ajax({
        url: queryURL,
        method: "GET",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, status, jqXHR) {
        }
    }).done(function (response) {
        console.log(response);
    });
};

function SearchByDay() {
    var month = 2
    var day = 14
    var queryURL = "http://history.muffinlabs.com/date/" + month + "/" + day;

    $.ajax({
        url: queryURL,
        method: "GET",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, status, jqXHR) {
        }
    }).done(function (response) {
        console.log(response);
    });
};

function Main() {
    console.log("hello world")

    var search = "March 9"
    SearchTerm(search);

    SearchByDay();
};

Main();