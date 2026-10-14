# Finale regressiechecklist

## Onboarding en profiel
- [ ] Naam + symbool kiezen; Start activeert pas wanneer beide aanwezig zijn.
- [ ] Na herladen blijven naam, symbool, sterren en inventory behouden.
- [ ] Legacysleutels `name`, `symbol`, `stars`, `owned` migreren naar `letterheld.profile`.

## Hoofdflows
- [ ] Alle starttegels openen en Home/Terug werkt.
- [ ] Letters ontdekken: A–Z, klank en voorbeeldzin.
- [ ] Letterluisteren: 2/3/4/6 keuzes volgens moeilijkheid en herhalen.
- [ ] Cijfers leren en luisteren binnen 10/20/50/100.
- [ ] Optellen/aftrekken en Hoeveel samen.
- [ ] Producten en exact deelbare delingen.
- [ ] Woorden bouwen, zoeken en beginletter herkennen op 3/4/5 letters.
- [ ] Goed antwoord geeft exact één ster; fout antwoord crasht niet.
- [ ] Winkel kopen, onvoldoende saldo blokkeren, avataritem uitrusten.
- [ ] Pretlab is gesloten vóór aankoop en bruikbaar na unlock.

## Instellingen en resets
- [ ] Naam, symbool, moeilijkheid, schermgrootte, spraaktempo en geluid bewaren.
- [ ] Progressreset behoudt profiel/beloningen.
- [ ] Rewardreset behoudt naam/instellingen.
- [ ] Volledige reset toont onboarding.

## Mobiele matrix
- [ ] 320×568 portret.
- [ ] 390×844 portret.
- [ ] 844×390 landschap.
- [ ] 768×1024 tablet.
- [ ] 1440×900 desktop.
- [ ] Geen clipping/overlap; knoppen bruikbaar; safe areas gerespecteerd.

## PWA
- [ ] Manifest zonder fouten.
- [ ] Service worker activeert op HTTPS/localhost.
- [ ] Na eerste online bezoek werkt herladen offline.
- [ ] Nieuwe cacheversie + harde refresh levert nieuwe assets.
