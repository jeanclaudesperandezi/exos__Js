let moyen = prompt("quel est votre moyen :");
moyen = parseFloat(moyen);

let message = (moyen >= 5 && moyen< 10) ? "mention passable" :
              (moyen >= 10 && moyen < 12) ? "mention assez-bien" :
              (moyen >= 13 && moyen < 14) ? "mention bien" :
              (moyen >= 15 && moyen < 16) ? "mention tres-bien" :
              (moyen >= 17 && moyen <= 20) ? "mention excellentte" :
              "mention null";

alert(message);
