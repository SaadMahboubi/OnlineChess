/*
 * @Author: TEKIN ROZEN FILLATRE
 * module partie: notre ancien main qui affiche l'échiquier proprement dans console de débogage
*/

//programme principal (ancien)
import * as E from "./Echiquier";
import * as P from "./Piece";
import * as A from "./Affichage";
import * as C from "./Coup";

//Initialiser echiquier
let echioquier = E.init();

//afficher echiquier
A.afficherEchiquier(echioquier);
//convertir la chaine d'entree en coups
C.lireCoups(E.strListeDesCoups);
console.log("Ce qu'on a en entrée: "+E.listeCoups);
console.log("Nombre de coups a jouer: "+E.listeCoups.length);
let str: string="♞";
console.log("1: "+ E.getsymb(false, str));
console.log("2: "+E.getsymb(false, str));

/*while(C.jouerCoup()){
    console.log("Il reste des coups a jouer");
    console.log("----------------");
}*/
console.log("Il n'y a plus de coup à jouer");


