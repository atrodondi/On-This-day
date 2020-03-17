$(".btn-primary").on("click", function () {
    event.preventDefault();
    $(".content3").empty();

    var input = $("#date")
        .val()
        .trim();
    console.log(input);
    var d = moment(input).format("DD");
    console.log(d);
    var m = moment(input).format("MM");
    console.log(m);
    var y = moment(input).format("YYYY");
    console.log(y);

    var date = y + "-" + m + "-" + d;
    console.log(date);
    var crimeName = "";

    var crimes = ["DUI", "Drugs", "Domestic violence", "Assault", "Disorderly conduct"];

    var i = Math.floor(Math.random() * crimes.length)

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://brianiswu-nflarrest-v1.p.rapidapi.com/crime/topTeams/" + crimes[i],
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "brianiswu-nflarrest-v1.p.rapidapi.com",
            "x-rapidapi-key": "5ec8a5296cmsh4924eb0618f5510p12ab09jsn698d9af6c834"
            // response = crimes[i]
        }

    }

    $.ajax(settings).done(function (response) {
        console.log(i);
        var title = $("<div>").attr("id", "data").text("NFL teams crime stats: ");

        for (let j = 0; j < 2; j++) {
            var data = $("<div>");
            var team = $("<p>").attr("id", "team").text("Team: " + response[j].Team_name);
            var city = $("<p>").attr("id", "city").text("City: " + response[j].Team_city);
            var count = $("<p>").attr("id", "count").text("Total arrests: " + response[j].arrest_count);

            data.append(team, city, count, crimes[i]);
            $(".content3").append(data);
        }

        $(".content3").prepend(title);

    });




    $.ajax(settings).done(function (response) {
        console.log(response);


    });



});