let rok = parseInt(prompt("Wpisz rok"));
let message;

if ((rok % 4 == 0 && rok % 100 != 0) || (rok % 400 == 0)) {
    message = "jest przestepny";
} else {
    message = "nie jest przestepny";
}

document.write(`Rok ${rok} ${message}`);
console.log(typeof rok);
