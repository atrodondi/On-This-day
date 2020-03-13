
$( '#search' ).on( 'click', function ()
{
    event.preventDefault();
    // Parse Date
    var input = $( "#date" )
        .val()
        .trim();
    console.log( input );
    var inputday = moment( input ).format( "DD" );
    console.log( inputday );
    var inputmonth = moment( input ).format( "MM" );
    console.log( inputmonth );
    var inputyear = moment( input ).format( "YYYY" );
    console.log( inputyear );
    var date = inputday + "&month=" + inputmonth

    // Ajax setup 
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

    console.log( settings.url )
    // end click function function
} )