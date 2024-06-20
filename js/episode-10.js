let montant = prompt("Entrez la facture:", "");

montant = parseFloat(montant);

if (montant > 40000){
    montant = montant*10/100;
    alert(montant);
}
else{
    alert(montant);
}