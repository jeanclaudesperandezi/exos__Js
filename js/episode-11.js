let nbre = prompt("choisiez un chiffres;", " ");
nbre = parseFloat(nbre);

let resultat = "";

for( i=0; i<=10; i++){   
    resultat += nbre + " * " + i + " = " + (nbre * i) +"\n"; 
    
}
alert(resultat);

