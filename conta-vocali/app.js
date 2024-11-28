//Prendo argomento dal terminale
const args = process.argv.slice(2);

//Controllo se c'e' argomento
if(args.length === 0){
    console.log('Utilizzo: node app.js <stringa>');
    process.exit(1);
}

//dichiarazione variabili
const str = args.join('');
const vocali = 'aeiouAEIOU';
let contatore= 0;

//Conto le vocali nella stringa
for (let char of str){
    if(vocali.includes(char)){
        contatore ++;
    }
}
console.log(`Numero di vocali: ${contatore}`)