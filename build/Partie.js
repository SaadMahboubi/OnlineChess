"use strict";
/*
 * @Author: TEKIN ROZEN FILLATRE
 * module partie: notre ancien main qui affiche l'échiquier proprement dans console de débogage
*/
Object.defineProperty(exports, "__esModule", { value: true });
//programme principal (ancien)
var E = require("./Echiquier");
var A = require("./Affichage");
var C = require("./Coup");
//Initialiser echiquier
var echioquier = E.init();
//afficher echiquier
A.afficherEchiquier(echioquier);
//convertir la chaine d'entree en coups
C.lireCoups(E.strListeDesCoups);
console.log("Ce qu'on a en entrée: " + E.listeCoups);
console.log("Nombre de coups a jouer: " + E.listeCoups.length);
var str = "♞";
console.log("1: " + E.getsymb(false, str));
console.log("2: " + E.getsymb(false, str));
/*while(C.jouerCoup()){
    console.log("Il reste des coups a jouer");
    console.log("----------------");
}*/
console.log("Il n'y a plus de coup à jouer");
//# sourceMappingURL=Partie.js.map