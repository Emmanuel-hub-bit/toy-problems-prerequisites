// Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

//    > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

function checkSpeed() {
    let speed = parseInt(prompt("Enter the car's speed:"));
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (isNaN(speed)) {
        console.log("Invalid input. Please enter a number.");
    } else if (speed < speedLimit) {
        alert(("Ok"));

    } else {
        const calc = (speed - speedLimit) / kmPerPoint
        let points = Math.floor( calc );
        if (points > 12) {
            alert(("License suspended"));
        } else {
            alert(("Points: " + points));
        }
    }
}

checkSpeed();

