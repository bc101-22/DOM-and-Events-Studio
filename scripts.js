// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", (event) => {

    const takeOff = document.getElementById("takeoff");

    let rocketPosX = 0;
    let rocketPosY = 0;
    let altitude = Number(spaceShuttleHeight.innerHTML);

    let rocket = document.getElementById("rocket");
    let shuttleBackground = document.getElementById("shuttleBackground");

    takeOff.addEventListener("click", function () {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (response) { //ready to take off
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";

            document.getElementById("shuttleBackground").style.backgroundColor = "blue";

            let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
            console.log(typeof (spaceShuttleHeight.innerHTML));
            altitude += 10000;
            spaceShuttleHeight.innerHTML = String(altitude);
        }
    });

    const land = document.getElementById("landing");
    land.addEventListener("click", function () {
        let response = window.confirm("The shuttle is landing. Landing gear engaged.");
        if (response) {
            document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
            resetRocket();
        }

    });

    const abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function () {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
            resetRocket();
        }
    });



    document.addEventListener('click', function (event) {
        console.log(event.target.id);

        let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));
        console.log(typeof (bkgWidth))
        console.log(typeof (rocketPosX))

        if (event.target.id == 'left' && rocketPosX >= -(bkgWidth / 2 - 40)) {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';
            console.log("LEFT");
        }

        if (event.target.id == 'right' && rocketPosX < (bkgWidth / 2 - 40)) {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }

        if (event.target.id == "up" && altitude < 250000) {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }

        if (event.target.id == "down" && altitude > 0) {
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
    })

    function resetRocket() {
        rocketPosY = 0;
        rocketPosX = 0;
        rocket.style.marginBottom = rocketPosY + 'px';
    }
});