

var date = new Date();
console.log(date);
var day = date.getDay();
console.log(day);

if (day == 1) {
    document.getElementById('barMon').style.backgroundColor = "#76b5bc";
    document.getElementById('valueMon').innerHTML = "$17.45";
    document.getElementById('valueMon').style.backgroundColor = "#392411";
} else if (day == 2) {
    document.getElementById('barTue').style.backgroundColor = "#76b5bc";
    document.getElementById('valueTue').innerHTML = "$34.91";
    document.getElementById('valueTue').style.backgroundColor = "#392411";
} else if (day == 3) {
    document.getElementById('barWed').style.backgroundColor = "#76b5bc";
    document.getElementById('valueWed').innerHTML = "$52.36";
    document.getElementById('valueWed').style.backgroundColor = "#392411";
} else if (day == 4) {
    document.getElementById('barThu').style.backgroundColor = "#76b5bc";
    document.getElementById('valueThu').innerHTML = "$34.91";
    document.getElementById('valueThu').style.backgroundColor = "#392411";
} else if (day == 5) {
    document.getElementById('barFri').style.backgroundColor = '#76b5bc';
    document.getElementById('valueFri').innerHTML = '$34.91';
    document.getElementById('valueFri').style.backgroundColor = '#392411';
} else if (day == 6) {
    document.getElementById('barSat').style.backgroundColor = "#76b5bc";
    document.getElementById('valueSat').innerHTML = "$34.91";
    document.getElementById('valueSat').style.backgroundColor = "#392411";
} else {
    document.getElementById('barSun').style.backgroundColor = "#76b5bc";
    document.getElementById('valueSun').innerHTML = "$34.91";
    document.getElementById('valueSun').style.backgroundColor = "#392411";
}




function IncMon() {
    document.getElementById('barMon').style.opacity = "1";
    document.getElementById('valueMon').innerHTML = "";
    document.getElementById('valueMon').style.backgroundColor = "";
}

function IncTue() {
    document.getElementById('barTue').style.opacity = "1";
    document.getElementById('valueTue').innerHTML = "";
    document.getElementById('valueTue').style.backgroundColor = "";
}

function IncWed() {
    document.getElementById('barWed').style.opacity = "1";
    document.getElementById('valueWed').innerHTML = "";
    document.getElementById('valueWed').style.backgroundColor = "";
}

function IncThu() {
    document.getElementById('barThu').style.opacity = "1";
    document.getElementById('valueThu').innerHTML = "";
    document.getElementById('valueThu').style.backgroundColor = "";
}

function IncFri() {
    document.getElementById('barFri').style.opacity = "1";
    document.getElementById('valueFri').innerHTML = "";
    document.getElementById('valueFri').style.backgroundColor = "";
}

function IncSat() {
    document.getElementById('barSat').style.opacity = "1";
    document.getElementById('valueSat').innerHTML = "";
    document.getElementById('valueSat').style.backgroundColor = "";
}

function IncSun() {
    document.getElementById('barSun').style.opacity = "1";
    document.getElementById('valueSun').innerHTML = "";
    document.getElementById('valueSun').style.backgroundColor = "";
}


function moveMon() {
    document.getElementById('barMon').style.opacity = "0.7";
    document.getElementById('valueMon').innerHTML = "$17.45";
    document.getElementById('valueMon').style.backgroundColor = "#392411";

    IncTue();
    IncWed();
    IncThu();
    IncFri();
    IncSat();
    IncSun();
}

function moveTue() {
    document.getElementById('barTue').style.opacity = "0.7";
    document.getElementById('valueTue').innerHTML = "$34.91";
    document.getElementById('valueTue').style.backgroundColor = "#392411";

    IncMon();
    IncWed();
    IncThu();
    IncFri();
    IncSat();
    IncSun();
}

function moveWed() {
    document.getElementById('barWed').style.opacity = "0.7";
    document.getElementById('valueWed').innerHTML = "$52.36";
    document.getElementById('valueWed').style.backgroundColor = "#392411";

    IncTue();
    IncMon();
    IncThu();
    IncFri();
    IncSat();
    IncSun();
}

function moveThu() {
    document.getElementById('barThu').style.opacity = "0.7";
    document.getElementById('valueThu').innerHTML = "$34.91";
    document.getElementById('valueThu').style.backgroundColor = "#392411";

    IncTue();
    IncWed();
    IncMon();
    IncFri();
    IncSat();
    IncSun();
}

function moveFri() {
    document.getElementById('barFri').style.opacity = "0.7";
    document.getElementById('valueFri').innerHTML = "$34.91";
    document.getElementById('valueFri').style.backgroundColor = "#392411";

    IncTue();
    IncWed();
    IncThu();
    IncMon();
    IncSat();
    IncSun();
}

function moveSat() {
    document.getElementById('barSat').style.opacity = "0.7";
    document.getElementById('valueSat').innerHTML = "$34.91";
    document.getElementById('valueSat').style.backgroundColor = "#392411";

    IncTue();
    IncWed();
    IncThu();
    IncFri();
    IncMon();
    IncSun();
}

function moveSun() {
    document.getElementById('barSun').style.opacity = "0.7";
    document.getElementById('valueSun').innerHTML = "$34.91";
    document.getElementById('valueSun').style.backgroundColor = "#392411";

    IncTue();
    IncWed();
    IncThu();
    IncFri();
    IncSat();
    IncMon();
}


// function reset() {

//     IncMon();
//     IncTue();
//     IncWed();
//     IncThu();
//     IncFri();
//     IncSat();
//     IncSun();

// }