$(document).ready(function () {

    console.log("hello world")

    var currentClock = document.getElementById("currentDay");
    var timeEl = document.getElementById("time");
    var submitBtn = document.getElementById("submit-btn");
    var textEl = document.getElementById("#textBox")

    console.log(currentClock);
    console.log(timeEl);
    console.log(submitBtn);
    console.log(textEl);

    var timesArray = [
        "9AM",
        "10AM",
        "11AM",
        "12PM",
        "1PM",
        "2PM",
        "3PM",
        "4PM",
    ];


    var date = new Date();

    //Set variables for the date/time 
    // use get. method to have jQuery pull the local time/date

    var month = date.getMonth();
    var year = date.getFullYear();
    var d = date.getDate();
    var h = date.getHours(); 
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = " AM";

    function showDate() {
        // set parameters to allow for a 12 hr clock and not a 24hr one

        if (h == 0) {
            h = 12;
        }
        
        if (h > 12) {
            h = h - 12; 
            session = " PM";
        }
        var realTime = h + ":" + m + ":" + s + session;
        var currrentDate = month + "/" + d + "/" + year;

        var interval = setInterval(showDate, 1000);

        $("#currentDay").text(currrentDate);
        $("#currentTime").text(realTime);

    }
    showDate(); 
    //Here we create an event listener for each submit button.
    // The event listener should be able to record the user's input and store it into the local storage. 
    $(".submit-btn").on("click", function (event) {
        event.preventDefault();
        // console.log("you clicked me");
        var text = $(this).siblings(".form-control").val();
        var timeblock = $(this).parent().attr("id")
        localStorage.setItem(timeblock, text);
    });
 
    // This can be made into a for loop. Confused on how to though. 
    // Here are are assigning each time-block ID with the value from our local storage. 
    // Whatever the user inputed prior was saved and we can now pull it into the html, which is the form-control area of each individual class 

    $("#9AM .form-control").val(localStorage.getItem("9AM"));
    $("#10AM .form-control").val(localStorage.getItem("10AM"));
    $("#11AM .form-control").val(localStorage.getItem("11AM"));
    $("#12PM .form-control").val(localStorage.getItem("12PM"));
    $("#1PM .form-control").val(localStorage.getItem("1PM"));
    $("#2PM .form-control").val(localStorage.getItem("2PM"));
    $("#3PM .form-control").val(localStorage.getItem("3PM"));
    $("#4PM .form-control").val(localStorage.getItem("4PM"));
    $("#5PM .form-control").val(localStorage.getItem("5PM"));




});