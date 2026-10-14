# Letterheld — Pakket 0: Baseline en regressiechecklist

**Datum:** 14 oktober 2026  
**Baseline:** `index 7.html` (door de gebruiker bevestigd als actuele werkende referentie)  
**Scope:** uitsluitend Pakket 0; Pakket 1 is niet gestart.  
**Applicatiecode gewijzigd:** nee.

## 1. PAKKET

**Pakket 0 — Baseline en regressiechecklist**

## 2. DOEL

De huidige standalone browserversie vastleggen zonder functionaliteit, vormgeving of architectuur te wijzigen. Dit document inventariseert de schermen, gebruikersstromen, oefeningen, opslagkeys, spraakwerking, mobiele CSS-baseline en regressiecontroles. Het vormt de referentie voor latere werkpakketten.

## 3. GEWIJZIGDE BESTANDEN

- `docs/pakket-0-baseline-en-regressiechecklist.md` — nieuw; dit document.
- `docs/baseline-manifest.json` — nieuw; machineleesbare baselinegegevens en teststatus.
- `docs/git-commit-en-tag.txt` — nieuw; exacte Git-instructies.
- `index 7.html` — **niet gewijzigd**.

> De oorspronkelijke `index 7.html` is niet opnieuw gegenereerd of gekopieerd. De enterpriseweergave maakte de inhoud volledig leesbaar, maar stelde het bestand niet als fysiek bestand beschikbaar in de uitvoersandbox. Het oorspronkelijk aangeleverde bestand blijft daarom het bronartefact.

## 4. FUNCTIONELE WIJZIGINGEN

- Geen.
- Geen framework, dependency, externe asset, service worker of manifest toegevoegd.
- Geen centrale opslag-, spraak- of beloningsservice geïntroduceerd; dat hoort bij latere pakketten.
- Geen CSS afgesplitst; Pakket 1 is niet gestart.

## 5. BASELINE-INVENTARIS

### 5.1 App-shell en navigatie

- Onboarding staat buiten de interne `screen`-router en toont naamveld, 8 symbolen en startknop.
- Header bevat merkknop, homeknop buiten het startscherm, spelerssymbool en sterrenteller.
- De interne schermtabel registreert 16 schermfuncties: `home`, `alphabet`, `games`, `numbers`, `numberLearn`, `numberListen`, `math`, `words`, `wordBuild`, `wordPick`, `sounds`, `soundContains`, `soundFind`, `soundStart`, `memory`, `shop`.
- Via de huidige UI zijn 14 app-schermen bereikbaar. `games` en `memory` hebben geen navigatiekoppeling.

### 5.2 Bereikbare gebruikersstromen

#### A. Onboarding

- Naam invoeren, maximaal 20 tekens.
- Symbool kiezen uit: Traktor, Peer, Leeuw, Dino, Aap, Brandweer, Raket of Voetbal.
- De startknop is alleen actief wanneer naam en symbool aanwezig zijn.
- Baseline-aandachtspunt: wanneer eerst een naam wordt ingevuld en daarna een symbool wordt gekozen, roept de symboolklik meteen `welcome()` aan. Omdat naam en symbool dan gezet zijn, opent de app zonder de startknop te gebruiken en zonder `save()` uit te voeren. Na herladen kan de onboarding daardoor terugkomen. Dit is in Pakket 0 bewust niet gecorrigeerd.

#### B. Startscherm

Vier tegels:
1. Letters
2. Cijfers & rekenen
3. Woorden
4. Sterrenwinkel

#### C. Letters — `alphabet`

- 26 hoofdletters A-Z.
- Standaardselectie: E.
- Per letter: grote letter, emoji, voorbeeldwoord, losse klank en zin “Dit is de … van …”.
- Een klik op een letter selecteert ze, spreekt de voorbeeldzin en rendert opnieuw.

#### D. Cijfers & rekenen — `numbers`

1. **Cijfers leren — `numberLearn`**
   - Cijfers 0 t.e.m. 10.
   - Cijfernaam, visuele sterrenhoeveelheid (0 als ∅) en uitspraak.
2. **Luister naar een cijfer — `numberListen`**
   - Gesproken opdracht; vier antwoordkeuzes.
   - Correct: ster, lofzin en confetti. Fout: mondelinge en visuele feedback.
3. **Optellen en aftrekken — `math`**
   - Afwisselend optellen en aftrekken.
   - Antwoorden 0 t.e.m. 10; vier keuzes.
   - Visuele ondersteuning is op een deel van de rondes zichtbaar.
   - Herhaalknop voor de gesproken som.

#### E. Woorden en klanken — `words`

Niveaukeuze: 3, 4 of 5 letters.

1. **Bouw het woord — `wordBuild`**
   - Emoji + gesproken woord.
   - Letters in willekeurige volgorde.
   - Acties: laatste letter weg, opnieuw beginnen, opnieuw luisteren.
   - Correct: ster/lof/confetti; fout voltooid woord blijft herstelbaar.
2. **Zoek het woord — `wordPick`**
   - Emoji, gesproken vraag en vier geschreven woordkeuzes van dezelfde lengte.
3. **Klanken in woorden — `sounds`**
   - **Hoor je de klank? — `soundContains`**: ja/nee; woord staat bewust niet in beeld; aparte knoppen voor klank, woord en volledige vraag.
   - **Waar hoor je de klank? — `soundFind`**: kies uit vier emoji-/woordopties.
   - **Welke beginletter? — `soundStart`**: kies het woord met de gevraagde beginletter.

Woorddata: 20 woorden — 6 van 3 letters, 9 van 4 letters en 5 van 5 letters. De klankoefeningen gebruiken de 15 woorden van 3 of 4 letters.

#### F. Sterrenwinkel — `shop`

- 6 beloningen: Regenboog (5), Ballon (8), Kroon (12), Raket (15), Dinoschat (20) en Trofee (25).
- Aankoop trekt sterren af en bewaart de reward-index in `owned`.
- Gekochte beloningen verschijnen als verzameling en kunnen niet opnieuw worden gekocht.

### 5.3 Niet bereikbare/dormante code

- `memory`: rendert 12 kaarten met zes letterparen, maar er is geen tegel/link naar dit scherm en de centrale klikhandler verwerkt `data-mid` niet. Het is dus geen functioneel bereikbare oefening in deze baseline.
- `games`: staat in de schermtabel maar retourneert alleen het startscherm; er is geen UI-link.
- De auto-spraaklijst bevat ook `listen` en `case`, maar voor die schermnamen bestaat geen renderer of navigatie. Dit is inert in de huidige bereikbare stroom.
- `soundLevel` staat in de status maar wordt niet gebruikt.

## 6. OPSLAGBASELINE

### 6.1 Persistente keys

| Key | Schrijfvorm | Leesdefault | Betekenis |
|---|---|---|---|
| `name` | string | `''` | spelersnaam |
| `symbol` | JSON-string | `'null'` | array `[emoji, label]` |
| `stars` | string via opslag | `'0'`, daarna numeriek met `+` | huidig sterrensaldo |
| `owned` | JSON-string | `'[]'` | array met indices van gekochte beloningen |

Tijdelijke probe-key: `_x`. De Store zet `_x='1'` en verwijdert hem onmiddellijk om te testen of `localStorage` beschikbaar is.

### 6.2 Store-gedrag

- Bij beschikbare opslag gebruikt `get` `localStorage.getItem`, met default via nullish coalescing.
- `set` schrijft waarden naar `localStorage`; de geheugenfallback bewaart `String(v)`.
- `del` verwijdert één key, maar wordt in de huidige gebruikersstromen niet gebruikt.
- Als de initiële opslagprobe mislukt, gebruikt de app een in-memory object. Die data verdwijnt bij herladen.
- Als een latere opslagaanroep ondanks een succesvolle probe faalt, wordt de fout opgevangen en valt `get` terug op memory/default; `set` schrijft dan naar memory.
- Er is nog geen reset-API, profielobject, `schemaVersion` of migratiepad.
- Baseline-risico: corrupte JSON in `symbol` of `owned` kan bij initialisatie een ongecatchte `JSON.parse`-fout veroorzaken.

## 7. SPRAAKBASELINE

### 7.1 Techniek

- Web Speech API via `speechSynthesis` en `SpeechSynthesisUtterance`.
- Als `speechSynthesis` ontbreekt: stille no-op; de app crasht op die codeweg niet.
- Voor elke nieuwe uiting wordt de vorige spraak geannuleerd.
- Locale: `nl-BE`.
- Tempo: normaal `0.88`; traag `0.68`.
- Geen stemkeuze, wachtrijbeleid, instellingenmenu of aparte service.

### 7.2 Gebruiksplaatsen

- Letters: letterselectie, losse klank, voorbeeldzin.
- Cijfers leren: cijfernaam via cijfertegel en grote cijferknop.
- Automatische opdracht na rendering: `numberListen`, `math`, `soundContains`, `soundFind`, `soundStart` (250 ms vertraging, traag tempo).
- Herhalen: volledige actuele opdracht via `S.current.say`.
- Klanken: afzonderlijk klankwoord en volledig woord.
- Woord bouwen: woord afspelen en opnieuw luisteren.
- Feedback: lof bij correct antwoord; aanmoediging bij fout antwoord; specifieke herstelzin bij fout voltooid woord.

## 8. REGRESSIECHECKLIST

Gebruik deze lijst vóór en na elk volgend pakket. Noteer browser, viewport, resultaat en eventuele consolemelding.

### 8.1 Opstart en onboarding

- [ ] `index 7.html` opent rechtstreeks zonder buildstap of netwerkdependency.
- [ ] Nieuwe gebruiker ziet onboarding; app is verborgen.
- [ ] Startknop blijft uitgeschakeld zonder volledige invoer.
- [ ] Alle 8 symbolen zijn selecteerbaar en de selectie is zichtbaar.
- [ ] Geldige naam + symbool opent de app.
- [ ] Na expliciete start en herladen blijven naam en symbool behouden.
- [ ] Onboardinggedrag “naam eerst, daarna symbool” is gekend en niet onbedoeld veranderd.

### 8.2 Shell en startscherm

- [ ] Startscherm toont vier hoofdtegels.
- [ ] Naam, gekozen symbool en sterrensaldo worden correct weergegeven.
- [ ] Merkknop en homeknop keren vanuit elk bereikbaar subscherm terug naar home.
- [ ] Homeknop is verborgen op home en zichtbaar op subschermen.

### 8.3 Letters

- [ ] A-Z zijn zichtbaar en selecteerbaar.
- [ ] Standaardletter E verschijnt bij verse sessie.
- [ ] Grote letter, emoji en voorbeeldwoord volgen de selectie.
- [ ] Losse klank speelt af; voorbeeldzin speelt af.

### 8.4 Cijfers en rekenen

- [ ] Cijfers leren toont 0-10, correcte naam en visuele hoeveelheid.
- [ ] Cijferknoppen spreken de gekozen waarde uit.
- [ ] Cijferluisteren start met gesproken opdracht en vier unieke opties.
- [ ] Correct antwoord geeft exact +1 ster; fout antwoord geeft geen ster.
- [ ] Volgende ronde verandert de vraag.
- [ ] Optellen en aftrekken leveren geldige, niet-negatieve uitkomsten 0-10.
- [ ] Herhaalknop spreekt de actuele som opnieuw uit.

### 8.5 Woorden en klanken

- [ ] Niveau 3/4/5 wisselt de woordpool.
- [ ] Woord bouwen laat iedere letterpositie één keer gebruiken.
- [ ] Ongedaan maken en reset werken vóór een correct antwoord.
- [ ] Correct woord geeft +1 ster; fout compleet woord blijft herstelbaar.
- [ ] Zoek het woord toont vier keuzes van dezelfde lengte.
- [ ] Elke klankoefening start, spreekt de opdracht en bevat het juiste antwoord.
- [ ] `soundContains` toont woord niet vooraf en biedt klank/woord/vraag apart aan.
- [ ] `soundFind` en `soundStart` tonen voldoende afleiders.

### 8.6 Beloning en winkel

- [ ] Sterrenteller stijgt bij elk correct antwoord met 1.
- [ ] Confetti blokkeert geen interactie en verdwijnt.
- [ ] Onbetaalbare items zijn uitgeschakeld.
- [ ] Koop trekt exact de prijs af, bewaart het item en voorkomt heraankoop.
- [ ] Stars en `owned` blijven na herladen behouden.

### 8.7 Fallbacks

- [ ] Zonder `speechSynthesis` blijven schermen en antwoorden bruikbaar.
- [ ] Bij geblokkeerde `localStorage` blijft de sessie bruikbaar via memoryfallback.
- [ ] Geen ongefilterde console-errors in de hoofdflows.

### 8.8 Mobiele matrix

Minimaal voor Pakket 0: 320 × 568 px portret. Voor volgende pakketten herhalen op 320 × 568, 390 × 844, 844 × 390, tablet en desktop.

- [ ] Geen horizontale overflow.
- [ ] Header blijft bedienbaar.
- [ ] Antwoordknoppen blijven aantikbaar.
- [ ] Belangrijkste opdracht + antwoordzone zijn bruikbaar.
- [ ] Scroll is mogelijk waar de baseline-inhoud hoger is dan de viewport.

## 9. UITGEVOERDE TESTS

### 9.1 Wel uitgevoerd

1. **Volledige bronreview** van de aangeleverde HTML via enterprise-documentweergave.
2. **Scopecontrole:** geen applicatiecode, CSS, data of afhankelijkheid gewijzigd.
3. **Statische navigatie-audit:** schermtabel, UI-links en niet-bereikbare schermen vergeleken.
4. **Statische opslag-audit:** alle keys, defaults, probe en fallbackpaden geïnventariseerd.
5. **Statische spraak-audit:** API, locale, tempo en alle aanroepen geïnventariseerd.
6. **Geautomatiseerde bronformule-/datatests (Python, zonder dependency):**
   - woordpools bevatten respectievelijk 6, 9 en 5 woorden;
   - 1.000 gesimuleerde rekenspelrondes geven uitkomsten 0-10 en geen negatieve aftrekkingen;
   - cijferluisteren doorloopt in 11 rondes elk cijfer 0-10 exact één keer;
   - `soundFind` heeft in de huidige 15-woordenpool voor iedere berekende doelcombinatie minstens 3 geldige afleiders;
   - `soundStart` heeft eveneens minstens 3 geldige afleiders.
7. **Statische mobile audit:** viewport-meta aanwezig; mediaquery op 760 px; op smal scherm worden hoofdgrids 1 of 2 kolommen, letters/cijfers 5 kolommen, antwoorden 2 kolommen en memory 3 kolommen.

### 9.2 Niet uitvoerbaar in deze omgeving

- **Exacte JavaScript-parsercheck op het aangeleverde bestand:** Node.js is beschikbaar, maar het SharePoint/enterprise-bestand was niet als fysiek bestand in de sandbox gemount. Het zou onbetrouwbaar zijn de code handmatig te reconstrueren en die kopie als exact te bestempelen.
- **Browserconsole- en interactietest:** er is geen Chromium/Firefox-binary beschikbaar; Playwright is aanwezig maar heeft geen geïnstalleerde browserbinary.
- **Werkelijke viewporttest op 320 × 568 px:** om dezelfde reden alleen statisch beoordeeld, niet gerenderd.
- **Spraak-audiotest:** vereist een browser met Web Speech API en geïnstalleerde stem.

### 9.3 Concrete mobiele baseline-observaties uit de CSS

- De bron gebruikt `min-height: 100vh`, nog niet `100dvh`.
- Op ≤760 px wordt het startscherm één kolom; vier kaarten van minimaal 170 px plus titel/header maken verticale scroll op kleine telefoons te verwachten.
- Het letterscherm stapelt oefenpaneel en alfabet; 26 letters in vijf kolommen vragen zes rijen en dus waarschijnlijk scroll.
- Onboarding toont acht symbolen in twee kolommen, naast titel, invoer en startactie; ook daar is scroll op 320 × 568 waarschijnlijk.
- Er is geen afzonderlijke safe-area-inset-regel.
- Dit zijn **bronobservaties**, geen gemeten renderresultaten; Pakket 0 wijzigt ze niet.

## 10. BEKENDE BEPERKINGEN

- Browserruntime, console en 320 × 568-rendering zijn nog niet aantoonbaar uitgevoerd.
- De exacte bronchecksum kon niet worden berekend doordat de attachment niet als bestand in de sandbox beschikbaar was.
- Git-write toegang tot de projectrepository ontbreekt; commit en tag zijn niet uitgevoerd.
- Onboarding kan de startknop omzeilen en data niet bewaren wanneer naam vóór symbool wordt ingevoerd.
- `memory` en `games` zijn dormant/niet bereikbaar; memorykaartklikken worden niet afgehandeld.
- Corrupte JSON in `symbol` of `owned` kan initialisatie breken.
- Willekeurig schudden gebruikt `sort(() => Math.random() - .5)`; geen deterministische testseed.
- Spraaklocale en tempo zijn hard gecodeerd.
- De huidige monolithische bron bevat CSS, data, state, opslag, spraak en oefenlogica in één bestand; dit is baseline, geen wijziging in Pakket 0.

## 11. COMMIT

**Niet uitgevoerd:** geen toegang tot de feitelijke Git-werkboom/repository.

Voorgestelde afzonderlijke commit:

```bash
git add docs/pakket-0-baseline-en-regressiechecklist.md \
        docs/baseline-manifest.json \
        docs/git-commit-en-tag.txt
git commit -m "docs: establish standalone baseline"
```

## 12. TAGSTATUS

**`v0.1-standalone-baseline`: niet aangemaakt** wegens ontbrekende repository-/Git-write toegang.

Na succesvolle runtimecontrole en commit:

```bash
git tag -a v0.1-standalone-baseline -m "Letterheld standalone baseline"
git show --stat --oneline v0.1-standalone-baseline
git tag --list "v0.1-standalone-baseline"
```

Aanbevolen verificatie vóór tagging:

```bash
# JavaScript uit de inline <script> extraheren naar een tijdelijk bestand,
# of in DevTools controleren; daarna:
node --check /pad/naar/tijdelijk-script.js

# Controleer dat alleen documentatie gewijzigd is:
git diff --stat HEAD~1..HEAD
git diff -- exit-code -- "index 7.html"
```

## 13. ACCEPTATIESTATUS PAKKET 0

**Gedeeltelijk aantoonbaar opgeleverd.** Inventaris, baseline, regressiechecklist, scopebewaking, statische audits en logische datatests zijn compleet. Volledige acceptatie blijft afhankelijk van drie projectlokale acties: (1) runtime-/consolecheck in een echte browser, (2) mobiele rendercheck, en (3) uitvoeren van de afzonderlijke commit en tag in de echte repository.

**Stop:** Pakket 1 is niet uitgevoerd of voorbereid in de bron.
