class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You're subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You're now unsubbed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}

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
