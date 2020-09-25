/*
 * @Author: TEKIN ROZEN FILLATRE
 * module echiquier: initialise l'échiquier, donne le nom d'une pièce en fct du type de piece
*/

import {Piece} from "./Piece";
import * as A from './Affichage';
import { numCoup } from "./Coup";

export let strListeDesCoups:string="TaA4,CbC5,CgH4";
export let listeCoups: Array<string>=[];
let img2: string="<img src=\"./image2.png\"/>"; //pion blanc
let img3: string="<img src=\"./image3.png\"/>"; //pion noir

export function init ():Array<Piece>{ //initialise
    let echiquier:Array<Piece>=[];

    //case vide de 0 à 63
    for (let i:number=0;i<=63;i++){
        echiquier.push(new Piece (false, "", "",-1,-1,"x")); //ajoute une piece vide
    }
    for (let coul of[false,true]){
        for (let x: number=1;x<=8;x++){ //x = colones
            //on met à jour les cases des 8 pions sur les 2 couleurs
            let yp : number=7;
            if (coul){
                yp=2;
            }
            else {
                yp=7;
            }
            echiquier[(yp-1)*8+(x-1)].copyFrom2 (coul, "P"+x, "pion",x,yp,pionN_ou_B(coul));// remplacer 'img' par getsymb(coul, "♟")
            //... pour avoir les symboles des pions normaux ;)
        }
        //mise à jour des autres pièces à la place des case vides
        let yp : number=8;
        if (coul){
            yp=1;
        }
        else {
            yp=8;
        }

        echiquier[(yp-1)*8].copyFrom2 (coul, "Ta", "tour",1,yp,getsymb(coul, "♜")); //formule pour passer du système de coordonné au système de tableau à une dimension: (yp-1)*8+(xp-1)
        echiquier[(yp-1)*8+(8-1)].copyFrom2 (coul, "Tb", "tour",8,yp,getsymb(coul, "♜"));
        echiquier[(yp-1)*8+(2-1)].copyFrom2  (coul, "Cb", "cavalier",2,yp,getsymb(coul, "♞"));
        echiquier[(yp-1)*8+(7-1)].copyFrom2 (coul, "Cg", "cavalier",7,yp,getsymb(coul, "♞"));
        echiquier[(yp-1)*8+(3-1)].copyFrom2  (coul, "Fc", "fou",3,yp,getsymb(coul, "♝"));
        echiquier[(yp-1)*8+(6-1)].copyFrom2 (coul, "Ff", "fou",6,yp,getsymb(coul, "♝"));
        echiquier[(yp-1)*8+(4-1)].copyFrom2  (coul, "D", "dame",4,yp,getsymb(coul, "♛"));
        echiquier[(yp-1)*8+(5-1)].copyFrom2  (coul, "R", "roi",5,yp,getsymb(coul, "♚"));
        
    }
    return echiquier;
}

export function getsymb(coul, type:string):string{
    //Fonction qui donne le symbole Noir ou Blanc en fonction du tour
    let symb: string=type;
    let lol:number;
    if (coul ){
    lol = type.charCodeAt(0) - 6;
    symb = String.fromCharCode(lol);
    }
    return symb;
}

export function pionN_ou_B(coul):string{
    //Fonction qui donne l'image Noir ou Blanc du professeur en fonction du tour
    let NouB: string;
    if (coul ){
        NouB = img2;
    }
    else {
        NouB = img3;
    }
    return NouB;
}

export function typePieceEnNomPiece(typePiece:string): string{
    let nomPiece:string;
    if (typePiece.charAt(0)=="T"){
        nomPiece="tour"
    }
    if (typePiece.charAt(0)=="C"){
        nomPiece="cavalier"
    }
    if (typePiece.charAt(0)=="F"){
        nomPiece="fou"
    }
    if (typePiece.charAt(0)=="D"){
        nomPiece="dame"
    }
    if (typePiece.charAt(0)=="R"){
        nomPiece="roi"
    }
    return nomPiece;
}