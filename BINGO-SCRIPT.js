


function bingoNumber() {
    let alphabet = ["B", "I", "N", "G", "O"];

    let x = Math.floor((Math.random() * 50) + 1);
    let y = Math.floor((Math.random() * 4) + 1);
    document.getElementById("number").innerHTML = alphabet[y] + "-" + x;
}

function startGame() {
    alert("Ok here we go!");
    document.getElementById("B1link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("B2link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("B3link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("B4link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("B5link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("I1link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("I2link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("I3link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("I4link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("I5link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("N1link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("N2link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("N4link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("N5link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("G1link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("G2link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("G3link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("G4link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("G5link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("O1link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("O2link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("O3link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("O4link").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("O5link").innerHTML = Math.floor((Math.random() * 50) + 1);
}
let bingoTimer = setInterval(bingoNumber, 5000);
