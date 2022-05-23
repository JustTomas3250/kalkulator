var segkod = 0;
var cislice;
var priklad = "";
var znak = []; //2+, 3-, 4*, 5/, 6=
var cislo = [];
var cporadi = 0;
var predchozi = 0; //0 nic, 1 cislo, 2+-*/, 3^2, 4^2, 5=, 6., 7-, 8-, 9√
var vysledek;
var d = new Date();
var back = 0;
var mocnenec = 0;
var historie = ["", "", "", "", ""];
var light = true;
var segld = 0;
var des = 0.1;
var odmocnina1 = 13211;

console.log("Verze z 19. 5. 2022 21:47");

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
const log = document.body;

document.addEventListener('keypress', logKey);

function logKey(e) {
    console.log(`${e.code}`);
    switch(`${e.code}`){
        case "Numpad1": segkod = 10010;
                        enter();
                        break;
        case "Numpad2": segkod = 1011101;
                        enter();
                        break;
        case "Numpad3": segkod = 1101101;
                        enter();
                        break;
        case "Numpad4": segkod = 101110;
                        enter();
                        break;
        case "Numpad5": segkod = 1101011;
                        enter();
                        break;
        case "Numpad6": segkod = 1111011;
                        enter();
                        break;
        case "Numpad7": segkod = 100101;
                        enter();
                        break;
        case "Numpad8": segkod = 1111111;
                        enter();
                        break;
        case "Numpad9": segkod = 101111;
                        enter();
                        break;
        case "Numpad0": segkod = 1110111;
                        enter();
                        break;
    }
}
function enter(){
    if(segkod != 0){
    if(predchozi != 3){
        switch (segkod){
        case 10010: cislice = 1; break;
            case 100100: cislice = 1; break;
        case 1011101: cislice = 2; break;
        case 1101101: cislice = 3; break;
        case 101110: cislice = 4; break;
        case 1101011: cislice = 5; break;
        case 1111011: cislice = 6; break;
            case 1111010: cislice = 6; break;
        case 100101: cislice = 7; break;
            case 100111: cislice = 7; break;
        case 1111111: cislice = 8; break;
        case 101111: cislice = 9; break;
            case 1101111: cislice = 9; break;
        case 1110111: cislice = 0; break;
        default: cislice = "ERROR"; 
                znak = [];
                cislo = [0];
                cporadi = 0;
                break;
        }

        document.getElementById("seg1").src = 'images/segment.png';
        document.getElementById("seg2").src = 'images/segment_ver.png';
        document.getElementById("seg3").src = 'images/segment_ver.png';
        document.getElementById("seg4").src = 'images/segment.png';
        document.getElementById("seg5").src = 'images/segment_ver.png';
        document.getElementById("seg6").src = 'images/segment_ver.png';
        document.getElementById("seg7").src = 'images/segment.png';

            if(cislice == "ERROR"){
                priklad = cislice;
            }
            else{
                if(priklad == "ERROR")
                    priklad = "" + cislice;
                else { priklad += cislice;
                }
            } 

        console.log("cislice: " + cislice)
        if(odmocnina1 == cporadi - 1){
            console.log("odmocnění")
            cislo[cporadi - 1] = Math.sqrt(cislo[cporadi - 1]);
            odmocnina1 = 321321;
        }
        if(predchozi != 4){
            if(priklad != "ERROR"){
                    if(predchozi == 0){
                        cislo.push(0);
                        cislo[cporadi] = cislice;
                    }
                    else if(predchozi == 1 || predchozi == 5 || predchozi == 9)
                        cislo[cporadi] = (cislo[cporadi] * 10) + cislice;
                    else if(predchozi == 6){
                        cislo[cporadi] = cislo[cporadi] + (cislice * des);
                        des /= 10;
                    }
                    else if(predchozi == 7){
                        if(priklad != "-" + cislice && znak.length - 1 == cislo.length || priklad != "-" + cislice && znak.length == cislo.length){
                            cporadi++;
                            cislo.push(0);
                        }
                        des = 0.1;
                        cislo[cporadi] = cislice * -1;
                    }
                    else if(predchozi == 8)
                        cislo[cporadi] = (cislo[cporadi] * 10) - cislice;
                    else{
                        cporadi++;
                        cislo.push(0);
                        cislo[cporadi] += cislice;
                        des = 0.1;
                    }
            }
            console.log("cislo: " + cislo)
        }
        else{
            if(back == 0)
                mocnenec = cislo[cporadi];
            console.log("back: " + back)
            if(back != 0){
                for(let i = back; i > 1; i--)
                    cislo[cporadi] /= mocnenec;
                    console.log("--cislo: " + cislo[cporadi] + ", a: " + mocnenec)
            }
            if(cislice == 0)
                cislo[cporadi] = 1;
            else {for(let i = 1; i < cislice; i++)
                    cislo[cporadi] *= mocnenec;}
            console.log("n2: " + cislo[cporadi])
            back = 0;
        }
        document.getElementById("display").innerText = priklad;
        segkod = 0;
        if(cislice == "ERROR")
            predchozi = 0;
        else if(cislice == 0 && priklad == "") 
                predchozi = 0; 
        else if(predchozi == 4)
                predchozi = 3;
        else if(predchozi == 6)
                predchozi = 6; 
        else if(predchozi == 7)
                predchozi = 8;
        else if(predchozi == 8)
                predchozi = 8;
        else if(predchozi == 9)
                predchozi = 9;
        else predchozi = 1;
        console.log("predchozi: " + predchozi)
    }}
}
function plus(){
    if(predchozi == 1 || predchozi == 3 || predchozi == 5 || predchozi == 6 || predchozi == 8 || predchozi == 9){
        if(predchozi == 9)
            cislo[cporadi] = Math.sqrt(cislo[cporadi]);
        if(predchozi == 5){
            cislo[cporadi] = vysledek;
            priklad += vysledek;
        }
        znak.push(2);
        predchozi = 2;
        priklad += "+";
        document.getElementById("display").innerText = priklad;
        console.log("znak: " + znak)
    }
}
function minus(){
    if(predchozi == 1 || predchozi == 3 || predchozi == 5 || predchozi == 6 || predchozi == 8 || predchozi == 9){
        if(predchozi == 5){
            cislo[cporadi] = vysledek;
            priklad += vysledek;
        }
        znak.push(3);
        predchozi = 2;
        priklad += "-";
        document.getElementById("display").innerText = priklad;
        console.log("znak: " + znak)
    }
}
function krat(){
    if(predchozi == 1 || predchozi == 3 || predchozi == 5 || predchozi == 6 || predchozi == 8 || predchozi == 9){
        if(predchozi == 5){
            cislo[cporadi] = vysledek;
            priklad += vysledek;
        }
        znak.push(4);
        predchozi = 2;
        priklad += "*";
        document.getElementById("display").innerText = priklad;
        console.log("znak: " + znak);
    }
}
function deleno(){
    if(predchozi == 1 || predchozi == 3 || predchozi == 5 || predchozi == 6 || predchozi == 8 || predchozi == 9){
        if(predchozi == 5){
            cislo[cporadi] = vysledek;
            priklad += vysledek;
        }
        znak.push(5);
        predchozi = 2;
        priklad += "/";
        document.getElementById("display").innerText = priklad;
        console.log("znak: " + znak);
    }
}
function sqrt(){
    if(predchozi == 1 || predchozi == 6 || predchozi == 8){
        predchozi = 4;
        priklad += "^";
        document.getElementById("display").innerText = priklad;
        console.log("znak: " + znak);
    }
}
function dot(){
    if(predchozi != 6 && priklad != "ERROR"){
        console.log(cislo[cporadi])
        if(znak.length == cislo.length || cislo[cporadi] == 0 && priklad == "")
            priklad += "0.";
        else priklad += ".";
        predchozi = 6;
        document.getElementById("display").innerText = priklad;
    }
}
function kratminus(){
    if(predchozi == 0 && priklad != "ERROR" || predchozi == 2 || predchozi == 5 || predchozi == 7){
        if(predchozi == 7){
            console.log("teĎ")
            if(znak.length == 0)
                    predchozi = 0;
            else predchozi = 2;
            priklad = priklad.slice(0 ,-1);
        }
        else{ priklad += "-";
        predchozi = 7;}
        document.getElementById("display").innerText = priklad;
    }
}
function odmocnina(){
    if(predchozi == 0 && priklad != "ERROR" || predchozi == 2 || predchozi == 5){
        if(predchozi == 0)
            cislo.push(0);
        if(predchozi == 2){
            console.log("cp=" + cporadi)
            cislo.push(0);
            cporadi++;
            console.log("cp2=" + cporadi)
        }
        priklad += "√";
        predchozi = 9;
        document.getElementById("display").innerText = priklad;
        odmocnina1 = cporadi;
    }
}
function cleare(){
    priklad = "";
    znak = [];
    cislo = [0];
    cporadi = 0;
    predchozi = 0;
    des = 0.1;
    document.getElementById("display").innerText = priklad;
}
function backspace(){
    if(predchozi != 0){
    switch (predchozi){
        case 1: cislo[cporadi] = cislo[cporadi] / 10; 
                cislo[cporadi] = parseInt(cislo[cporadi]);
                break;
        case 2: znak[znak.length - 1] = 0;
                predchozi = 1;
                znak.pop();
                break;
        case 3: predchozi = 4;
                back = cislice;
                break;
        case 4: predchozi = 1;
                for(let i = back; i > 1; i--)
                    cislo[cporadi] /= mocnenec;
                break;
        case 6: des *= 10;
                if(cislo[cporadi] % 1 == 0)
                    predchozi = 1;
                else cislo[cporadi] = cislo[cporadi] - (cislice * des);
                break;
        case 7: if(znak.length == 0)
                    predchozi = 0;
                else predchozi = 2;
                break;
        case 8: cislo[cporadi] = cislo[cporadi] / 10;
                cislo[cporadi] = parseInt(cislo[cporadi]);
                if(cislo[cporadi] == 0){
                    predchozi = 7;
                }
                break;
    }
    priklad = priklad.slice(0 ,-1);
    if(priklad == "" || cislo[cporadi] == 0 && predchozi != 7)
        predchozi = 0;
    document.getElementById("display").innerText = priklad;
    }
}
function equal(){
    if(predchozi == 1 || predchozi == 3 || predchozi == 6 || predchozi == 8 || predchozi == 9){
        znak.push(6)
        if(odmocnina1 == cporadi){
            cislo[cporadi] = Math.sqrt(cislo[cporadi]);
            odmocnina1 = 321321;
        }
        for(let i = 0; i < znak.length; i++){
            switch (znak[i]){
                case 4: cislo[i + 1] = cislo[i] * cislo[i + 1];
                        cislo[i] = "NaN";
                        if(znak[i - 1] == 3)
                            znak[i] = 3;
                        else znak[i] = 2;
                        break;
                case 5: if(cislo[i + 1] == 0)
                            window.open("error.html");
                        cislo[i + 1] = cislo[i] / cislo[i + 1];
                        cislo[i] = "NaN";
                        if(znak[i - 1] == 3)
                            znak[i] = 3;
                        else znak[i] = 2;
                        break;
            }
        }
        console.log("po 1.: " + cislo + "\n znak:" + znak);
        for(let i = 0; i < znak.length; i++){
            switch (znak[i]){
                case 2: if(cislo[i + 1] == "NaN")
                            cislo[i + 1] = cislo[i];
                        else if(cislo[i] != "NaN")
                            cislo[i + 1] = cislo[i] + cislo[i + 1]; break;
                case 3: if(cislo[i + 1] == "NaN")
                            cislo[i + 1] = cislo[i];
                        else if(cislo[i] != "NaN")
                            cislo[i + 1] = cislo[i] - cislo[i + 1]; break;
                case 6: vysledek = cislo[i];
                        if(vysledek % 1 == 0);
                        else if((vysledek * 10) % 1 == 0)
                            vysledek = vysledek.toFixed(1);
                        else if((vysledek * 100) % 1 == 0)
                            vysledek = vysledek.toFixed(2);
                        else if((vysledek * 1000) % 1 == 0)
                            vysledek = vysledek.toFixed(3);
                        else if((vysledek * 10000) % 1 == 0)
                            vysledek = vysledek.toFixed(4);
                        else vysledek = vysledek.toFixed(5);
                        if(vysledek == "NaN")
                            vysledek = "ERROR";
                        priklad += "=" + vysledek; break;
            }    
        }
        console.log("po 2.: " + cislo);
        console.log("příklad: " + priklad);

        if(priklad == "69=69"){
            priklad = "69=420"
            window.open("https://youtu.be/dQw4w9WgXcQ");
        }
        if(priklad == "77+33=110")
            priklad = "77+33=100";
        console.log(vysledek);
        if(priklad == d.getHours() + "/" + d.getMinutes() + "/" + d.getSeconds() + "=" + vysledek){
            priklad = d.getHours() + "/" + d.getMinutes() + "/" + d.getSeconds() + "=nevim";
            window.open("hodiny.html");
        }
        if(priklad == "666=666")
            priklad = "666=卐卐卐";
        if(priklad == d.getDate() + "/" + (d.getMonth() + 1) + "=" + vysledek){
            if(confirm("chcete hrát hru?") == true){
                if(d.getMilliseconds() > 500)
                    window.open("hry/pocitani.html");
                else window.open("hry/tri_dvere/tri_dvere.html");
            }
            else alert("škoda :(");
        }
        console.log("znak: " + znak);
        document.getElementById("display").innerText = priklad;

        historie[4] = historie[3];
        historie[3] = historie[2];
        historie[2] = historie[1];
        historie[1] = historie[0];
        historie[0] = priklad;
        document.getElementById("h1").innerText = historie[0] + "\n" + historie[1] + "\n" + historie[2] + "\n" + historie[3] + "\n" + historie[4];

        priklad = "";
        znak = [];
        cislo = [0];
        cporadi = 0;
        if(vysledek == "Infinity" || vysledek == "ERROR")
            predchozi = 0;
        else predchozi = 5;
        des = 0.1;
    }
}
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
function ldmode(){
    if(light == true){
        document.getElementById("dark").innerText = "🌙";
        light = false;
        document.getElementById("dark").id = "light";
        document.body.style.backgroundColor = "rgb(200, 200, 200)";
        document.body.style.color = "black";
        document.getElementById("display").style.border = "2px solid black";
        let buttonxd = document.querySelectorAll("img");
        for(let i = 0; i < buttonxd.length; i++){
            buttonxd[i].classList.add("lightbutton");
        }
        document.getElementById("hr").style.border = "1px solid black";
        let gridxd = document.querySelectorAll(".button");
        for(let i = 0; i < gridxd.length; i++){
            gridxd[i].classList.add("border1");
        }
    }
    else {
        document.getElementById("light").innerText = "🌞";
        light = true;
        document.getElementById("light").id = "dark";
        document.body.style.backgroundColor = "rgb(40, 40, 40)";
        document.body.style.color = "white";
        document.getElementById("display").style.border = "0px";
        let buttonxd = document.querySelectorAll("img");
        for(let i = 0; i < buttonxd.length; i++){
            buttonxd[i].classList.remove("lightbutton");
        }
        document.getElementById("hr").style.border = "1px solid white";
        let gridxd = document.querySelectorAll(".button");
        for(let i = 0; i < gridxd.length; i++){
            gridxd[i].classList.remove("border1");
        }
    }
}
function stxt(){
    window.open("index2.html", "_self");
}
function ntxt(){
    window.open("index.html", "_self");
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
