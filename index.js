// Oppgave 1
let liste1 = ['a', 'b', 'c', 'd', 'e', 'f']

console.log(liste1[0]); // Skriver det første elementet

// Oppgave 2
let liste2 = ['a', 'b', 'c', 'd', 'e', 'f']
let liste2Lengde = liste2.length
console.log(liste2[liste2Lengde-1]); // Skriver det siste elementet

// Oppgave 3
let liste3 = [3, 66, 45]
let liste3Lengde = liste3.length

function funksjon1() {
    let svar = liste3.reduce((a, b) => a + b, 0) // Summere listen

    return console.log(svar);
}
function funksjon2() {
    
    let superSvar = 1

    for (let i = 0; i < liste3Lengde; i++) {
        let svaret = liste3.splice(0,1)
        superSvar = superSvar * svaret
    }

    liste3 = [3, 66, 45]
    return console.log(superSvar);
}

// Oppgave 4

let animals = ['Katt', 'Hund', 'Fugl', 'Fisk']
function funksjon3() {
    return console.log(animals.indexOf('Fugl'));
}

// Oppgave 5

let numbers = [2, 5, 8, 2, 4, 2, 9]

let svar = numbers.lastIndexOf(2)
console.log(svar);

// Oppgave 6

let fruits = ["eple", "banan", "appelsin"];

function funksjon4() {
    fruits.push("druer")
    return console.log(fruits);
}
function funksjon5() {
    fruits.pop()
    return console.log(fruits);
}

// Oppgave 7

let numbers1 = [12, 5, 8, 1, 19, 3];

function funksjon6() {
    let svar = numbers1.sort()
    return console.log(svar);
}

// Oppgave 8

let List1 = [1,2,3,4,5]
let List2 = [0,1,2,3,4]
let svarListe = []

let listeLengde = List1.length;
for (let i = 0; i < listeLengde; i++) {
    let svar = List1[i] + List2[i]
    svarListe.push(svar)
}
console.log(svarListe);

// Utfordring 1

let tall = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let partall = []
let oddetall = []
let tallLengde = tall.length

for (let i = 0; i < tallLengde; i++) {
    let midlertidigTall = tall.splice(0,1) // Tar det første tallet ut av listen

    // Sjekker om tallet er partall eller oddetall
    if (midlertidigTall % 2 == 0) {
        partall.push(midlertidigTall)
    } else {
        oddetall.push(midlertidigTall)
    }
}

console.log(`Partallene i lista er ${partall}, og oddetallene er ${oddetall}`);

// Utfordring 2
console.log("----------------");

let tallene = [10, 9, 3, 8, 12, 22, 3, 15]
var tallet = [];
let lengde = tallene.length;
let størst = tallene[0];

for (let i = 0; i < lengde; i++) {
    tallet = tallene.splice(0,1)
    console.log(tallet);
    
    if (tallet[0] > størst) {
        størst = tallet[0]
        console.log(størst);
    } 
}
console.log(størst);

// Utfordring 3

let tallene1 = [10, 9, 3, 8, 12, 22, 3, 15]

tallene1.sort(function(a,b){return a-b})

console.log(tallene1[tallene1.length-2]);


