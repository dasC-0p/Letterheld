# Architectuur- en regressiereview na Pakket 10

## Besluit: GO
De webkern was voldoende afgebakend om Pakket 11 te starten: app-shell/router, registry, opslag-, profiel-, instellingen- en spraakservice waren gescheiden; Letters stond als zelfstandige module met data, views en listenergenerator; de mobiele CSS gebruikte 100dvh, schaalbare elementen en grote aanraakvlakken.

## Controles
- Centrale grenzen: modules roepen geen `localStorage` of `speechSynthesis` rechtstreeks aan.
- Registry: stabiele module-id en unieke registratie.
- Profiel: schemaVersion 1 en migratie van `name`, `symbol`, `stars`, `owned`.
- Letters: ontdekken en luisteren blijven via dezelfde centrale shell bereikbaar.
- Listenergenerator: 2, 3, 4 en 6 unieke keuzes getest.
- Mobiel: CSS-regels voor 320px/laag landschap aanwezig; echte browserrendering was niet beschikbaar.

## Kleine bijsturingen
- Unieke antwoordopties centraal gemaakt.
- Fisher–Yates-shuffle gebruikt voor voorspelbare invarianten.
- Ontbrekende spraak- of opslag-API blijft een stille fallback.

## Open aandachtspunt
Een echte browserconsole- en viewporttest bleef vereist in de finale acceptatie op de doelhost.
