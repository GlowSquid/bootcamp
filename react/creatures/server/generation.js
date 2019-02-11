const Creature = require('./creature');

const { REFRESH_RATE, SECONDS } = require('./config');

const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
  constructor() {
    this.expiration = this.calculateExpiration();
  }

  calculateExpiration() {
    const expirationPeriod = Math.floor(Math.random() * (refreshRate / 2)); // up to 50% more or less

    const msUntilExpiration =
      Math.random() < 0.5
        ? refreshRate - expirationPeriod
        : refreshRate + expirationPeriod;

    return new Date(Date.now() + msUntilExpiration);
  }

  newCreature() {
    if (Date.now() > this.expiration) {
      throw new Error(`this gen expirated on ${this.expiration}`);
    }

    return new Creature();
  }
}

module.exports = Generation;
