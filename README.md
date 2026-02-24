# CourtVision AR

## Concept

Voor deze opdracht koos ik als onderwerp NBA en WNBA trading cards.
Op de trading cards staan foto's van spelers met hun naam en team. Ik heb ervoor gezorgd dat deze kaarten worden uitgebreid door ook de statistieken (punten, rebounds, assist) te laten zien.

De AR-laag is inhoudelijk verbonden met het onderwerp:

- bij de image tracking worden de spelerskaarten verrijkt met statistieken, beelden en audio

- bij de face tracking kan de gebruiker zelf “een speler worden” door sportaccessoires op het      gezicht te plaatsen en een 3D-model van een trofee erbij te halen


## Website structuur

De applicatie bestaat uit drie pagina’s:

index.html
Startpagina met navigatie naar de twee AR-pagina's.

image.html
Image tracking pagina voor de trading cards.

face.html
Face tracking pagina waarin de gebruiker zweetbandjes kan dragen en de trofee kan vastnemen.

### Image Tracking (image.html)

Er worden vier targets gebruikt in targets.mind:

target-0: Julie Allemand

target-1: Stephen Curry

target-2: Emma Meesseman

target-3: D’Angelo Russell

Voor elk target bestaat er een aparte <a-entity mindar-image-target="targetIndex: ...">.

AR-inhoud per kaart

Bij het detecteren van een kaart verschijnt:

- een afbeelding van de speler
- tekstelement met statistieken
- audio van hun beste momenten

### Face Tracking (face.html)

Bij face tracking worden objecten op het gezicht geplaatst:

- een headband (2D afbeelding met transparante achtergrond)
- een 3D trofee model naast het gezicht

Bewuste anchorIndex keuze:
Er wordt gewerkt met een specifieke anchorIndex 10 omdat hier het zweetbandje ongeveer moet komen op het gezicht.

## Interactie

De gebruiker kan via een knop wisselen tussen:

- 2 verschillende headbands
- geluid aan/uit

Er is ook een knop voorzien om terug te keren naar de index.html.



## Assets

3D-model trofee: https://sketchfab.com/3d-models/larry-obrien-trophy-v01-1085f9d36e904be78cfae69f189fbc22 






