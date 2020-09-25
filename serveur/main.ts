/*
 * Programme principal du serveur d'échecs en ligne
 * @Author: Quentin Tonneau FEAT TEKIN ROZEN FILLATRE
 * @Date: 2018-03-15 22:23:16 
 */

//Imports des modules serveur web
import express = require('express');
import bodyParser = require('body-parser');
declare var __dirname;
const _PORT_ = 8080; //port d'écoute du serveur
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/../client')); //distribution automatique des fichiers (ex : index.html)


/************** PARTIE ELEVE 1 ****************/
import * as E from './Echiquier';
import * as C from './Coup';
import {Piece} from './Piece';
let echiquier:Array<Piece> = E.init(); //Création d'une variable globale de la partie en cours
/************* FIN PARTIE ELEVE 1 ************/

/***************PARTIE TCHAT ***********/
//Interface décrivant un message
interface Message{
  pseudo: string,
  message:string
}
let messagerie : Array<Message> = [];//Objet stockant les messages envoyés

//Fonction diffusant la messagerie (liste des messages envoyés)
app.get("/messages.js",function(req,res){
  res.end("var messagerie = "+JSON.stringify(messagerie));
});

//Fonction de réception du formulaire de tchat (adresse /tchat)
app.post("/tchat",function(req,res){
  messagerie.push({pseudo : req.body.pseudo, message : req.body.message}); //enregistrement du message
  res.redirect("/"); //redirection vers la page principale
});

/*******FIN PARTIE TCHAT ********/


//Fonction de traitement d'un coup envoyé par le navigateur
app.post("/",function(req,res){
  let coup : string = req.body.coup; //récupération du coup


  /************** PARTIE ELEVE 2 ****************/
  echiquier = C.jouerCoup(echiquier, coup);
  /************* FIN PARTIE ELEVE 2 ************/
  
  res.redirect("/");//On redirige l'utilisateur vers l'affichage du nouvel echiquier
});


//Fonction retournant l'échiquier actuel
app.get("/status.js",function(req,res){
  res.end("var echiquier = "+JSON.stringify(echiquier));
});

//Lancement de l'application
app.listen(_PORT_, function () {
  console.log('Application lancée à l\'adresse http://localhost:'+_PORT_);
});