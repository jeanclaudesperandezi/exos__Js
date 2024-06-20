const nom = prompt("Quel est ton nom");

let sexe= prompt("quels est ton sexe: (masculin/feminin)");

if(sexe === "masculin"){
    alert("bonjours Monsieur" + nom);
}
else if(sexe === "feminin"){
    alert("Bonjour Madame" + nom)
}
else {
    alert("Entrée invalide, veuillez indiquer 'masculin' ou 'feminin'.");
}