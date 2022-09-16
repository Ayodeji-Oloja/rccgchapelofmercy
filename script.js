/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "72%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


var countdown = () => {
  var countDate = new Date("Dec 5, 2022 18:00:00").getTime();

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDate - now;

  var seconds = 1000;
  var minutes = seconds * 60;
  var hours = minutes * 60;
  var days = hours * 24;

  // Time calculations for days, hours, minutes and seconds
  var textday = Math.floor(distance / days);
  var texthour = Math.floor((distance % days) / hours);
  var textminute = Math.floor((distance % hours) / minutes);
  var textsecond = Math.floor((distance % minutes) / seconds);

  // Display the result in the element with id="demo"
  document.querySelector(".days").innerText = textday;
  document.querySelector(".hours").innerText = texthour;
  document.querySelector(".minutes").innerText = textminute;
  document.querySelector(".seconds").innerText = textsecond;
};

setInterval(countdown, 1000);
    // If the count down is finished, write some text

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".days", ".hours", ".minutes",".seconds").innerText = "EXPIRED";
  }
