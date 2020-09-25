"use strict";
/*
 * @Author: TEKIN ROZEN FILLATRE
 * module coup: lit les coups, joue un coup
*/
Object.defineProperty(exports, "__esModule", { value: true });
var E = require("./Echiquier");
var A = require("./Affichage");
//variables
exports.listeCoups = [];
exports.numCoup = 0;
function lireCoups(strListeDesCoups) {
    //en entrée: strListeDesCoups = chaine des coups de la partie à lire
    //en sortie: listeCoups = tableau des coups de la partie
    exports.listeCoups = strListeDesCoups.split(",");
    return exports.listeCoups.length;
}
exports.lireCoups = lireCoups;
function jouerCoup(echiquier, chaineCoup) {
    //1) décoder
    //2) déplace la piece 
    //3) incrémenter le numCoup
    exports.typePiece = chaineCoup.slice(0, -2); //enleve les 2 derniers caractères
    var destinationPiece = chaineCoup.slice(exports.typePiece.length); //garde les 2 derniers caractères //autre facons: slice(-2)
    var destinationEnXstr = chaineCoup.slice(exports.typePiece.length, -1); // donne le X -> ex: TaA4 --> garde "A"
    var destinationEnY = chaineCoup.charAt(chaineCoup.length - 1); // donne le y -> ex: TaA4 --> garde "4"
    //Traduction Lettre en coordonnée x. ex: A4 --> 14
    var destinationEnXint = destinationEnXstr.charCodeAt(0) - 65 + 1; //65 = caractère A
    //'+ string' change le string en number
    var coul = ((exports.numCoup % 2) == 0);
    var positionInitial;
    var m;
    for (m = 0; m < 63; m++) {
        if (exports.typePiece == echiquier[m].type && echiquier[m].couleur == coul) {
            break;
        }
    }
    //Affiche le pion à son nouvel emplacement
    echiquier[(+destinationEnY - 1) * 8 + (destinationEnXint - 1)].copyFrom2(coul, exports.typePiece, E.typePieceEnNomPiece(exports.typePiece), +destinationEnY, destinationEnXint, echiquier[m].symbole);
    echiquier[m].copyFrom2(coul, "", "", -1, -1, ""); //Efface le pion avant de le bouger à son nouvelle emplacement
    exports.numCoup++;
    A.afficherEchiquier(echiquier); //on affiche l'échiquier pour se visualiser plus facilement l'échiquier
    return echiquier;
}
exports.jouerCoup = jouerCoup;
//# sourceMappingURL=Coup.js.map