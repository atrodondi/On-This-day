
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
        // retrieve search information
        var person = response.contents[ 0 ];
        console.log( person );
        var name = response.contents[ 0 ].name
        console.log( name )
        var occupation = response.contents[ 0 ].occupation
        console.log( occupation )
        var note = response.contents[ 0 ].notable
        console.log( note )
        var died = response.contents[ 0 ].died
        console.log( died )

        // Create Virtual Page Content
        var dieddiv = $( '<div>' ).attr( 'id', 'ranperson' );
        var pname = $( '<p>' ).attr( 'id', 'ranname' ).text( "Name: " + name );
        var pocc = $( '<p>' ).attr( 'id', 'ranocc' ).text( "Occucation: " + occupation );
        var pnote = $( '<p>' ).attr( 'id', 'rannote' ).text( "Noteworthyness: " + note );
        dieddiv.append( pname, pocc, pnote );
        $( '.content2' ).append( dieddiv );






    } );

    console.log( settings.url )
    // end click function function
} )











// Random Facts Categories
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://random-facts1.p.rapidapi.com/fact/categories?start=1",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "random-facts1.p.rapidapi.com",
        "x-rapidapi-key": "18159348a7msh7e96e25624acf74p1172b1jsn8692563bd266",
        "x-fungenerators-api-secret": "JPlrVnEh4Z1HyvYjhPmtDweF"
    }
}

$.ajax( settings ).done( function ( response )
{
    console.log( response );
} );












// Random Facts Search by Static Category
var categories = [ 'dogs', 'animals', 'sports', 'food', 'rocks', 'cats', 'movies' ]
var settings = {
    "url": "http://api.fungenerators.com/fact/random?category=Countries&subcategory=USA",
    "method": "GET",
    "headers": {
        "accept": "application/json",
        "X-FunGenerators-Api-Secret": "JPlrVnEh4Z1HyvYjhPmtDwe"
    }
}

$.ajax( settings ).done( function ( response )
{
    console.log( response );
} );