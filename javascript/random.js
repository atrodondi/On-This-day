


$( '#search' ).on( 'click', function ()
{

    event.preventDefault();
    $( '.content2' ).empty();
    getFact();
    getBirthFacts();
    getDeathFact();


    // end click function function
} )




function getFact ()
{
    // Random Facts Search by Static Category
    var categories = [ 'dogs', 'sports', 'food', 'rocks', 'cats', 'movies', 'plants', 'biography',
        'countries', 'history', 'seas', 'rome' ]
    var fact = categories[ Math.floor( Math.random() * categories.length ) ]
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://random-facts1.p.rapidapi.com/fact/random?category=" + fact,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "random-facts1.p.rapidapi.com",
            "x-rapidapi-key": "18159348a7msh7e96e25624acf74p1172b1jsn8692563bd266",
            "x-fungenerators-api-secret": "JPlrVnEh4Z1HyvYjhPmtDweF"

        }


    }
    console.log( fact )

    // Ajax Setup for Random Fact

    $.ajax( settings ).done( function ( response )
    {

        // retrieve search information
        var category = response.contents.category;
        var fact = response.contents.fact
        var subcategory = response.contents.subcategory

        // Create Virtual Page Content
        var factdiv = $( '<div>' ).attr( 'id', 'ranfactdiv' ).text( 'Random Fact' );
        var pcat = $( '<p>' ).attr( 'id', 'rancat' ).text( "Category: " + category );
        var psubcat = $( '<p>' ).attr( 'id', 'ransub' ).text( "Subcategory: " + subcategory );
        var pfact = $( '<p>' ).attr( 'id', 'ranfact' ).text( "Fact: " + fact );
        factdiv.append( pcat, psubcat, pfact );
        $( '.content2' ).append( factdiv );

    } );

}







function getDeathFact ()
{

    // Grab Date
    var input = $( "#date" )
        .val()
        .trim();
    var inputday = moment( input ).format( "DD" );
    var inputmonth = moment( input ).format( "MM" );
    var inputyear = moment( input ).format( "YYYY" );
    var date = inputday + "&month=" + inputmonth



    // Ajax setup for Death Facts
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
        var name = response.contents[ 0 ].name
        var occupation = response.contents[ 0 ].occupation
        var note = response.contents[ 0 ].notable
        var died = response.contents[ 0 ].died

        // Create Virtual Page Content
        var dieddiv = $( '<div>' ).attr( 'id', 'ranperson' ).text( 'Died On This Day' );
        var pname = $( '<p>' ).attr( 'id', 'ranname' ).text( "Name: " + name );
        var pocc = $( '<p>' ).attr( 'id', 'ranocc' ).text( "Occucation: " + occupation );
        var pnote = $( '<p>' ).attr( 'id', 'rannote' ).text( "Noteworthyness: " + note );
        dieddiv.append( pname, pocc, pnote );
        $( '.content2' ).append( dieddiv );

    } );

}






// Birth Facts
function getBirthFacts ()
{
    // Grab Date
    var input = $( "#date" )
        .val()
        .trim();
    var inputday = moment( input ).format( "DD" );
    var inputmonth = moment( input ).format( "MM" );
    var inputyear = moment( input ).format( "YYYY" );
    var date = inputday + "&month=" + inputmonth




    // Ajax setup for Birth Facts
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://random-facts1.p.rapidapi.com/fact/onthisday/born?day=" + date,
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
        var name = response.contents[ 0 ].name
        var occupation = response.contents[ 0 ].occupation
        var note = response.contents[ 0 ].notable

        // Create Virtual Page Content
        var borndiv = $( '<div>' ).attr( 'id', 'ranperson' ).text( 'Born On This Day' );
        var bpname = $( '<p>' ).attr( 'id', 'ranname' ).text( "Name: " + name );
        var bpocc = $( '<p>' ).attr( 'id', 'ranocc' ).text( "Occucation: " + occupation );
        var bpnote = $( '<p>' ).attr( 'id', 'rannote' ).text( "Noteworthyness: " + note );
        borndiv.append( bpname, bpocc, bpnote );
        $( '.content2' ).append( borndiv );

    } );


}



































