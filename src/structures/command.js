const { stringTrimLower } = require('./../utilities');

const optionDefaults = {
  id: null,
  name: null,
  group: null,
  aliases: [],
  parameters: [],
};

class Command {
  constructor(registry, options) {
    this.registry = registry;
    this.client = registry.client;
    this.initialize(options);
  }

  async run({ message }) {
    message.reply(`\`${this.id}\` Command missing run function.`);
  }

  async requestFollowup({ request, type = 'string', message }) {
    const parameter = this.registry.parameterTypes.get(type);
    if (!parameter) throw new Error(`Type '${type}' not defined`);
    /* eslint-disable no-await-in-loop */
    for (let i = 0; i < Infinity; i += 1) {
      if (i < 1) message.reply(`${request}\nType \`${this.registry.client.options.prefix}cancel\` to stop the command from continuing.`);
      else message.reply(`Invalid response, please try again\n${request}\nType \`${this.registry.client.options.prefix}cancel\` to stop the command from continuing`);
      const replies = message.channel.awaitMessage(
        msg => msg.author === message.author, { max: 1 },
      );
      const reply = [...await replies][0][1];
      // TODO: Add check if they are trying ot cancel out of it
      const results = await parameter.check(stringTrimLower(reply.content));
      if (results.passed) return results.value;
    }
    /* eslint-enable no-await-in-loop */
    return { passed: false, value: null };
  }

  initialize(options = {}) {
    const opts = { ...optionDefaults, ...options };
    if (typeof opts.id !== 'string') throw new Error('Command id must be a string');
    opts.id = stringTrimLower(opts.id);
    opts.aliases = [...new Set([
      ...Command.generateAliases(opts.id),
      ...opts.aliases.reduce((aliases, a) => [...aliases, ...Command.generateAliases(a)], []),
    ])];
    opts.parameters = opts.parameters.map((parameter) => {
      const parameterType = this.registry.parameterTypes.get(parameter.type);
      if (!parameterType) throw new Error(`Parameter Type '${parameter.type}' not found`);
      return { ...parameter, type: parameterType };
    });
    this.options = opts;
    Object.keys(optionDefaults).forEach((key) => {
      Object.defineProperty(this, key, { get: () => this.options[key] });
    });
  }

  static generateAliases(alias) {
    return [
      stringTrimLower(alias),
      stringTrimLower(alias).replace(/-/g, ''),
    ];
  }
}

module.exports = { Command };
