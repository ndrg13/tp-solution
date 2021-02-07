# TP : Convertisseur de devises

## Créez 2 routes / et /404

- Ajoutez le router sur l'application
- Il y a deux composants de pages à créer (convertisseur et 404)
- pour le contenu de la page 404 vous êtes libre
- le contenu HTML de la page du convertisseur est présent dans App.
- toutes les routes autres que '/' doivent aboutir à la page 404

## Développez le convertisseur

- Découper et organisez l'application de façon optimale
- Pour effectuer la conversion pour pouvez utliseer l'API gratuite : https://exchangeratesapi.io/
  Lisez la documentation pour connaitre son fonctionnement
- le résultat de la conversion devra s'afficher devant le libellé "Résultat :"
- L'appel au web service API ne devra se faire que si le montant saisi est différent de zéro et chaque fois que l'on modifie un des 3 champs.
- Affichez le spinner (fourni) pendant chaque appel de service
- le champ de saisie du montant devra se mettre en erreur si des caractères autre des chiffres sont saisis (ajoute la classe "invalid")
- le champ de saisie du montant devra se mettre en valide si des caractères autre des chiffres sont saisis (ajoute la classe "valid")
  pour plus d'info sur les classes de validation : https://materializecss.com/text-inputs.html

> Aide : pour mettre une valeur par défault sur le champ : M.updateTextFields();

> Note : l'API se met en erreur si on EUR -> EUR, il faudra gérer ce cas pour afficher juste le montant saisi comme résultat

Vous pouvez voir le résultat attendu avec le gif situé dans le dossier /public
