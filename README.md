# Vgs

Le site de la **Team VGS** est un site de lecture de scan.

## Installation

- Installation des node_modules avec la commande : `npm i -D`.
- Importer la base de donnée **vgs.sql** se situant dans : `packages\SiteVGS\bdd\vgs.sql` sur un serveur de base de données.
- Changer les paramètres pour la BDD si besoin des fichiers :
  - `packages\SiteVGS\bdd\connection_bdd.php`
  - `packages\SiteVGS\function\db.class.php`
- Lancer le serveur de base de données.

## Commande NX

- Pour lancer le site localement, on utilise la commande : **serve** depuis la **NX Console** ou bien par ligne de commande : `npx nx run sitevgs:serve`
- Pour lancer les tests e2e, on peut lancer la commande : **e2e** depuis la **NX Console** ou bien par ligne de commande : `npx nx run site-vgs-e2e:e2e`
  -> La commande : **serve-d** sert à la commande : **e2e** pour lancer le site web en détaché.

## Problème possible lors de l'installation

- Changer dans le **php.ini** du dossier **PHP**: l'**extension_dir** vers le dossier **ext** de son dossier **PHP**. Exemple : `extension_dir = "C:\Program Files\php-8.2.0\ext"`
