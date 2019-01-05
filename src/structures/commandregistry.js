const { Command } = require('./Command');
const { CommandGroup } = require('./CommandGroup');
const { ParameterType } = require('./ParameterType');

/* eslint-disable class-methods-use-this */

class CommandRegistry {
  constructor(client) {
    this.client = client;
    this.commands = new Map();
    this.commandGroups = new Map();
    this.parameterTypes = new Map();
  }

  registerDefaultCommands() {
    // TODO: Add more default commands
  }

  registerDefaultCommandGroups() {
    // TODO: Add more default groups
  }

  registerDefaultParameterTypes() {
    // TODO: Add more default parameterTypes
  }

  registerCommand(command) {
    if (!(command instanceof Command)) throw new Error('registerCommand only accepts instances of Command class');
    // TODO: add functionality
  }

  registerCommandGroup(group) {
    if (!(group instanceof CommandGroup)) throw new Error('registerGroup only accepts instance of CommandGroup class');
    // TODO: add functionality
  }

  registerParameterType(type) {
    if (!(type instanceof ParameterType)) throw new Error('registerType only accepts instance of ParameterType class');
    // TODO: add functionality
  }

  quickCommand({ options, run }) {
    this.registerCommand(new class extends Command {
      constructor(registry) {
        super(registry, options);
        if (typeof run === 'function') this.run = run;
      }
    }(this));
  }

  quickCommandGroup({ options }) {
    this.registerCommandGroup(new class extends CommandGroup {
      constructor() {
        super(options);
      }
    }());
  }

  quickParameterType({ options, parse, validate }) {
    this.registerParameterType(new class extends ParameterType {
      constructor() {
        super(options);
        if (typeof parse === 'function') this.parse = parse;
        if (typeof validate === 'function') this.validate = validate;
      }
    }());
  }
}

module.exports = { CommandRegistry };
