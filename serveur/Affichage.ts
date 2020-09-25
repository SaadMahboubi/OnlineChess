/*
 * @Author: TEKIN ROZEN FILLATRE
 * module affichage: affiche l'échiquier
*/

import * as E from "./Echiquier";
import * as P from "./Piece";

export function afficherEchiquier(echiquier : Array<P.Piece>){
    //affiche simplement l'échiquier au moment voulu
    let str:string;
    str = "";
    let i: number=8;
    let j:number=1;
    while(i>=1){//ligne
        while(j<9){//colone
            if(echiquier[(i-1)*8+(j-1)].positionInitialeX!=-1){//la formule est deja expliqué dans Echiquier
                str=str+" ";
                if (echiquier[(i-1)*8+(j-1)].couleur){
                    str=str+"b"; //b pour blanc
                }
                else {
                    str=str+"n"; //n pour noir :)
                }
                
                if (echiquier[(i-1)*8+(j-1)].type.length==1){
                    str = str + " "; //si le type de la piece ne fait qu'un caractère, alors on ajoute un espace pour aligner les lignes et colones
                }
                str = str+echiquier[(i-1)*8+(j-1)].type;
            }
            else{
                str+="    "; //4 espaces pour aligner
            }
            j++;
        }
        console.log(str);
        i--;
        j=1;
        str = "";
    }
}