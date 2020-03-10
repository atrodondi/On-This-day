var year = "YYYY";
var month = "MM";
var day = "DD";
var date = year + "-" + month + "-" + day;

var settings = {
  url: "https://epic.gsfc.nasa.gov/api/natural/all",
  method: "GET"
};

$.ajax(settings).done(function(response) {
  console.log(response);
});
