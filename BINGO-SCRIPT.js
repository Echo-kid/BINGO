


function bingoNumber() {
    let alphabet = ["B", "I", "N", "G", "O"];

    let x = Math.floor((Math.random() * 50) + 1);
    let y = Math.floor((Math.random() * 4) + 1);
    return alphabet[y] + x;
}

function startGame() {
    alert("Ok here we go!");
    document.getElementById("B1").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("B2").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("B3").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("B4").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("B5").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("I1").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("I2").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("I3").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("I4").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("I5").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("N1").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("N2").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("N4").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("N5").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("G1").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("G2").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("G3").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("G4").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("G5").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("O1").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("O2").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("O3").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("O4").innerHTML = Math.floor((Math.random() * 50) + 1);
    document.getElementById("O5").innerHTML = Math.floor((Math.random() * 50) + 1);
}
