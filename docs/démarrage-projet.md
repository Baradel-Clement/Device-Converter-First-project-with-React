# Pour démarrer un projet 
- cloner le projet sur lequel on va travailler (au même niveau que le modèle)
- lancer les 2 commandes de copie :
    - `cp -n ../React-modele/{.*,*} .`
    - `cp -rn ../React-modele/{src,config,public} .`
- récupérer les dépendances :
    - `yarn`
- changer la carte d'identité du projet si besoin (ex : nom du projet)
  - `yarn init` (changer uniquement ce que l'on souhaite, entrée pour garder les anciennes valeurs)
- changer le nom du projet dans le title de src/assets/index.html
- lancer le dev server :
    - `yarn start`
- aller coder !
