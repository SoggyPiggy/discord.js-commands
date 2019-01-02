const optionDefaults = {
  id: null,
  name: null,
  group: null,
};

class Command {
  constructor(registry, options = {}) {
    this.registry = registry;
    this.options = { ...optionDefaults, ...options };
    if (typeof this.options.id !== 'string') {
      throw new Error('Command id must be a string');
    }
  }

  /* async run() {
  } */
}

module.exports = { Command };
