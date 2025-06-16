function daysBetween(d1, d2) {
  const start = new Date(d1);
  const end = new Date(d2);
  const msPerDay = 24 * 60 * 60 * 1000;
  const diff = Math.abs(end - start);
  const rounded = Math.round(diff / msPerDay);
  return rounded;
}

function calculate() {
  const a = document.getElementById("startDate").value;
  const b = document.getElementById("endDate").value;
  const days = daysBetween(a, b);

  if (!a || !b) {
    document.getElementById("result").innerHTML = "Please select both dates.";
    return;
  }

  if (isNaN(days)) {
    document.getElementById("result").innerHTML = "Invalid date format.";
    return;
  }

  document.getElementById("result").innerHTML = "There are " + days + " days.";
}
