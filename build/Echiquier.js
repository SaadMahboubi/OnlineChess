"use strict";
/*
 * @Author: TEKIN ROZEN FILLATRE
 * module echiquier: initialise l'échiquier, donne le nom d'une pièce en fct du type de piece
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Piece_1 = require("./Piece");
exports.strListeDesCoups = "TaA4,CbC5,CgH4";
exports.listeCoups = [];
var img2 = "<img src=\"./image2.png\"/>"; //pion blanc
var img3 = "<img src=\"./image3.png\"/>"; //pion noir
function init() {
    var echiquier = [];
    //case vide de 0 à 63
    for (var i = 0; i <= 63; i++) {
        echiquier.push(new Piece_1.Piece(false, "", "", -1, -1, "x")); //ajoute une piece vide
    }
    for (var _i = 0, _a = [false, true]; _i < _a.length; _i++) {
        var coul = _a[_i];
        for (var x = 1; x <= 8; x++) {
            //on met à jour les cases des 8 pions sur les 2 couleurs
            var yp_1 = 7;
            if (coul) {
                yp_1 = 2;
            }
            else {
                yp_1 = 7;
            }
            echiquier[(yp_1 - 1) * 8 + (x - 1)].copyFrom2(coul, "P" + x, "pion", x, yp_1, pionN_ou_B(coul)); // remplacer 'img' par getsymb(coul, "♟")
            //... pour avoir les symboles des pions normaux ;)
        }
        //mise à jour des autres pièces à la place des case vides
        var yp = 8;
        if (coul) {
            yp = 1;
        }
        else {
            yp = 8;
        }
        echiquier[(yp - 1) * 8].copyFrom2(coul, "Ta", "tour", 1, yp, getsymb(coul, "♜")); //formule pour passer du système de coordonné au système de tableau à une dimension: (yp-1)*8+(xp-1)
        echiquier[(yp - 1) * 8 + (8 - 1)].copyFrom2(coul, "Tb", "tour", 8, yp, getsymb(coul, "♜"));
        echiquier[(yp - 1) * 8 + (2 - 1)].copyFrom2(coul, "Cb", "cavalier", 2, yp, getsymb(coul, "♞"));
        echiquier[(yp - 1) * 8 + (7 - 1)].copyFrom2(coul, "Cg", "cavalier", 7, yp, getsymb(coul, "♞"));
        echiquier[(yp - 1) * 8 + (3 - 1)].copyFrom2(coul, "Fc", "fou", 3, yp, getsymb(coul, "♝"));
        echiquier[(yp - 1) * 8 + (6 - 1)].copyFrom2(coul, "Ff", "fou", 6, yp, getsymb(coul, "♝"));
        echiquier[(yp - 1) * 8 + (4 - 1)].copyFrom2(coul, "D", "dame", 4, yp, getsymb(coul, "♛"));
        echiquier[(yp - 1) * 8 + (5 - 1)].copyFrom2(coul, "R", "roi", 5, yp, getsymb(coul, "♚"));
    }
    return echiquier;
}
exports.init = init;
function getsymb(coul, type) {
    //Fonction qui donne le symbole Noir ou Blanc en fonction du tour
    var symb = type;
    var lol;
    if (coul) {
        lol = type.charCodeAt(0) - 6;
        symb = String.fromCharCode(lol);
    }
    return symb;
}
exports.getsymb = getsymb;
function pionN_ou_B(coul) {
    //Fonction qui donne l'image Noir ou Blanc du professeur en fonction du tour
    var NouB;
    if (coul) {
        NouB = img2;
    }
    else {
        NouB = img3;
    }
    return NouB;
}
exports.pionN_ou_B = pionN_ou_B;
function typePieceEnNomPiece(typePiece) {
    var nomPiece;
    if (typePiece.charAt(0) == "T") {
        nomPiece = "tour";
    }
    if (typePiece.charAt(0) == "C") {
        nomPiece = "cavalier";
    }
    if (typePiece.charAt(0) == "F") {
        nomPiece = "fou";
    }
    if (typePiece.charAt(0) == "D") {
        nomPiece = "dame";
    }
    if (typePiece.charAt(0) == "R") {
        nomPiece = "roi";
    }
    return nomPiece;
}
exports.typePieceEnNomPiece = typePieceEnNomPiece;
//# sourceMappingURL=Echiquier.js.map