/*
 * @Author: Quentin Tonneau FEAT TEKIN ROZEN FILLATRE
 * @Date: 2018-03-19 13:23:50 
 * @Last Modified by: Quentin Tonneau
 * @Last Modified time: 2018-04-02 10:54:32
 */

/**
 * Fonction principale executée après le chargement de la page
 * Initialise l'échiquier en fonction de la variable "echiquier"
 */
function init(){

    /************** PARTIE ELEVE 3 ****************/
    /******* A ADAPTER SELON VOS INTERFACES *******/
    for(var i=1;i<9;i++){
       for(var j=1;j<9;j++){

            var piece = echiquier[(i-1)*8+(j-1)];
            if(piece.nom==""){
                //Vidage de la case
                document.getElementsByTagName("tr")[i].getElementsByTagName("td")[j-1].innerHTML=""; //j=x i=y
            }else{
                //Affichage du symbole / image
                document.getElementsByTagName("tr")[i].getElementsByTagName("td")[j-1].innerHTML=piece.symbole;  // version symbole
                //document.getElementsByTagName("tr")[i].getElementsByTagName("td")[j-1].innerHTML="<img src=\"image1.jpg\"/>"; //version image
            }
            
        }
    }


    /***PARTIE TCHAT  ****/
    //Parcours des messages stockés dans la variable "messagerie"
    //CF nouvel import dans le HTML et "app.get(messages.js)" côté serveur

    for(var i=0;i<messagerie.length;i++){
        var message = messagerie[i];
        var ajout = document.createElement("div");
        ajout.classList.add("contenu");
        ajout.innerHTML="<span class='pseudo'>"+message.pseudo+" :</span><span class='contenu'>"+message.message+"</span>"
        document.getElementById("contenu").append(ajout);
    }
}
