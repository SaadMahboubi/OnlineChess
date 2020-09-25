/*
 * @Author: TEKIN ROZEN FILLATRE
 * module Piece: classe d'une piece
*/

export class Piece
{
    couleur: boolean; //0 = noir, 1 = blanc
    type: string;    // Pa..Ph,Ta,Tb,Cb,Cg, 
    nom : string ;
    positionInitialeX : number ;
    positionInitialeY : number;
    symbole : string; 
    
    
    constructor (coul: boolean,ty: string, no : string ,posInX : number ,posInY : number,sym : string ){
        this.couleur = coul;
        this.type = ty;
        this.nom=no;
        this.positionInitialeX=posInX;
        this.positionInitialeY=posInY;
        this.symbole=sym;
    }
    copyFrom2 (coul: boolean,ty: string, no : string ,posInX : number ,posInY : number,sym : string):void{
        this.couleur = coul;
        this.type = ty;
        this.nom=no;
        this.positionInitialeX=posInX;
        this.positionInitialeY=posInY;
        this.symbole=sym;
    }
    copyFrom (P: Piece):void{
        this.couleur = P.couleur;
        this.type = P.type;
        this.nom=P.nom;
        this.positionInitialeX=P.positionInitialeX;
        this.positionInitialeY=P.positionInitialeY;
        this.symbole=P.symbole;
    }
    
}
let pieceVide:Piece =new Piece (false, "", "",-1,-1,"",);//emplacement vide
