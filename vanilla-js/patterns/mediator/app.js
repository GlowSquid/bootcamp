const User = function(name) {
  (this.name = name), (this.chatroom = null);
};

User.prototype = {
  send: function(msg, to) {
    this.chatroom.send(msg, this, to);
  },
  receive: function(msg, from) {
    console.log(`${from.name} to ${this.name}: ${msg}`);
  }
};

const Chatroom = function() {
  let users = {}; // List of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(msg, from, to) {
      if (to) {
        // Single user msg
        to.receive(msg, from);
      } else {
        // Mass msg
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(msg, from);
          }
        }
      }
    }
  };
};

const lisa92 = new User('lisa92');
const xxOSCARxx = new User('xxOSCARxx');
const baby_face = new User('baby_face');

const chatroom = new Chatroom();

chatroom.register(lisa92);
chatroom.register(xxOSCARxx);
chatroom.register(baby_face);

lisa92.send('asl plz', xxOSCARxx);
baby_face.send('hiiiiiiii asl plz', xxOSCARxx);
xxOSCARxx.send('/me slaps everyone around a bit with a large trout');
