# Démarre le microservice "courses" avec le mot de passe SMTP chargé depuis local-mail.ps1 si présent.
# Utilisation (depuis la racine du module courses) : .\scripts\run-with-mail.ps1

$ErrorActionPreference = "Stop"
$moduleRoot = Split-Path -Parent $PSScriptRoot
Set-Location $moduleRoot

$localMail = Join-Path $PSScriptRoot "local-mail.ps1"
if (Test-Path $localMail) {
    . $localMail
    Write-Host "Variables mail chargees depuis scripts\local-mail.ps1" -ForegroundColor Green
}

if (-not $env:SPRING_MAIL_USERNAME -or $env:SPRING_MAIL_USERNAME.Trim().Length -eq 0) {
    Write-Host ""
    Write-Host "ATTENTION : SPRING_MAIL_USERNAME est vide (adresse Gmail d’envoi)." -ForegroundColor Yellow
    Write-Host "Elle doit etre le meme compte que celui du mot de passe d’application." -ForegroundColor Yellow
    Write-Host '  $env:SPRING_MAIL_USERNAME="vous@gmail.com"' -ForegroundColor Cyan
    Write-Host "Ou ajoutez spring.mail.username dans config\mail-secret.properties." -ForegroundColor Yellow
    Write-Host ""
}

if (-not $env:SPRING_MAIL_PASSWORD -or $env:SPRING_MAIL_PASSWORD.Trim().Length -eq 0) {
    Write-Host ""
    Write-Host "ATTENTION : SPRING_MAIL_PASSWORD est vide." -ForegroundColor Yellow
    Write-Host "Option A : copier scripts\local-mail.example.ps1 -> scripts\local-mail.ps1 et renseigner le mot de passe." -ForegroundColor Yellow
    Write-Host "Option B : copier config\mail-secret.properties.example -> config\mail-secret.properties" -ForegroundColor Yellow
    Write-Host "Option C : une seule fois dans cette fenetre PowerShell :" -ForegroundColor Yellow
    Write-Host '  $env:SPRING_MAIL_PASSWORD="abcdefghijklmnop"' -ForegroundColor Cyan
    Write-Host ""
}

$mvnw = Join-Path $moduleRoot "mvnw.cmd"
if (Test-Path $mvnw) {
    & $mvnw @("spring-boot:run")
} elseif (Get-Command mvn -ErrorAction SilentlyContinue) {
    mvn spring-boot:run
} else {
    Write-Error "Maven introuvable : installez Maven ou restaurez mvnw.cmd / le dossier .mvn du wrapper."
}
