# IOTerra


## Description
IOTerra est un système de suivi pour Terrarium / Vivarium.<br/>
IOTerra permet le controle régulier de la température, de l'hygrométrie et de la luminosité afin d'élever vos animaux dans les meilleures conditions.<br/>
Vous pouvez visualiser les paramètres de votre terrarium et être notifié par mail en cas de dépassement.



## Technologies utilisées
Un site WEB : AngularJS, Bootstrap<br/>
Une API : NodeJS<br/>
Un Raspberry PI : Python<br/>
Des capteurs : Luminosité, Humidité, Température
Une base de données : (à définir : MySQL ou noSQL)
Un service d'hébergement : Firebase
Intégration continue : Travis, SonarQube


# Planning


## Tâches à réaliser pour le 25/02/19
* Création du Readme
* Création de la sidebar
* Initialisation Travis
* Initialisation Firebase
* Initialisation de SonarQube


## Tâches à réaliser pour le 25/03/19
* Création des graphiques	: Utilisation de ng-chart2. Graphiques responsives
* Configuration Raspberry Pi : Config générale, branchements des capteurs
* Développement Raspberry :	Récupération des données émis par chaque capteur


## Tâches à réaliser pour le 23/04/19
* Création d'une API : API CRUD de requête pour la BDD (NodeJS)
* Développement Raspberry :	Envoi des données en BDD (grâce à l'API)
* Authentification Utilisateur : Authentification de l'utilisateur pour accéder aux mesures


## Tâches à réaliser pour le 23/05/19
* Utilisation de l'API dans l'interface web : Visualisation des données grâce aux graphiques
* Création des alertes : l'utilisateur est notifé dans les cas non conformes (l'utilisateur paramètre ses alertes)


## Tâches à réaliser pour le 21/06/19
* Utilisation de l'API météo pour prévision : si terrarium au soleil et que la météo prévoit du beau temps, on prévient l'utilisateur que le terrarium risque d'être en "surchauffe"
* Traitement des données : Mise en corrélation de la luminosité, de la température extérieure et de la température du terrarium (ex : si le terrarium est en plein soleil, la température augmente. Si la température augmente, il y a des chances que l'hygrométrie baisse : on envoi un message de prévention)

