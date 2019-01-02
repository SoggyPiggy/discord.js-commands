const optionDefaults = {
  id: null,
  name: null,
  description: null,
};

class CommandGroup {
  constructor(options = {}) {
    this.options = { ...optionDefaults, ...options };
    this.commands = new Map();
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
