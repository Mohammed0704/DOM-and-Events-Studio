// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {
    // Function to handle the "Take off" button click event
    function takeOff() {
      var confirmResult = window.confirm("Confirm that the shuttle is ready for takeoff.");
      
      if (confirmResult) {
        // Change flight status to "Shuttle in flight"
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
        
        // Change background color of shuttle flight screen
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        
        // Increase shuttle height by 10,000 miles
        var shuttleHeightElement = document.getElementById("spaceShuttleHeight");
        var currentHeight = Number(shuttleHeightElement.innerHTML);
        shuttleHeightElement.innerHTML = currentHeight + 10000;
      }
    }
    
    // Attach click event handler to the "Take off" button
    document.getElementById("takeoff").addEventListener("click", takeOff);
  });