//DOM el
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const date = document.getElementById('datePre');



//month,date String

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//time 

function showTime() {
    let years = new Date();

    hours = years.getHours();

    minutes = years.getMinutes();

    seconds = years.getSeconds();


    //set AM or PM 

    const amp = hours >= 12 ? 'PM' : 'AM';

    //hour format

    hours = hours % 12 || 12;

    time.innerHTML = `${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)} ${amp}`;

}
//format Time
function formatTime(times) {
    return times < 10 ? (`0${times}`) : times;
}

//datePresents

function datePre() {
    let years = new Date();

    date.innerHTML = `${dayName[years.getDay()]}, ${monthNames[years.getMonth()]} ${years.getDate()} ${years.getFullYear()}`


}




function changeBg() {
    let years = new Date();
    hours = years.getHours();
    console.log(hours);
    if (hours < 12) {
        document.body.style.backgroundImage = "url('img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if (hours < 18) {
        document.body.style.backgroundImage = "url('img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        document.body.style.backgroundImage = "url('img/evening.jpg')";
        greeting.textContent = 'Good Evening';
    }
}











changeBg();

datePre();

showTime();

setInterval(showTime, 1000);