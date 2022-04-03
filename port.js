//window.addEventListener("DOMContentLoaded", showTime());

//DOMELEMENTS
const time = document.getElementById("time"),
user = document.getElementById("User");

//QuerySelector
const plan = document.querySelector(".plan");
//const  focus = document.querySelector(".focus-container");



//Show Time function
function showTime() {
    let today = new Date();

    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    //Set AM and PM
    const amPM = hour >= 12 ? "PM" : "AM";

    //Output Time
    time.innerHTML = `${hour}:${addZero(minute)}<small>.${addZero(second)}|${amPM}</small>`;
    setTimeout(showTime, 1000);

    //Add Zero
    function addZero(n){
        return (parseInt(n, 10) < 10 ? '0' : '')+n;
    }

  
}

//Set Greeting
function setBg() {
    let today = new Date(),
    hour = today.getHours();

    //morning
    if(hour < 12){
        document.body.style.backgroundImage = `url(https://source.unsplash.com/random)`; 
        user.textContent = "Good Morning Nii"
    } else if(hour < 18) {
        //Afternoon
        document.body.style.backgroundImage =  `url(https://source.unsplash.com/random)`;
        user.textContent = "Good Afternoon Nii";
    } else {
        //Evening
        document.body.style.backgroundImage = `url(https://source.unsplash.com/random)`;
        user.textContent = "Goodnight Nii";
    }
}

/*function setFocus(event) {
    if(event.type === "keypress") {
        if(event.keycode == 13) {
            localStorage.setItem("plan", event.target.innerText);
        }
    } else {
        localStorage.setItem("plan", event.target.innerText)
    }
}

function getFocus(plan) {
    if(localStorage.getItem("plan") === null) {
        plan.textContent = "Enter Focus";
    } else {
        plan.textContent = localStorage.getItem("plan");
    }
}*/

function getFocus(event) {
    if (event.key == "Enter") {
        document.querySelector(".focus-container").innerHTML = `<h6>TODAY:</h6><h1>${plan.value}</h1>`;
    }
}



plan.addEventListener("keypress", getFocus)


showTime();
setBg();
getFocus();
