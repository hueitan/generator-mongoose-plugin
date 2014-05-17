#<%= mongooseName %>#

<%= description %>

##Usage##

```javascript
var <%= safeSlugname %> = require('./<%= mongooseName %>');
var Game = new Schema({ ... });
Game.plugin(<%= safeSlugname %>, { index: true });
```

##Options##

(Under Construction)

##License##

MIT