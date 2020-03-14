$(".btn-primary").on("click", function() {
  event.preventDefault();
  $(".content4").empty();
  var input = $("#date")
    .val()
    .trim();
  console.log(input);

  var day = moment(input).format("DD");
  console.log("Day: " + day);
  var month = moment(input).format("MM");
  console.log("Month: " + month);
  var year = moment(input).format("YYYY");
  console.log("Year: " + year);
  var sign = "";
  var lifePath;
  var LPdisplay;
  var signDisplay = "";
  var image;
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<ASTROLOGICAL SIGN>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function astro() {
    if ((month == 1 && day >= 20 && day <= 31) || (month == 2 && day <= 18)) {
      sign = "Aquarius";
    }
    if ((month == 2 && day >= 19 && day <= 29) || (month == 3 && day <= 20)) {
      sign = "Pisces";
    }
    if ((month == 3 && day >= 21 && day <= 31) || (month == 4 && day <= 19)) {
      sign = "Aries";
    }
    if ((month == 4 && day >= 20 && day <= 30) || (month == 5 && day <= 20)) {
      sign = "Taurus";
    }
    if ((month == 5 && day >= 21 && day <= 31) || (month == 6 && day <= 21)) {
      sign = "Gemini";
    }

    if ((month == 6 && day >= 22 && day <= 30) || (month == 7 && day <= 22)) {
      sign = "Cancer";
    }
    if ((month == 7 && day >= 23 && day <= 31) || (month == 8 && day <= 22)) {
      sign = "Leo";
    }
    if ((month == 8 && day >= 23 && day <= 31) || (month == 9 && day <= 22)) {
      sign = "Virgo";
    }
    if ((month == 9 && day >= 23 && day <= 30) || (month == 10 && day <= 22)) {
      sign = "Libra";
    }
    if ((month == 10 && day >= 23 && day <= 31) || (month == 11 && day <= 21)) {
      sign = "Scorpio";
    }
    if ((month == 11 && day >= 22 && day <= 30) || (month == 12 && day <= 21)) {
      sign = "Sagittarius";
    }
    if ((month == 12 && day >= 22 && day <= 31) || (month == 1 && day <= 19)) {
      sign = "Capricorn";
    }
  }
  astro();
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<ASTROLOGICAL SIGN>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>-----NUMEROLOGY ------->>>>>>>>>>>>>>>>>
  function numero() {
    var yearSUM = 0;
    var daySum = 0;
    var monthSUM = 0;
    var yearReduced = 0;
    var dayReduced = 0;
    var monthReduced = 0;

    // reduces the year input value to a single digit, according to Numerology rules
    for (let i = 0; i < year.length; i++) {
      yearSUM += parseInt(year[i]);
      let year2 = yearSUM.toString();
      if (year2.length > 1) {
        yearReduced = parseInt(year2[0]) + parseInt(year2[1]);
        if (yearReduced > 9) {
          let year2 = yearReduced.toString();
          yearReduced = parseInt(year2[0]) + parseInt(year2[1]);
        }
      } else {
        yearReduced = year2;
      }
    }
    //reduces the month input value to a single digit, accordin to Numerology rules
    for (let i = 0; i < month.length; i++) {
      monthSUM += parseInt(month[i]);
      let month2 = monthSUM.toString();
      monthReduced += month2[i];
      if (month2.length > 1) {
        monthReduced = parseInt(month2[0]) + parseInt(month2[1]);
        monthReduced = parseInt(monthReduced);
      } else {
        monthReduced = month2;
      }
    }

    // reduces the day input value to a single digit, etc.

    for (let i = 0; i < day.length; i++) {
      daySum += parseInt(day[i]);
      let day2 = daySum.toString();
      if (daySum > 9) {
        dayReduced = parseInt(day2[0]) + parseInt(day2[1]);
      } else {
        dayReduced = daySum;
      }
    }
    // getting integers so we can operate on values in next step
    monthReduced = parseInt(monthReduced);
    dayReduced = parseInt(dayReduced);
    yearReduced = parseInt(yearReduced);

    // calculating lifepath number
    let dateReduced = monthReduced + dayReduced + yearReduced;
    if (
      // if the date is double digit but not a master number, we must reduce again
      dateReduced > 9 &&
      dateReduced != 11 &&
      dateReduced != 22 &&
      dateReduced != 33
    ) {
      let life = dateReduced.toString();
      lifePath = parseInt(life[0]) + parseInt(life[1]);
    } else {
      lifePath = dateReduced;
    }
    //now use lifepath number below to correspond to a set of data in an array we can make from a website to populate DOM however.
    console.log("Life Path #: " + lifePath);
    if (lifePath == 1) {
      LPdisplay = lifePathInfo.one;
    }
    if (lifePath == 2) {
      LPdisplay = lifePathInfo.two;
    }
    if (lifePath == 3) {
      LPdisplay = lifePathInfo.three;
    }
    if (lifePath == 4) {
      LPdisplay = lifePathInfo.four;
    }
    if (lifePath == 5) {
      LPdisplay = lifePathInfo.five;
    }
    if (lifePath == 6) {
      LPdisplay = lifePathInfo.six;
    }
    if (lifePath == 7) {
      LPdisplay = lifePathInfo.seven;
    }
    if (lifePath == 8) {
      LPdisplay = lifePathInfo.eight;
    }
    if (lifePath == 9) {
      LPdisplay = lifePathInfo.nine;
    }
    if (lifePath == 11) {
      LPdisplay = lifePathInfo.eleven;
    }
    if (lifePath == 22) {
      LPdisplay = lifePathInfo.twentytwo;
    }
    if (lifePath == 33) {
      LPdisplay = lifePathInfo.thirtythree;
    }
    if (sign == "Aquarius") {
      signDisplay = signInfo.aquarius;
      image = signInfo.aquariusPic;
    }
    if (sign == "Pisces") {
      signDisplay = signInfo.pisces;
      image = signInfo.piscesPic;
    }
    if (sign == "Aries") {
      signDisplay = signInfo.aries;
      image = signInfo.ariesPic;
    }
    if (sign == "Taurus") {
      signDisplay = signInfo.taurus;
      image = signInfo.taurusPic;
    }
    if (sign == "Gemini") {
      signDisplay = signInfo.gemini;
      image = signInfo.geminiPic;
    }
    if (sign == "Cancer") {
      signDisplay = signInfo.cancer;
      image = signInfo.cancerPic;
    }
    if (sign == "Leo") {
      signDisplay = signInfo.leo;
      image = signInfo.leoPic;
    }
    if (sign == "Virgo") {
      signDisplay = signInfo.virgo;
      image = signInfo.virgoPic;
    }
    if (sign == "Libra") {
      signDisplay = signInfo.libra;
      image = signInfo.libraPic;
    }
    if (sign == "Scorpio") {
      signDisplay = signInfo.scorpio;
      image = signInfo.scorpioPic;
    }
    if (sign == "Sagittarius") {
      signDisplay = signInfo.sagittarius;
      image = signInfo.sagittariusPic;
    }
    if (sign == "Capricorn") {
      signDisplay = signInfo.capricorn;
      image = signInfo.capricornPic;
    }

    $(".content4").append(
      "<li> You're Life Path Number is : <strong>" +
        lifePath +
        "</strong>    " +
        "</li>" +
        "<li>" +
        LPdisplay +
        "</li><br><img  class ='img img-fluid' src='" +
        image +
        "' <br><li> You're Zodiac Sign is: " +
        sign +
        "</li>" +
        "<li>" +
        signDisplay +
        "</li>"
    );
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>-----NUMEROLOGY ------->>>>>>>>>>>>>>>>>
  }
  numero();
  console.log(sign);
});
