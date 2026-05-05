# Instructions :
# 1) Copiez ce fichier vers local-mail.ps1 (dans le même dossier scripts/).
# 2) Renseignez la même adresse Gmail que celle utilisée pour générer le mot de passe d’application.
# 3) Remplacez le mot de passe par les 16 caractères (sans espaces).
# 4) Lancez l’appli avec : .\scripts\run-with-mail.ps1
#
# local-mail.ps1 est ignoré par Git.

$env:SPRING_MAIL_USERNAME = "VOTRE_ADRESSE_GMAIL@gmail.com"
$env:SPRING_MAIL_PASSWORD = "REMPLACEZ_PAR_VOTRE_MOT_DE_PASSE_APPLICATION"
