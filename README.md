# Letterheld 1.0 — uploadklare webapp

Letterheld is een statische, mobile-first browserapp zonder framework, buildstap, backend of runtime-CDN. De gehoste app bevat letters, cijfers, rekenen, woorden en klanken, producten, exact delen, sterren, avatarwinkel, instellingen, een vrijspeelbaar Pretlab en PWA/offline-ondersteuning.

## Direct uploaden
1. Pak `Letterheld_volledig_project.zip` lokaal uit.
2. Upload **de inhoud van de map `letterheld/`** naar de documentroot van uw statische webhost. Upload dus `index.html`, `manifest.webmanifest` en `sw.js` in de root, naast de mappen `css/`, `js/`, `modules/`, `data/` en `assets/`.
3. Behoud alle bestandsnamen, hoofdletters en relatieve mappen exact.
4. Open `https://uw-domein.example/index.html`. `index.html` is de startpagina.
5. Gebruik HTTPS. De gewone webapp werkt via HTTP, maar installatie en service-worker/offlinefunctionaliteit vereisen in productie een veilige context.

## Eerste controle na upload
- Onboarding: naam en symbool kiezen, starten en pagina herladen.
- Startscherm: open elke module en keer met Home/Terug terug.
- Spraak: test minstens één letter, cijfer en herhaalknop; zonder browserstem hoort de app niet te crashen.
- Beloning: beantwoord een oefening goed, controleer +1 ster en herlaad.
- Winkel: verzamel voldoende sterren, koop een item en rust het uit.
- Instellingen: wijzig moeilijkheid/spraaktempo en controleer behoud na herladen.
- Mobiel: controleer 320×568, 390×844, 844×390, tablet en desktop; let op overlap en afgeknepen knoppen.
- PWA: controleer in browserontwikkelaarstools Manifest en Service Worker, zet netwerk op Offline en herlaad.

## Updates en PWA-cache
Bij elke publicatie waarbij gecachete bestanden wijzigen: verhoog `CACHE` bovenaan `sw.js` (bijvoorbeeld `letterheld-v1.0.1`) en upload **alle** gewijzigde bestanden plus `sw.js`. Sluit oude tabbladen en voer een harde refresh uit (`Ctrl+Shift+R`/`Ctrl+F5`; op macOS `Shift+Command+R`). In ontwikkelaarstools kunt u de service worker tijdelijk unregisteren of “Update on reload” gebruiken.

## Lokaal testen zonder projectdependency
Vanuit de projectmap:
```bash
python3 -m http.server 8000
```
Open daarna `http://localhost:8000`. Open `index.html` niet rechtstreeks via `file://`, omdat ES-modules en de PWA-serviceworker een webservercontext verwachten.

## Tests
```bash
node --check js/app.js
npm test
```
`npm test` installeert niets en gebruikt alleen Node.js. Zie `docs/TESTRAPPORT.md` voor wat wel en niet in de opleveromgeving is uitgevoerd.

## Privacy en data
Profielgegevens blijven lokaal in de browser. De app bevat geen account, advertenties, analytics of externe runtime-assets.
