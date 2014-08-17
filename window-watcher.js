var BBEvents = require('backbone-events-standalone');
var raf = require('component-raf');


function Watcher() {
    var self = this;
    window.addEventListener('resize', function () {
        // debounce with requestAnimationFrame
        raf(function () {
            self.trigger('resize');
        });
    }, false);
}

Watcher.prototype.get = function (type) {
    return this[type];
};

// add backbone events
BBEvents.mixin(Watcher.prototype);

// getter for width
Object.defineProperty(Watcher.prototype, 'width', {
    get: function () {
        return window.innerWidth;
    }
});

// getter for height
Object.defineProperty(Watcher.prototype, 'height', {
    get: function () {
        return window.innerHeight;
    }
});

// export a single instance (the whole point is re-use it);
module.exports = new Watcher();
