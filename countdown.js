var dayss = document.querySelector(".days-count")
var hourss = document.querySelector(".hours-count")
var minutess = document.querySelector(".minutes-count")
var secondss = document.querySelector(".seconds-count")
function myTimer() {
    var endTime = new Date('June 20,2022')
    var today = new Date()
    var gap = endTime.getTime() - today.getTime()
    const seconds = 1000; // in milliseconds
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    dayss.innerText = Math.floor(gap / (1000 * 60 * 60 * 24));
    hourss.innerText = Math.floor((gap % days) / hours);
    minutess.innerText = Math.floor((gap % hours) / minutes);
    secondss.innerText = Math.floor((gap % minutes) / seconds);
}
myTimer()
setInterval(myTimer, 1000);