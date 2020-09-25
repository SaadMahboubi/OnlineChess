"use strict";
/*
 * @Author: TEKIN ROZEN FILLATRE
 * module Piece: classe d'une piece
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Piece = /** @class */ (function () {
    function Piece(coul, ty, no, posInX, posInY, sym) {
        this.couleur = coul;
        this.type = ty;
        this.nom = no;
        this.positionInitialeX = posInX;
        this.positionInitialeY = posInY;
        this.symbole = sym;
    }
    Piece.prototype.copyFrom2 = function (coul, ty, no, posInX, posInY, sym) {
        this.couleur = coul;
        this.type = ty;
        this.nom = no;
        this.positionInitialeX = posInX;
        this.positionInitialeY = posInY;
        this.symbole = sym;
    };
    Piece.prototype.copyFrom = function (P) {
        this.couleur = P.couleur;
        this.type = P.type;
        this.nom = P.nom;
        this.positionInitialeX = P.positionInitialeX;
        this.positionInitialeY = P.positionInitialeY;
        this.symbole = P.symbole;
    };
    return Piece;
}());
exports.Piece = Piece;
var pieceVide = new Piece(false, "", "", -1, -1, ""); //emplacement vide
//# sourceMappingURL=Piece.js.map