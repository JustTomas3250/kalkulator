var d = new Date();
var segkod = 0;

function clock(){
    d = new Date();
    let day = d.getDay();
    switch (day){
        case 1: day = "Monday"; break;
        case 2: day = "Tuesday"; break;
        case 3: day = "Wednesday"; break;
        case 4: day = "Thursday"; break;
        case 5: day = "Friday"; break;
        case 6: day = "Saturday"; break;
        case 0: day = "Sunday"; break;
    }
    let dayn = d.getDate();
    let month = d.getMonth() + 1;
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    if(hour < 10)
        hour = "0" + hour;
    if(minute < 10)
        minute = "0" + minute;
    if(second < 10)
        second = "0" + second;
    document.getElementById("clock").innerText = day + "\n" + dayn + "." + month + "." + "\n" + hour + ":" + minute + ":" + second;
    setTimeout(clock, 1);
}

function chcolor(){
    let rng = Math.floor(Math.random() * 16777215 + 1);
    rng = rng.toString(16);
    do{
        if(rng.length < 6)
            rng = 0 + rng;
    }while(rng.length < 6)
    document.body.style.backgroundColor = "#" + rng;
    console.log("random barva: #" + rng);
}

function seg1(){
    if(segkod % 10 == 0 ){
        segkod += 1;
        document.getElementById("seg1").src = 'images/segment_plny.png';
    }
    else {
        segkod -= 1;
        document.getElementById("seg1").src = 'images/segment.png';
    } 
}
function seg2(){
    if((segkod - segkod % 10) % 100 == 0){
        segkod += 10;
        document.getElementById("seg2").src = 'images/segment_plny_ver.png';
    }
    else {
        segkod -= 10;
        document.getElementById("seg2").src = 'images/segment_ver.png';
    } 
}
function seg3(){
    if((segkod - segkod % 100) % 1000 == 0){
        segkod += 100;
        document.getElementById("seg3").src = 'images/segment_plny_ver.png';
    }
    else {
        segkod -= 100;
        document.getElementById("seg3").src = 'images/segment_ver.png';
    } 
}
function seg4(){
    if((segkod - segkod % 1000) % 10000 == 0){
        segkod += 1000;
        document.getElementById("seg4").src = 'images/segment_plny.png';
    }
    else {
        segkod -= 1000;
        document.getElementById("seg4").src = 'images/segment.png';
    } 
}
function seg5(){
    if((segkod - segkod % 10000) % 100000 == 0){
        segkod += 10000;
        document.getElementById("seg5").src = 'images/segment_plny_ver.png';
    }
    else {
        segkod -= 10000;
        document.getElementById("seg5").src = 'images/segment_ver.png';
    } 
}
function seg6(){
    if((segkod - segkod % 100000) % 1000000 == 0){
        segkod += 100000;
        document.getElementById("seg6").src = 'images/segment_plny_ver.png';
    }
    else {
        segkod -= 100000;
        document.getElementById("seg6").src = 'images/segment_ver.png';
    }
}
function seg7(){
    if((segkod - segkod % 1000000) % 10000000 == 0){
        segkod += 1000000;
        document.getElementById("seg7").src = 'images/segment_plny.png';
    }
    else {
        segkod -= 1000000;
        document.getElementById("seg7").src = 'images/segment.png';
    } 
}