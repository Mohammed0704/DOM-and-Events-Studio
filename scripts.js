// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    const takeoff = document.getElementById("takeoff");

    takeoff.addEventListener("click", function () {
        console.log("I clicked the button!");
        window.confirm("Confirm that the shuttle is ready for takeoff.")
    });
});



/*
let takeoff = getElementById("takeoff");

takeoff.addEventListener("click", function () {
    let windowConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (windowConfirm){
        document.getElementById("flightStatus") = "Shuttle in flight";

    }
});

*/
