/* Descrizione esercizio:
1. Chiedi all’utente il suo nome,
2. Poi chiedi il suo cognome,
3. Poi chiedi il suo colore preferito
4. Infine scrivi sulla pagina: nomecognomecolorepreferito21
*/

//WRITELN

// Richiesta nome utente 
let nome_utente = prompt("Inserisci il tuo nome");
console.log(nome_utente);

//Richiesta cognome utente 
let cognome_utente = prompt("Inserisci il tuo cognome");
console.log(cognome_utente);

// Richiesta colore preferito utente 
let colore_preferito = prompt ("Qual'è il tuo colore preferito?");
console.log(colore_preferito);

// Numero finale 
const final_number = 21;

//SALUTO 
let saluto = ("Ciao "+ `${nome_utente}` + " questa è la tua password insicura: ");
document.getElementById("saluto_utente").innerHTML= (saluto);

//WRITELN
document.writeln ("Output by Writeln: " + nome_utente + cognome_utente + colore_preferito + final_number);


//GET ELEMENT ID
document.getElementById ("simple_password").innerHTML = ('Output by getElementById: ' + nome_utente + cognome_utente + colore_preferito + final_number);

