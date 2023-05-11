# Bienvenue sur le Quai Antique - Paris XVI

Le Quai Antique est un restaurant ayant pour adresse fictive le 11 rue du Quai - 75016 Paris

## Installation Locale

Pour installer le projet en local, suivez les étapes ci-dessous :

1. Clonez le dépôt :

```bash
git clone git@github.com:coraline9d/Quai-Antique.git
```

2. Installez les dépendances PHP avec Composer :

```bash
composer install
```

3. Installez les dépendances Node.js avec npm :

```bash
npm install
```

4. La base de données se trouve dans le fichier `bash .env.local `, vous n’avez donc pas besoin de la créer.

5. Pour configurer le serveur SMTP, remplissez vos identifiants et mot de passe (par exemple, ceux de Mailtrap) dans le fichier `bash .env.local.  ` .

6. Utilisant Webpack Encore, il faut construire les assets avec npm :

```bash
npm run build
```

7. Installez EasyAdmin avec Composer :

```bash
composer require easycorp/easyadmin-bundle
```

8. Installez les assets d’EasyAdmin :

```bash
php bin/console assets:install --symlink public
```

9. Démarrez le serveur local avec Symfony CLI :

```bash
symfony serve -d
```

10. Pour déployer le site complètement en local, vous aurez besoin d’un serveur local tel que MAMP, XAMPP ou WAMP. Démarrez ce serveur pour accéder au site sur votre machine.

## Création Administrateur

Pour créer un compte administrateur, suivez les étapes ci-dessous :

1. Ouvrez le fichier `bash src/Controller/UserController ` et décommentez la route `bash /administrateur` ainsi que la fonction associée.

2. Remplissez vos informations :
   **Attention :**

   - Mot de passe : 14 caractères contenant des chiffres, des majuscules, des minuscules et des caractères spéciaux
   - Numéro de téléphone : format +33625122512

3. Accédez à l’URL `bash https://127.0.0.1:8001/administrateur` pour créer votre compte.

4. Vous pouvez maintenant vous connecter à l’URL `bashhttps://127.0.0.1:8001/connexion` et expérimenter votre expérience en tant qu’administrateur.
