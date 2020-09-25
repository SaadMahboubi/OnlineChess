# Jeu d'échecs en ligne
Ce projet consiste à déployer une application web de jeu d'échecs jouable en multijoueur.

## Installation et lancement
* Récupération du projet, des dépendances et compilation :

    ```bash
    git clone https://gitlab.univ-nantes.fr/tonneau-q/onlineChess.git
    cd onlineChess
    npm install
    tsc
    ```
* Lancement du serveur : 
   ```bash
   node build/main.js
   ```

* Accès à l'application : http://adresseduserveur:8080 (ou http://localhost:8080 sur le pc local)

## Manuel d'utilisation
Indiquer dans le formulaire en bas de page la pièce à déplacer et sa destination au format `PieceColonneLigne` puis validez.  
L'accronyme de la pièce est exprimé selon la liste suivante :
  * R : roi
  * D : dame
  * Fc | Ff : fou initialement en colonne c|f
  * Cb | Cg : cavalier initialement en colonne b|g
  * Ta | Th : tour initialement en colonne a|h
  * Pa | Pb | Pc | ... : pion initialement en colonne a|b|c|...

>Exemple : PbB4 déplace le pion initialement en colonne B à la case `B4`.

## Organisation des sources
* server : sources relatives au serveur
  * `main.ts` : algorithme principale de création et gestion du serveur
* client: sources relatives aux navigateur(s)
  * `index.html` : page principale de l'application
  * `style.css` : design de l'application
  * `script.js` : algorithme(s) JavaScript côté client
* build : résultats de la compilation TypeScript
* node_modules : modules externes importés (express)
* `sujet.pdf` : sujet du projet
* `.gitignore` : filtre des fichiers à exclure dans le dépôt git
* `.tsconfig` et `package.json` : paramètres de compilation et d'exécution

## API
L'adresse [/status.js](http://localhost:8080/status.js) distribue toutes les informations de la partie en cours.