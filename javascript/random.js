var day;
var month;
var year;
var date = '';
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://random-facts1.p.rapidapi.com/fact/onthisday/died?day=" + date,
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "random-facts1.p.rapidapi.com",
        "x-rapidapi-key": "7e010bc9b6mshd358f254848b55ap1c1c7fjsna19302327c55",
        "x-fungenerators-api-secret": "JPlrVnEh4Z1HyvYjhPmtDweF"
    }
}

$.ajax( settings ).done( function ( response )
{
    console.log( response );
} );