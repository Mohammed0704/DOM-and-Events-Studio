// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    const takeoff = document.getElementById("takeoff");
    const land = document.getElementById("landing");

    //takeoff button
    takeoff.addEventListener("click", function () {
        console.log("I clicked the button!");
       let windowConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.")
       if (windowConfirm) {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight."
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        let height = document.getElementById("spaceShuttleHeight");
        let numHeight = parseInt(height.innerHTML)
        height.innerHTML = numHeight + 10000;
       }
    });

    //landing button
    land.addEventListener("click", function() {
        console.log("Land button works");
        window.alert("The shuttle is landing. Landing gear engaged.")
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed."
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        let height = document.getElementById("spaceShuttleHeight");
        height.innerHTML = 0;
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
