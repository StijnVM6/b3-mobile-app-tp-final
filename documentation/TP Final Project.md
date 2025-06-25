# TP - Final Project

## Conditions

Vous avez jusqu'à 12h15 pour créer un projet fullstack avec les outils suivants :

-   ChatGPT ou autre LLM
-   vos notes
-   vos TP
-   React Native
-   Strapi ou un modèle d'API plus rapide à mettre en place que Strapi

Vous ne rendrez que le projet React Native, pas l'API !

## Objectif

Créer une application mobile permettant d'enregistrer dans une API les données de batterie de votre téléphone ou votre localisation.

## Étapes

Dans une branche principale 'main', créez un projet React Native.
Dans une page, affichez un bouton permettant d'afficher le niveau de batterie ou la localisation GPS de votre téléphone.
Créer un commit à ce moment là au moins : STEP ONE - Affichage des datas

Dans un second temps, envoyez ces données à une API (cf Strapi ou autre).
Créer une deuxième page permettant d'afficher les données de l'API.
Créer un commit à ce moment là au moins : STEP TWO - Datas dans le cloud

Ensuite, modifier le routing de l'application pour que la première page soit une page de connexion si l'utilisateur n'est pas connecté.
Rajouter la protection des données dans l'API par l'utilisation d'un token JWT.
Sur la page de connexion, afficher un formulaire permettant de se connecter.
L'inscription est réalisé à la mano en amont.
Lorsque l'utilisateur est connecté, il peut accéder à la page d'affichage des données.
Pour cela stockez le token JWT dans le stockage local de l'application. (AsyncStorage)
Fournir le token dans les requêtes à l'API.
Commitez à ce moment là au moins : STEP THREE - Authentification et stockage des datas

Dernière étape, la page d'acceuil est soit la page de connexion, si l'utilisateur n'est pas connecté, soit la page d'affichage des données si l'utilisateur est connecté.
La page d'affichage des données doit afficher une TabBar avec deux onglets :

-   Onglet 1 : Affichage et ajout de la donnée actuel (pas de temps réel demandé) de batterie ou de localisation
-   Onglet 2 : Affichage de l'historique données de l'API
    Rajouter un drawer permettant de se déconnecter de l'application. Ce drawer doit être accessible depuis n'importe quelle page de l'application, en dehors de la page de connexion.
    Si vous avez terminé, bravo !
    Committez à ce moment là : STEP FOUR - Navigation ok

Vous pouvez rajouter autant de commits que vous le souhaitez en étapes intermédiaires.

## Bonus

Si utilisation d'un LLM, partagez la ou les conversations utilisées en ajoutant dans le README.md les liens de partages.
