//test
//alert("Ciao");

//Rccolta dati
const km = prompt("Salve, quanti km dovrà percorrere oggi?") //string |null
console.log(km, typeof km);

const age = prompt("Quanti anni hai?") //string | null
console.log(age, typeof age);

//variabile  prezzo biglietto 
let ticket = 0.21

//calcolo dei km da percorrere per prezzo biglietto
const ticketPrice = ticket * km; //number 
console.log(ticketPrice, typeof ticketPrice);


//variabile sconto 20%
const discount20 = ticketPrice * 20 / 100; //number 
console.log(discount20, typeof discount20);

//variabile sconto 40%
const discount40 = ticketPrice * 40 / 100; //number 
console.log(discount40, typeof discount40);




//crazione condizioni
let priceFinal = ""; //number 


if (age >= 1  && age < 18) {
    priceFinal = ticketPrice - discount20;
    //Stampa
    document.getElementById("result").innerHTML = "Le è stato applicato uno sconto del 20%, il prezzo del Ticke è:" + " " + (priceFinal.toFixed(2)) + "€";
} else if (age >= 65) {
    priceFinal = ticketPrice - discount40;
    //Stampa
    document.getElementById("result").innerHTML = "Le è stato applicato uno sconto del 40%, il prezzo del Ticket è:" + " " + (priceFinal.toFixed(2)) + "€";
} else {
    priceFinal = ticketPrice;
    //Stampa
    document.getElementById("result").innerHTML ="Il prezzo del Ticket è:" + " " + (priceFinal.toFixed(2)) + "€";
}

console.log(priceFinal, typeof priceFinal);


