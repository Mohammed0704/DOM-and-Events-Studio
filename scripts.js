// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeoff = getElementById("takeoff");
takeoff.addEventListener("click", function () {
    let windowConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (windowConfirm){
        document.getElementById("flightStatus") = "Shuttle in flight"
    }
});
