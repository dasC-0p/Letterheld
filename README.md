# Letterheld

Letterheld is een zelfstandige, Nederlandstalige webapp voor jonge kinderen die spelenderwijs letters leren herkennen en uitspreken. De app werkt volledig vanuit één bestand: `index.html`.

De huidige versie is geschikt voor lokaal gebruik en voor publicatie via GitHub Pages. Er zijn geen externe bibliotheken, npm-pakketten, servers of databanken nodig.

## Inhoud

- [Functies](#functies)
- [Voor wie is de app bedoeld?](#voor-wie-is-de-app-bedoeld)
- [Technische opbouw](#technische-opbouw)
- [Bestanden](#bestanden)
- [App lokaal gebruiken](#app-lokaal-gebruiken)
- [Publiceren via GitHub Pages](#publiceren-via-github-pages)
- [GitHub-publicatie controleren](#github-publicatie-controleren)
- [De app bijwerken](#de-app-bijwerken)
- [Persoonlijke instellingen en opslag](#persoonlijke-instellingen-en-opslag)
- [Voorleesfunctie](#voorleesfunctie)
- [Letterweergave en letterklanken](#letterweergave-en-letterklanken)
- [Spellen](#spellen)
- [Sterren en beloningen](#sterren-en-beloningen)
- [Inhoud aanpassen](#inhoud-aanpassen)
- [Probleemoplossing](#probleemoplossing)
- [Privacy en veiligheid](#privacy-en-veiligheid)
- [Mogelijke uitbreidingen](#mogelijke-uitbreidingen)

## Functies

Letterheld bevat onder meer:

- een persoonlijke begroeting;
- invoer van de naam van het kind;
- keuze van een persoonlijk symbool, waaronder een traktor en een peer;
- ontdekking van alle letters van het alfabet;
- afzonderlijke uitspraak van letterklanken;
- voorbeeldzinnen zoals: `Dit is de E van eend.`;
- een spel om de juiste letter te vinden;
- een luisterspel met letterklanken;
- een oefening rond hoofdletters en kleine letters;
- een spel om dieren te herkennen;
- lettermemory;
- persoonlijke positieve feedback met de naam van het kind;
- sterren als beloning voor goede antwoorden;
- een sterrenwinkel waarin sterren kunnen worden ingeruild;
- veilige lokale opslag met een tijdelijke geheugenmodus wanneer opslag is geblokkeerd;
- een responsieve vormgeving voor computer, tablet en smartphone.

## Voor wie is de app bedoeld?

De app is ontworpen voor jonge kinderen die kennismaken met:

- het alfabet;
- lettervormen;
- hoofdletters en kleine letters;
- letterklanken;
- eenvoudige woorden;
- visuele herkenning.

De bediening gebruikt grote knoppen, kleuren, symbolen, gesproken opdrachten en korte teksten.

## Technische opbouw

Letterheld is een zogenaamde standalone webapp. Alle onderdelen bevinden zich in één HTML-bestand:

- HTML voor de schermen en structuur;
- CSS voor de vormgeving en animaties;
- JavaScript voor de spellen, personalisatie, spraak en opslag.

De app gebruikt geen:

- React;
- Node.js;
- npm;
- externe databank;
- externe API;
- externe JavaScript- of CSS-bibliotheek.

Hierdoor kan het bestand rechtstreeks in een moderne browser worden geopend.

## Bestanden

De minimale projectstructuur is:

```text
letterheld/
├── index.html
└── README.md
```

### `index.html`

Dit is de volledige applicatie. GitHub Pages gebruikt dit bestand automatisch als startpagina.

### `README.md`

Dit bestand bevat de documentatie van het project en wordt automatisch getoond op de hoofdpagina van de GitHub-repository.

## App lokaal gebruiken

1. Download `index.html`.
2. Bewaar het bestand op je computer.
3. Dubbelklik op `index.html`.
4. De app opent in je standaardbrowser.
5. Vul een naam in.
6. Kies een symbool.
7. Klik op **Start mijn avontuur**.

Er is geen installatie nodig.

### Aanbevolen browsers

Gebruik bij voorkeur een actuele versie van:

- Microsoft Edge;
- Google Chrome;
- Mozilla Firefox;
- Safari.

De uitspraak van de letters kan enigszins verschillen per browser, besturingssysteem en geïnstalleerde Nederlandse stem.


## Persoonlijke instellingen en opslag

De app bewaart waar mogelijk:

- de naam van het kind;
- het gekozen symbool;
- het aantal sterren;
- de verzamelde beloningen.

Hiervoor gebruikt de app een veilige opslaglaag.

### Wanneer browseropslag beschikbaar is

De gegevens worden lokaal in de browser bewaard. Ze blijven beschikbaar wanneer de app later opnieuw op hetzelfde toestel en in dezelfde browser wordt geopend.

### Wanneer browseropslag is geblokkeerd

De app valt automatisch terug op tijdelijk geheugen. Alle functies blijven werken, maar de naam, het symbool, de sterren en de beloningen verdwijnen zodra de pagina of previewsessie volledig wordt afgesloten.

### Belangrijk

De voortgang wordt niet tussen verschillende toestellen of browsers gesynchroniseerd. Er is geen online gebruikersaccount of centrale databank.

## Voorleesfunctie

De app gebruikt de ingebouwde spraakfunctie van de browser via `speechSynthesis`.

De ingestelde taal is:

```javascript
u.lang = 'nl-BE';
```

De browser kiest een beschikbare Nederlandse stem. Wanneer geen Belgische Nederlandse stem aanwezig is, kan de browser een andere Nederlandstalige stem gebruiken.

### Voorbeeldzin

Bij de letter E wordt uitgesproken:

```text
Dit is de E van eend.
```

De letter wordt in deze zin maar één keer benoemd.

### Afzonderlijke letterklank

Wanneer het kind op de grote letter E klikt, hoort het:

```text
eeeee
```

De letterklank staat los van de voorbeeldzin.

## Letterweergave en letterklanken

De letters staan in JavaScript in de constante:

```javascript
const L = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
```

De voorbeeldwoorden en symbolen staan in `DATA`.

Een vereenvoudigd voorbeeld:

```javascript
['E', 'EEND', '🦆']
```

De afzonderlijke klanken staan in `SOUND`.

Een vereenvoudigd voorbeeld:

```javascript
E: 'eeeee'
```

Let op: letterklanken worden door synthetische spraak benaderd. Voor volledig gecontroleerde fonetische uitspraak zijn afzonderlijke opgenomen audiobestanden een mogelijke latere uitbreiding.

## Spellen

### Letters ontdekken

Het kind kiest een letter uit het alfabet.

- Klik op de grote letter om de klank te horen.
- Klik op de voorbeeldknop om de voorbeeldzin te horen.

### Vind de letter

De app vraagt om een specifieke letter aan te klikken. Een juist antwoord levert een ster op.

### Luisterspel

De app spreekt een letterklank uit. Het kind kiest de bijbehorende letter uit vier mogelijkheden.

### Groot of klein

De app vraagt afwisselend naar een hoofdletter of kleine letter. Het kind kiest de juiste vorm uit vier mogelijkheden.

### Zoek het dier

De app noemt een dier. Het kind kiest het juiste dierensymbool.

### Lettermemory

Het kind zoekt twee gelijke letters. Wanneer alle paren zijn gevonden, wordt een ster toegekend.

## Sterren en beloningen

Een correct antwoord levert één ster op. De sterren worden bovenaan de app weergegeven.

In de sterrenwinkel kunnen sterren worden ingeruild voor virtuele beloningen, waaronder:

- regenboog;
- ballon;
- kroon;
- raket;
- dinoschat;
- trofee.

Een aangekochte beloning verschijnt in de verzameling. De kostprijs en beschikbare beloningen staan in de constante `REW`.

Een vereenvoudigd voorbeeld:

```javascript
['🌈', 'Regenboog', 5]
```

Dit betekent:

- symbool: regenboog;
- naam: Regenboog;
- prijs: 5 sterren.

## Inhoud aanpassen

Maak vóór elke aanpassing een reservekopie van `index.html`.

### Naamgeving wijzigen

De naam van het kind wordt bij de start ingevoerd. Er is dus geen vaste naam meer in de code nodig.

### Symbolen toevoegen

Zoek in `index.html` naar:

```javascript
const SYMBOLS = [
```

Voeg een nieuw symbool toe in dezelfde structuur:

```javascript
['🚁', 'Helikopter']
```

### Voorbeeldwoorden aanpassen

Zoek naar:

```javascript
const DATA = [
```

Een item gebruikt deze volgorde:

```javascript
['LETTER', 'WOORD', 'EMOJI']
```

Voorbeeld:

```javascript
['P', 'PEER', '🍐']
```

### Letterklanken aanpassen

Zoek naar:

```javascript
const SOUND = {
```

Voorbeeld:

```javascript
E: 'eeeee'
```

### Beloningen toevoegen

Zoek naar:

```javascript
const REW = [
```

Voeg een beloning toe met symbool, naam en kostprijs:

```javascript
['🛸', 'Ruimteschip', 30]
```

## Probleemoplossing

### De app toont een lege pagina

Controleer:

- of het bestand exact `index.html` heet;
- of het bestand volledig is geüpload;
- of JavaScript in de browser is ingeschakeld;
- of je niet per ongeluk stukken uit het bestand hebt verwijderd.

### De app geeft een localStorage- of SecurityError

De huidige versie gebruikt een veilige opslaglaag. Directe fouten door geblokkeerde browseropslag zouden daardoor niet mogen verhinderen dat de app start.

In een streng afgeschermde preview werkt de app in tijdelijke geheugenmodus. De voortgang wordt daar niet blijvend bewaard.

### Er is geen geluid

Controleer:

- of het volume van het toestel aanstaat;
- of het browsertabblad niet gedempt is;
- of je eerst op een knop hebt geklikt;
- of de browser spraaksynthese ondersteunt;
- of een Nederlandse stem op het toestel beschikbaar is.

Mobiele browsers laten geluid doorgaans pas toe nadat de gebruiker zelf op het scherm heeft getikt.

### Het luisterspel spreekt niets uit

Klik op de blauwe luidsprekerknop in het spel. Controleer daarna de geluidsinstellingen en probeer eventueel een andere browser.

### Groot of klein reageert niet

Vernieuw de pagina zonder cache en controleer of de nieuwste `index.html` op GitHub staat. De huidige versie vergelijkt hoofdletters en kleine letters als afzonderlijke antwoorden.

### Wijzigingen zijn niet zichtbaar op GitHub Pages

- Controleer of de wijziging op de `main`-branch staat.
- Controleer of Pages publiceert vanuit `/ (root)`.
- Vernieuw de browser zonder cache.
- Controleer in GitHub of de nieuwste commit zichtbaar is.

### De voortgang is verdwenen

Mogelijke oorzaken:

- de browseropslag werd verwijderd;
- de app werd in privémodus gebruikt;
- de app werd in een sandbox-preview geopend;
- een andere browser of een ander toestel werd gebruikt;
- opslag is door beveiligingsinstellingen geblokkeerd.

## Privacy en veiligheid

Letterheld verwerkt de ingevoerde naam uitsluitend in de browser.

De app:

- verstuurt de naam niet naar een server;
- gebruikt geen gebruikersaccount;
- gebruikt geen externe databank;
- gebruikt geen trackingcode;
- gebruikt geen advertentienetwerk;
- synchroniseert geen voortgang tussen toestellen.

Publiceer geen persoonlijke informatie in de broncode. De naam van het kind wordt tijdens het gebruik ingevoerd en hoeft niet in `index.html` te worden vastgelegd.

## Mogelijke uitbreidingen

Mogelijke volgende versies:

- meerdere kinderprofielen;
- verschillende moeilijkheidsniveaus;
- opgenomen letterklanken in plaats van synthetische spraak;
- cijfers, kleuren en vormen;
- oefeningen met korte woorden;
- installeerbare Progressive Web App;
- eigen app-icoon;
- offline cache;
- ouderdashboard;
- export of herstel van voortgang;
- toegankelijkheidsinstellingen;
- grotere keuze aan symbolen en beloningen.

## Licentie en hergebruik

Voeg desgewenst een afzonderlijk `LICENSE`-bestand toe wanneer je de code publiek wilt laten hergebruiken. Zonder expliciete licentie is niet automatisch vastgelegd onder welke voorwaarden anderen het project mogen kopiëren, aanpassen of verspreiden.

---

Veel leerplezier met Letterheld!
