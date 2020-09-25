"use strict";
/*
 * @Author: TEKIN ROZEN FILLATRE
 * module affichage: affiche l'échiquier
*/
Object.defineProperty(exports, "__esModule", { value: true });
function afficherEchiquier(echiquier) {
    //affiche simplement l'échiquier au moment voulu
    var str;
    str = "";
    var i = 8;
    var j = 1;
    while (i >= 1) {
        while (j < 9) {
            if (echiquier[(i - 1) * 8 + (j - 1)].positionInitialeX != -1) {
                str = str + " ";
                if (echiquier[(i - 1) * 8 + (j - 1)].couleur) {
                    str = str + "b"; //b pour blanc
                }
                else {
                    str = str + "n"; //n pour noir :)
                }
                if (echiquier[(i - 1) * 8 + (j - 1)].type.length == 1) {
                    str = str + " "; //si le type de la piece ne fait qu'un caractère, alors on ajoute un espace pour aligner les lignes et colones
                }
                str = str + echiquier[(i - 1) * 8 + (j - 1)].type;
            }
            else {
                str += "    "; //4 espaces pour aligner
            }
            j++;
        }
        console.log(str);
        i--;
        j = 1;
        str = "";
    }
}
exports.afficherEchiquier = afficherEchiquier;
//# sourceMappingURL=Affichage.js.map