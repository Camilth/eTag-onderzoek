### Inleiding

Dit project laat zien hoe je caching kan toevoegen aan een applicatie. Het gaat hier dan specifiek om code die je toevoegt aan de backend. Deze demo laat zien hoe je door middel van eTags de responsetijd van API-calls kan verlagen.

### Frontend draaien

De frontend kan je draaien door naar Red\frontend\red in de command line te navigeren en dan ```npm run dev``` uit te voeren.

### Backend draaien

De backend kan je draaien door [RedApplication](https://github.com/Camilth/Red/blob/35c15f045bf39483f3089d565c5dbdc1ae9ce35c/src/main/java/org/example/red/RedApplication.java) uit te voeren.

### Hoe werkt het?

De backend geeft een grote lijst aan items terug. Om te voorkomen dat deze lijst constant wordt opgevraagd terwijl er geen veranderingen zijn houden we een versienummer bij. Dit versienummer word geupdate in addItem() van ProductService.java.

#### eTag

Dit versienummer gebruik ik als basis voor een eTag. Een eTag is een HTTP-header. De browser houdt automatisch eTag's bij, je hoeft dus niets extra's in de frontend te implementeren.

#### Automatische eTag's
Je kan eTags ook automatisch laten generen door Spring door middel van een [ShallowEtagHeaderFilter](https://docs.spring.io/spring-framework/reference/web/webmvc/filters.html#filters-shallow-etag), dit werkte echter niet helemaal voor mijn situatie. Spring genereert een eTag gebaseerd op de body van de response. Deze body kan echter heel groot worden waardoor het request alsnog heel lang duurt, en het voordeel van cachen op deze manier is juist dat het snel is. Als je dan de hele body nog moet parsen verlies je heel veel van dit voordeel. Daarom heb ik er voor gekozen om een eTag bij te houden op basis van een versienummer dat verandert bij elk nieuw product.

#### Custom eTag's
De custom eTag logica bevindt zich in ProductController.java. Je hebt een RequestHeader nodig voor het endpoint, waarin je de eTag die de browser meegeeft bemachtigd. Vervolgens moet je het versienummer bemachtigen om deze te vergelijken met de eTag van de browser. Als deze matchen stuur je 304 'Not Modified' terug. Als deze niet matchen stuur je een 200 + body + eTag terug. Zo is de eTag en van de browser up-to-date. 

#### Bronnen:
1. https://www.baeldung.com/etags-for-rest-with-spring
2. https://docs.spring.io/spring-framework/reference/web/webmvc/filters.html#filters-shallow-etag
3. https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/ETag
4. https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching
5. https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Conditional_requests
6. https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/filter/ShallowEtagHeaderFilter.html
7. https://www.youtube.com/watch?v=Cy2ZJOBgk84
8. https://web.dev/articles/http-cache

Voor het laten zien van performance:
* https://developer.mozilla.org/en-US/docs/Web/API/Performance

Naar gekeken en onderzoek naar gedaan maar niet gebruikt:
* https://redis.io/
