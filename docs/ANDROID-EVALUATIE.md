# Pakket 28 — Android-evaluatie

## Advies
**Eerste keuze: Trusted Web Activity (TWA) zodra publicatie in Google Play nodig is.** Letterheld is web-first, volledig statisch en PWA/offline-ready. Een TWA bewaart de browserruntime en vraagt geen verspreide Android-code in de leerlogica. Voorwaarde: HTTPS-hosting, een geldige PWA en Digital Asset Links op een domein onder eigen beheer.

**Tweede keuze: Capacitor alleen wanneer concrete native functies nodig worden** die niet betrouwbaar via webstandaarden beschikbaar zijn, zoals uitgebreid lokaal bestandsbeheer of specifieke platformintegraties. Capacitor voegt een native runtime, Android Studio-project en dependencybeheer toe en is daarom nu zwaarder dan nodig.

## Adaptercontrole
- Opslag: `js/store.js` — vervangbare adapter, geen directe opslag in modules.
- Spraak: `js/speech.js` — vervangbare adapter, modules gebruiken de service.
- Audio: nog geen lokale audiobestanden nodig; spraakfallback is stil en veilig.
- Delen: niet vereist door de huidige pakketten; voeg later uitsluitend via een adapter toe.
- Beloningen: `js/rewards.js` — platformneutrale profielmutaties.

## Beslismoment
Kies TWA wanneer de gehoste PWA stabiel is en Play Store-distributie volstaat. Heropen de keuze voor Capacitor alleen op basis van een concrete native capability gap. Er is in dit pakket geen Android-project of Android-specifieke modulecode toegevoegd.
