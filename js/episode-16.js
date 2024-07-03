let chiffre = prompt("choisez un chiffre", "");

if (chiffre > 10 || chiffre < 0){
    console.log("ce chiffer n'est pas entre 0 et 10");
}
else{
    while(chiffre >=0){
       console.log(chiffre)
       chiffre-- 
    }
}