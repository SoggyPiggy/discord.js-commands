const { Command } = require('./command');
const { CommandGroup } = require('./commandgroup');

class CommandRegistry {
  constructor(client) {
    this.client = client;
    this.commands = new Map();
    this.groups = new Map();

    this.createGroup();
  }

  registerGroup(group) {
    if (group instanceof CommandGroup) {
      this.groups.set(group.id, group);
      // console.log(`discord.js-commands| Group registered: ${group.id}`);
    }
  }

  createGroup(options) {
    const group = new CommandGroup(options);
    this.registerGroup(group);
  }

  registerCommand(command) {
    if (command instanceof Command) {
      this.commands.set(command.id, command);
      this.groups.get(command.options.group).commands.set(command.id, command);
    }
  }

  createCommand(options, run) {
    const command = new Command(options);
    command.run = run;
    this.registerCommand(command);
  }
}

module.exports = { CommandRegistry };
