var vyhra = Math.floor(Math.random() * 3 + 1);
var oznaceno = 0;
var rvyber;
console.log("vyhra: " + vyhra);
var pocher = 0;
var pocvyher = 0;
var zmen = [0, 0];

function d1(){
    if(oznaceno == 0){
        document.getElementById("sel1").innerHTML = "🔆";
        oznaceno = 1;
        setTimeout(otevreni, 1000);
    }
}

function d2(){
    if(oznaceno == 0){
        oznaceno = 2;
        document.getElementById("sel2").innerHTML = "🔆";
        setTimeout(otevreni, 1000);
    }
}

function d3(){
    if(oznaceno == 0){
        oznaceno = 3;
        document.getElementById("sel3").innerHTML = "🔆";
        setTimeout(otevreni, 1000);
    }
}

function otevreni(){
    switch (vyhra){
        case 1: rvyber = 23; break;
        case 2: rvyber = 13; break;
        case 3: rvyber = 12; break;
    }
    if(rvyber % 10 == oznaceno)
        rvyber = (rvyber - rvyber % 10) / 10;
    else rvyber = rvyber % 10;
    console.log("rvyber: " + rvyber);
    switch (rvyber){
        case 1: document.getElementById("d1").style.background = "black";
                document.getElementById("k1").style.background = "black";
                break;
        case 2: document.getElementById("d2").style.background = "black";
                document.getElementById("k2").style.background = "black";
                break;
        case 3: document.getElementById("d3").style.background = "black";
                document.getElementById("k3").style.background = "black";
                break;
    }
    document.getElementById("vypis").innerText = "Chcete změnit dveře?";
    document.getElementById("ano").style.display = "inline";
    document.getElementById("ne").style.display = "inline";
}

function ano(){
    switch (oznaceno){
        case 1: oznaceno = 23; break;
        case 2: oznaceno = 13; break;
        case 3: oznaceno = 12; break;
    }
    if(oznaceno % 10 == rvyber)
        oznaceno = (oznaceno - oznaceno % 10) / 10;
    else oznaceno = oznaceno % 10;

    console.log("oznaceno: " + oznaceno);

    document.getElementById("sel1").innerHTML = ""; 
    document.getElementById("sel2").innerHTML = ""; 
    document.getElementById("sel3").innerHTML = "";

    switch (oznaceno){
        case 1:  document.getElementById("sel1").innerHTML = "🔆"; break;
        case 2:  document.getElementById("sel2").innerHTML = "🔆"; break;
        case 3:  document.getElementById("sel3").innerHTML = "🔆"; break;
    }
    document.getElementById("ano").style.display = "none";
    document.getElementById("ne").style.display = "none";
    setTimeout(vyhral, 1000);
    zmen[0]++;
}

function ne(){
    document.getElementById("ano").style.display = "none";
    document.getElementById("ne").style.display = "none";
    setTimeout(vyhral, 1000);
    zmen[1]++;
}

function vyhral(){
    switch (vyhra){
        case 1: document.getElementById("d1").style.background = "rgb(50, 50, 255)";
                document.getElementById("k1").style.background = "rgb(50, 50, 255)";
                document.getElementById("v1").style.display = "inline";
                break;
        case 2: document.getElementById("d2").style.background = "rgb(50, 50, 255)";
                document.getElementById("k2").style.background = "rgb(50, 50, 255)";
                document.getElementById("v2").style.display = "inline";
                break;
        case 3: document.getElementById("d3").style.background = "rgb(50, 50, 255)";
                document.getElementById("k3").style.background = "rgb(50, 50, 255)";
                document.getElementById("v3").style.display = "inline";
                break;
    }
    if(oznaceno == vyhra){
        document.getElementById("vypis").innerText = "Vyhrál jsi!";
        pocvyher++;
    }
    else document.getElementById("vypis").innerText = "Prohrál jsi!";
    document.getElementById("znova").style.display = "inline";

    pocher++;
    document.getElementById("pocher").innerText = "Počet her: " + pocher;
    document.getElementById("pocvyher").innerText = "Počet výher: " + pocvyher;
    document.getElementById("zmen").innerText = "Změna dveří ano/ne: " + zmen[0] + "/" + zmen[1];
}

function znova(){
    document.getElementById("d1").style.background = "rgb(255, 74, 74)";
    document.getElementById("k1").style.background = "gray";
    document.getElementById("v1").style.display = "none";
    document.getElementById("d2").style.background = "rgb(255, 74, 74)";
    document.getElementById("k2").style.background = "gray";
    document.getElementById("v2").style.display = "none";
    document.getElementById("d3").style.background = "rgb(255, 74, 74)";
    document.getElementById("k3").style.background = "gray";
    document.getElementById("v3").style.display = "none";
    document.getElementById("vypis").innerText = "Vyberte dveře";
    document.getElementById("sel1").innerHTML = ""; 
    document.getElementById("sel2").innerHTML = ""; 
    document.getElementById("sel3").innerHTML = "";
    vyhra = Math.floor(Math.random() * 3 + 1);
    oznaceno = 0;
    document.getElementById("znova").style.display = "none";
}