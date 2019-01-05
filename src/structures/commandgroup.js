const optionDefaults = {
  id: null,
  name: null,
  description: null,
};

class CommandGroup {
  constructor(options) {
    this.initialize(options);
    this.commands = new Map();
  }

  initialize(options = {}) {
    const opts = { ...optionDefaults, ...options };
    if (typeof opts.id !== 'string') throw new Error('Command Group id must be a string');
    if (typeof opts.name !== 'string') opts.name = opts.id;
    this.options = opts;
    Object.keys(optionDefaults).forEach((key) => {
      Object.defineProperty(this, key, { get: () => this.options[key] });
    });
  }
}

module.exports = { CommandGroup };
