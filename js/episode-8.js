let noms= prompt("Quel est ton nom");

let sexe= prompt("quels est ton sexe: (masculin/feminin)");

if(sexe === "masculin"){
    alert("bonjours Monsieur"+ " " + noms);
}
else if(sexe === "feminin"){
    alert("Bonjour Madame"+ " " + noms);
}
else {
    alert("Entrée invalide, veuillez indiquer 'masculin' ou 'feminin'.");
}