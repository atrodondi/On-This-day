event.preventDefault();
var day = $("#day")
  .val()
  .trim();
var month = $("#month")
  .val()
  .trim();
var year = $("#year")
  .val()
  .trim();
console.log(day);
console.log(month);
console.log(year);

if (
  day > 31 ||
  (month == 2 && day > 29) ||
  (month == 4 && day > 30) ||
  (month == 6 && day > 30) ||
  (month == 9 && day > 30) ||
  (month == 11 && day > 30)
) {
  alert("invalid date");
}
if ((month == 1 && day >= 20 && day <= 31) || (month == 2 && day <= 18)) {
  console.log("Aquarius");
}
if ((month == 2 && day >= 19 && day <= 29) || (month == 3 && day <= 20)) {
  console.log("Pisces");
}
if ((month == 3 && day >= 21 && day <= 31) || (month == 4 && day <= 19)) {
  console.log("aries");
}
if ((month == 4 && day >= 20 && day <= 30) || (month == 5 && day <= 20)) {
  console.log("Taurus");
}
if ((month == 5 && day >= 21 && day <= 31) || (month == 6 && day <= 21)) {
  console.log("gemini");
}

if ((month == 6 && day >= 22 && day <= 30) || (month == 7 && day <= 22)) {
  console.log("cancer");
}
if ((month == 7 && day >= 23 && day <= 31) || (month == 8 && day <= 22)) {
  console.log("leo");
}
if ((month == 8 && day >= 23 && day <= 31) || (month == 9 && day <= 22)) {
  console.log("virgo");
}
if ((month == 9 && day >= 23 && day <= 30) || (month == 10 && day <= 22)) {
  console.log("libra");
}
if ((month == 10 && day >= 23 && day <= 31) || (month == 11 && day <= 21)) {
  console.log("scorpio");
}
if ((month == 11 && day >= 22 && day <= 30) || (month == 12 && day <= 21)) {
  console.log("Sagittarius");
}
if ((month == 12 && day >= 22 && day <= 31) || (month == 1 && day <= 19)) {
  console.log("capricorn");
}
});