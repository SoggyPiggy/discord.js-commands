const { EventEmitter } = require('events');

const optionDefaults = {
  prefix: '>', // Comand prefix;
  watchFor: 60000, // Watch a failed command to be turned into a command for this long
};

class Client extends EventEmitter {
  constructor(discord, options = {}) {
    super();
    this.options = { ...optionDefaults, ...options };
  }
}

module.exports = { Client };
