# Letterheld — finaal test- en regressierapport

**Testdatum:** 14 oktober 2026  
**Eindversie:** 1.0.0  
**Resultaat:** 9/9 statische/integratiecontroles geslaagd; 17/17 Node-tests geslaagd; 30/30 JavaScriptbestanden door `node --check`.

## Uitgevoerde tests

### Syntax
- `node --check` op 30 `.js`/`.mjs`-bestanden: **PASS**.
- JSON en `manifest.webmanifest` parse: **PASS**.
- CSS-accolades in balans: **PASS**.

### Unit, generator en content
De dependencyvrije Node-suite `tests/run-tests.mjs` bevat 17 controles. Alle controles slaagden:
- opslag get/set/remove/reset en fallback;
- legacymigratie naar `schemaVersion: 1`;
- drie resetniveaus;
- beloningen `earn`, `spend`, `canAfford`, `unlock`;
- spraakfallback en repeat;
- moeilijkheidsresolutie en tijdelijke override;
- unieke module-ids;
- letterluistervragen met 2, 3, 4 en 6 unieke keuzes;
- getalbereiken 10, 20, 50 en 100 met unieke afleiders;
- 500 rekenvragen binnen bereik en zonder negatieve uitkomst;
- 100 vragen “hoeveel samen”;
- 100 producten;
- 100 exact deelbare delingen;
- volledig rijk woordmodel en baselineverdeling 6/9/5 woorden;
- technische leerdoelfilter;
- PWA-manifest en expliciete cacheversie.

### Architectuur- en integratiecontrole
- direct localStorage alleen store: **PASS**
- direct speech alleen speech service: **PASS**
- geen Android API in modules: **PASS**
- geen runtime CDN: **PASS**
- alle relatieve imports bestaan: **PASS**
- HTML-referenties bestaan: **PASS**
- JSON/manifest geldig: **PASS**
- CSS accolades in balans: **PASS**
- alle service-worker assets HTTP 200: **PASS**

### Lokale HTTP-controle
Alle 42 in `sw.js` vastgelegde app-shell/assets zijn via een lokale HTTP-server opgevraagd en gaven HTTP 200: **PASS**.

### Browser, console en viewports
Playwright kon niet starten omdat geen browserbinary in de uitvoeromgeving is geïnstalleerd. De poging is geregistreerd; er is geen browsertest als geslaagd geclaimd.

Daarom zijn geen claims gedaan over een echte gerenderde browserconsole, installprompt, gesproken audio of pixelmatige layout. De responsive CSS is wel statisch gecontroleerd voor 320px, 600px, 761px en laag landschap; een handmatige matrix staat in `README.md` en `docs/REGRESSIECHECKLIST.md`.

## Bijsturingen tijdens testen
- Fisher–Yates-shuffle gebruikt in plaats van `sort(() => Math.random() - .5)`.
- Unieke afleiders centraal afgedwongen.
- Rekengenerator begrenst resultaten en houdt aftrekkingen niet-negatief.
- Deelgenerator maakt uitsluitend exact deelbare vragen.
- Store- en spraakfallbacks zijn no-throw.
- Service-worker-assets zijn volledig via lokale HTTP 200 gecontroleerd.

## Git
- Werkelijk uitgevoerd: één geconsolideerde commit `zie git rev-parse HEAD` met boodschap `feat: complete Letterheld web app through package 28`.
- Werkelijk uitgevoerd: tag `v1.0.0`.
- Niet uitgevoerd: afzonderlijke historische commits/tags per pakket. De ontwikkeling gebeurde in één geconsolideerde werkmap; achteraf lege of misleidende pakketcommits maken zou geen betrouwbare geschiedenis opleveren.

## Finale beperkingen
- Handmatige browser-/apparaatcontrole blijft nodig vóór publieke ingebruikname.
- Installatie/offline vereist HTTPS of localhost.
- Spraakkwaliteit en beschikbare `nl-BE`-stem verschillen per browser/OS.
- Onderwijsdoelenlaag bevat expres alleen een technische placeholder; geen onbevestigde leeftijds-/leerplanmapping.
