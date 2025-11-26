
let age = parseInt(prompt("Ile masz lat?"));
let message;

if (age < 3) {
    message = "Dzieci ponizej 3 lat wstep wolny";
}
else if (age < 12) {
    message = "Bilet ulgowy kosztuje 5 zl";
}
else if (age < 65) {
    message = "Bilet normalny kosztuje 10 zl";
}
else {
    message = "Bilet kosztuje 7 zl"
}

document.write(message);
console.log(typeof age);