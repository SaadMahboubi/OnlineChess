/*
 * @Author: TEKIN ROZEN FILLATRE
 * module coup: lit les coups, joue un coup
*/

import {Piece} from "./Piece";
import * as E from "./Echiquier";
import * as A from "./Affichage";
//variables
export let listeCoups: Array<string>=[];
export let typePiece :string;
export let numCoup:number=0;


export function lireCoups(strListeDesCoups:string):number{
    //en entrée: strListeDesCoups = chaine des coups de la partie à lire
    //en sortie: listeCoups = tableau des coups de la partie
    listeCoups = strListeDesCoups.split(",");  
    return listeCoups.length;
}

export function jouerCoup(echiquier :Array<Piece>, chaineCoup : string ):Array<Piece>{
    //1) décoder
    //2) déplace la piece 
    //3) incrémenter le numCoup
    typePiece = chaineCoup.slice(0, -2); //enleve les 2 derniers caractères
    let destinationPiece : string = chaineCoup.slice(typePiece.length); //garde les 2 derniers caractères //autre facons: slice(-2)
    let destinationEnXstr : string = chaineCoup.slice(typePiece.length,-1);// donne le X -> ex: TaA4 --> garde "A"
    let destinationEnY : string = chaineCoup.charAt(chaineCoup.length-1);// donne le y -> ex: TaA4 --> garde "4"
    //Traduction Lettre en coordonnée x. ex: A4 --> 14
    let destinationEnXint:number=destinationEnXstr.charCodeAt(0)- 65 +1;//65 = caractère A
    //'+ string' change le string en number
    let coul:boolean=((numCoup%2)==0);
    let positionInitial:number;
    let m:number;
    for(m=0; m<63;m++){
        if(typePiece==echiquier[m].type && echiquier[m].couleur==coul){
            
            break;
        }
    }
    //Affiche le pion à son nouvel emplacement
    echiquier[ ( +destinationEnY -1)*8+(destinationEnXint-1)].copyFrom2(coul, typePiece, E.typePieceEnNomPiece(typePiece),+destinationEnY,destinationEnXint,echiquier[m].symbole);
    echiquier[m].copyFrom2 (coul, "", "",-1,-1,""); //Efface le pion avant de le bouger à son nouvelle emplacement

    numCoup++;
    A.afficherEchiquier(echiquier); //on affiche l'échiquier pour se visualiser plus facilement l'échiquier
    return echiquier;
}