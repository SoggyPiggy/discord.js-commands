const optionDefaults = {
  id: null,
  name: null,
  description: null,
};

class CommandGroup {
  constructor(options = {}) {
    this.options = { ...optionDefaults, ...options };
    this.commands = new Map();

    if (typeof this.options.id !== 'string') throw new Error('Command Group id must be a string');
    if (typeof this.options.name !== 'string') this.options.name = this.options.id;
  }

  get id() {
    return this.options.id;
  }

  get name() {
    return this.options.name;
  }

  get description() {
    return this.options.description;
  }
}

module.exports = { CommandGroup };
