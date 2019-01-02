const { Command } = require('./command');
const { CommandGroup } = require('./commandgroup');

class CommandRegistry {
  constructor(client) {
    this.client = client;
    this.commands = new Map();
    this.groups = new Map();
  }
}

module.exports = { CommandRegistry };
