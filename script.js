// end date which is 31 of dec, and the current one which is the 31 one of may and then we subtract

const newYear = '1 Jan 2023';

function countDown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    // seconds 
    const seconds = Math.floor((newYearDate - currentDate) / 1000);
    // days
    const days = Math.floor(seconds / 3600 /24);
    // hours
    const hour = days * 24
    // minutes
    const mins = hour * 60;

    // get the element from html and replace it with actual data 

    // days
    let dayhtml = document.getElementById("days").innerHTML = days;

    // hours 
    let hourhtml =  document.getElementById("hours").innerHTML = hour;

    // mins
    let minshtml = document.getElementById("mins").innerHTML = mins;

    // seconds 
    let sechtml = document.getElementById("seconds").innerHTML = seconds;
    console.log(dayhtml);

}
countDown();
setInterval(countDown, 1000);

