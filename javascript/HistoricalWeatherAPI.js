// main entry point
function Main() {
    // user inputs
    var month = "02";
    var day = "19";
    var year = "1992";

    // convert str year input to int to check if it exceeds database's range
    var yearInt = parseInt(year);
    if (yearInt < 2012) { year = "2012" }

    console.log(year)
}

Main();