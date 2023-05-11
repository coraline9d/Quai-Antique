# Bienvenue sur le Quai Antique - Paris XVI

## Installation Locale

```bash
git clone git@github.com:coraline9d/Quai-Antique.git
```

```bash
composer install
```

```bash
npm install
```

Ma base de données se trouvant dans le fichier .env.local temporairement disponible, vous n'avez pas besoin de la créer

Concernant le serveur smtp, veuillez remplir vos identifiant et mot de passe, de votre compte mailtrap par exemple, dans le fichier .env.local

```bash
npm run build
```

```bash
composer require easycorp/easyadmin-bundle
```

```bash
php bin/console assets:install --symlink public
```

```bash
symfony serve -d
```

Pour pouvoir déployer le site complètement en local, vous avez besoin d'un serveur local de type Mamp, Xamp, Wamp etc ...

Vous pouvez allumer ce serveur afin d'avoir accès au site sur votre machine

## Création Administrateur

Rendez vous dans src/Controller/UserController

Décommentez la route /administrateur ainsi que la fonction associée

Remplissez vos informations, je précise :
Mot de passe : 14 caratères contenant chiffre, majuscule, minuscule, caractère spécial
Numéré de Téléphone : format (+33625122512)

Tapez maintenant https://127.0.0.1:8001/administrateur , votre compte aura été créer

Vous pouvez donc vous connecter sur https://127.0.0.1:8001/connexion et expérimenter votre expérience administrateur
