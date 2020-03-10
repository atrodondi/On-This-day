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

function Main() {
    var search = "March 9"
    displayImg(search);


};

Main();