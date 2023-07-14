// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    const takeoff = document.getElementById("takeoff");

    takeoff.addEventListener("click", function () {
        console.log("I clicked the button!");
       let windowConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.")
       if (windowConfirm) {
        document.getElementById("flightStatus") = "Shuttle in flight."
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        let height = document.getElementById("spaceShuttleHeight");
        num = height + 10000;
        height = num;
       }
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
