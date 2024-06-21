let moyen = prompt("quel est votre moyen :");
moyen = parseFloat(moyen);

let message = (moyen >= 10 && moyen <= 11) ? "mention passable" :
              (moyen >= 12 && moyen <= 13) ? "mention assez-bien" :
              (moyen >= 14 && moyen <= 15) ? "mention bien" :
              (moyen >= 16 && moyen <= 17) ? "mention tres-bien" :
              (moyen >= 18 && moyen <= 20) ? "mention excellentte" :
              "mention null";

alert(message);
