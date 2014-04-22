# window-watcher

Simple CommonJS module for easily listening to changes to window width.

The idea here is to unify code that cares about changes to window size.

It also uses `requestAnimationFrame` (or fallback) where possible to optimize for rendering something in response to change. You can of course deboune handler further, but you get a bit of sane built-in debounce out of the box.

Also, it uses "backbone style" events. So from an [ampersand-view](https://github.com/ampersandjs/ampersand-view), or backbone-view you can `listenTo` this one shared state object from several view and know that it'll get automatically unbound when the view is destroyed.


## install

```
npm install window-watcher
```

## example

```javascript
var ww = require('window-watcher');


ww.on('resize', function () {
    // request animation frame debounced callback
});

ww.width; // this is shortcut to window.innerWidth;
ww.height; // this is shortcut to window.innerHeight;
```

## credits

If you like this follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter.

## license

MIT

