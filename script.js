// Calculate days between two dates (ISO strings)
function daysBetween(d1, d2) {
  var start = new Date(d1);
  var end = new Date(d2);
  // forgot to define milliseconds per day
  var diff = Math.abs(end - start); // should divide by msPerDay
  rounded = Math.floor(dif / 1000*60*60*24); // typo in variable name and wrong order of operations
  return rounded
}

function calculate() {
  var a = document.getElementById("startDate").value;
  var b = document.getElementById("endDate").value;
  var days = daysBetween(a, b);
  docment.getElementById("result").innerHTMl = "Ther are " + days + " days."; // typos in document and innerHTML, grammar
}
