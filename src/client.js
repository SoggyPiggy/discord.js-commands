const { EventEmitter } = require('events');
const { CommandRegistry } = require('./structures/commandregistry');

const optionDefaults = {
  prefix: '>', // Command prefix;
  watchFor: 60000, // Watch a failed command to be turned into a command for this long
};

class Client extends EventEmitter {
  constructor(discord, options = {}) {
    super();
    this.options = { ...optionDefaults, ...options };
    this.registry = new CommandRegistry(this);
  }
}

module.exports = { Client };
