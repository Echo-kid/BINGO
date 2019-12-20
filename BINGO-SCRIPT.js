


function bingoNumber() {
    let alphabet = ["B", "I", "N", "G", "O"];

    let x = Math.floor((Math.random() * 100) + 1);
    let y = Math.floor((Math.random() * 4) + 1);
    return alphabet[y] + x;
}