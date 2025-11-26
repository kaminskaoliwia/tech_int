let pytanie = prompt("Zadaj mi pytanie")
let message;
let randNumber = Math.floor(Math.random() * 6);

if (randNumber == 0) {
    message = "Być może";
}
else if (randNumber == 1) {
    message = "Oczywiscie";
}
else if (randNumber == 2) {
    message = "Nie ma takiej opcji";
}
else if (randNumber == 3) {
    message = "Zawsze";
}
else if (randNumber == 4) {
    message = "Nigdy";
}
else {
    message = "Nikt nie wie";
}

document.write(`Zadano mi pytanie: ${pytanie}`);
console.log(typeof randNumber);
document.write(`<br>Odpowiedź: ${message}`);