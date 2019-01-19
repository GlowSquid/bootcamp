function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You're subscribed to ${fn.name}`);
  },
  unsubscribe: function(fn) {
    // filter out from the list whatever matches the callback function. If no match, the callback remains.The filter returns a new list and reassigns the list of observers
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You're now unsubbed from ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
};

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurMillisecs);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurMillisecs);
});

document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurSecs);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCurSecs);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

// Click handler
const getCurMillisecs = function() {
  console.log(`Current millisecs: ${new Date().getMilliseconds()}`);
};

const getCurSecs = function() {
  console.log(`Current secs: ${new Date().getSeconds()}`);
};
