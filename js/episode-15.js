let nbra = prompt("choix un numbre :", "");
let nbrb = prompt("choix un numbre :", "");



let resultat= nbra * nbrb;
let signe;

if (isNaN(resultat)){
    console.log(` operation impossible: ${nbra}*${nbrb}`);
}
else {
    if(resultat >= 0){
       signe = "positif"
    }
    else {
        signe = " negatif"
    }

    console.log(`${nbra}x${nbrb}=${resultat} est ${signe}`)
}
   

